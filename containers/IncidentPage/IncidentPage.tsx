import PowerCutIncidentHeader from '_molecules/PowerCutIncidentHeader/PowerCutIncidentHeader'
import {
  Incident,
  Marker,
  PowerCutType,
  UserLocation,
} from '_types/local/incidents'
import { IncidentPageType, PowerCutPanelItem } from '_types/CMS/pages'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import IncidentCard from '_organism/IncidentCard/IncidentCard'
import styles from './IncidentPage.module.scss'
import Loader from '_atoms/Loader/Loader'
import Layout from '_hoc/Layout/Layout'
import { useEffect, useState } from 'react'
import MultiPinCards from '_molecules/MultiPinCards/MultiPinCards'
import { IncidentHelper } from '_lib/incident-helper'
import { useRouter } from 'next/router'
import { Address } from '_types/local/address-lookup'
import queryString from 'query-string'

interface IncidentPageProps {
  data: IncidentPageType
}

export interface IncidentState {
  refreshIncidentsInterval: number | null
  polygon?: google.maps.PolygonOptions[]
  addressMarker?: UserLocation
  cmsData: PowerCutPanelItem[]
  pollingIntervalTime: number
  incident: Incident | null
  marker?: Marker | null
  isMultipin: boolean
  isLoading: boolean
  map?: google.maps.Map
}

export const IncidentPage = ({ data }: IncidentPageProps) => {
  const [incidentState, setIncidentState] = useState<IncidentState>({
    cmsData: data.descendants.items,
    refreshIncidentsInterval: null,
    pollingIntervalTime: 30000,
    isMultipin: false,
    isLoading: true,
    incident: null,
  })
  const router = useRouter()

  const init = async (map?: google.maps.Map) => {
    const searchedAddress = localStorage.getItem('searchedAddress')
    const formattedAddress =
      searchedAddress && (JSON.parse(searchedAddress) as Address)

    const allIncidents = await IncidentHelper.getAllIncidents()
    const queryParams = queryString.parse(location.search)
    const postcodesector = queryParams.postcodesector as string
    const incidentid = queryParams.incidentid as string

    let polygon: google.maps.PolygonOptions[] | undefined
    let addressMarker: UserLocation | undefined
    let foundIncident: Incident | null

    if (!!incidentid || !!postcodesector) {
      const incidentData = await IncidentHelper.loadIncident(
        (incidentid as string) || (postcodesector as string),
        allIncidents,
        formattedAddress,
        !!postcodesector,
        map
      )
      foundIncident = incidentData.incident
      polygon = incidentData.polygon
      addressMarker = incidentData.addressMarker
    } else if (formattedAddress) {
      const { userLocation, incident, incidentPolygon } =
        await IncidentHelper.polygonFromSearch(
          formattedAddress,
          allIncidents,
          map
        )

      polygon = incidentPolygon
      addressMarker = userLocation

      if (incident && incident.incidentReference !== 'undefined') {
        foundIncident = incident
        router.push(`${router.asPath}?incidentid=${incident.incidentReference}`)
      }
    }

    setIncidentState((prevState) => ({
      ...prevState,
      isMultipin:
        foundIncident?.powerCutType === PowerCutType.MULTIPLE_INCIDENT,
      incident: foundIncident,
      isLoading: false,
      addressMarker,
      polygon,
    }))
  }

  useEffect(() => {
    init(incidentState.map)
  }, [router, incidentState.map])

  return (
    <Layout data={data}>
      {!!incidentState.isLoading && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      <>
        <PowerCutIncidentHeader
          incident={incidentState.incident}
          cmsData={data.descendants.items}
        />
        {!incidentState.isMultipin ? (
          <IncidentCard
            setIncidentState={setIncidentState}
            incidentState={incidentState}
          />
        ) : (
          <MultiPinCards
            incidentState={incidentState}
            setIncidentState={setIncidentState}
            pullCardsUp={true}
          />
        )}
        {data.components?.map((comp, i) =>
          renderComponent({ data: comp, id: i })
        )}
      </>
    </Layout>
  )
}
