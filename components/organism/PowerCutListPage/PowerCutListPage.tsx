import PowerCutCurvedBanner from '_molecules/PowerCutCurvedBanner/PowerCutCurvedBanner'
import { PowerCutListPage as PowerCutListPageType } from '_types/CMS/pages'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import PowerCutList from '_molecules/PowerCutList/PowerCutList'
import { usePowerCutList } from '_context/power-cut-list'
import { IncidentContent } from '_types/local/incidents'
import { ComponentsTypeName } from '_types/CMS'
import styles from './PowerCutList.module.scss'
import { useEffect, useState } from 'react'
import Loader from '_atoms/Loader/Loader'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import axios from 'axios'

interface PowerCutListPageProps {
  data: PowerCutListPageType
}
interface PowerCutListState {
  isLoading: boolean
  powerCuts?: string[]
}

const DynamicPowerCutList = dynamic(
  () => import('_molecules/PowerCutList/PowerCutList')
) as typeof PowerCutList

export const PowerCutListPage = ({ data }: PowerCutListPageProps) => {
  const [powerCutList, setPowerCutList] = useState<PowerCutListState>({
    isLoading: true,
  })

  const router = useRouter()
  const {
    powerCutListState: { incidentsDtoList, extraProperties },
    setPowerCutListState,
  } = usePowerCutList()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/power-cut/fetch-list')
        setPowerCutListState({
          incidentsDtoList: data.map((incident: IncidentContent) => {
            return incident.ukpnIncident
          }),
          extraProperties: data.map((incident: IncidentContent) => {
            return {
              friendlyDescription:
                incident.incidentCategoryCustomerFriendlyDescription,
              TBCDescription:
                incident.incidentTypeTBCEstimatedFriendlyDescription,
            }
          }),
        })
        setPowerCutList({ isLoading: false })
      } catch (err) {
        router.push('/service-down')
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    document.body.classList.remove('menu-open')
  }, [])

  return (
    <>
      {powerCutList.isLoading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        </div>
      )}
      {!powerCutList.isLoading && (
        <>
          <PowerCutCurvedBanner
            __typename={ComponentsTypeName.POWER_CUT_CURVED_BANNER}
            icon={IconNames.FORTY_PX_POWER_CUT}
            title={data?.pageTitle}
          />
          <div className={styles.powerCutListWrapper}>
            <DynamicPowerCutList
              incidents={incidentsDtoList.filter((inc) => !!inc)}
              extraProperties={extraProperties}
            />
          </div>
          {!!data.contactUsItems && !!data.contactUsItems.length && (
            <div className={styles.powerCutListContactWrapper}>
              {data.contactUsItems.map((comp, i) =>
                renderComponent({ data: comp, id: i })
              )}
            </div>
          )}
        </>
      )}
    </>
  )
}
