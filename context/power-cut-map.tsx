import { isRemovedMarkerCheck } from '_utils/is-removed-marker-check'
import { PostcodeService } from '_utils/postcode-services'
import { Breakpoints } from '_types/local/breakpoints'
import mapConfig from '_organism/MapPage/map-config'
import { useRouter, NextRouter } from 'next/router'
import queryString from 'query-string'
import { Address } from '_types/local'
import isEmpty from 'lodash/isEmpty'
import axios from 'axios'

import {
  replaceUrlWithPostcode,
  getIncidentByPostcode,
  getMarkerByPostcode,
  processIncidentData,
  getCoordsByAddress,
  getPostcodeSector,
  parseCoordinates,
  replaceUrlWithId,
} from '_organism/MapPage/map-utils'

import {
  IndividualIncidentContent,
  PostcodeCenter,
  IncidentData,
  UserLocation,
  PowerCutType,
  Incident,
  Marker,
} from '_types/local/incidents'

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'

export interface PowerCutMapState {
  map: google.maps.Map | null
  exploreMode: boolean
  userMode: boolean
  isLoading: boolean
  incidents: Incident[]
  pollingIntervalTime: number
  controlsPosition: number
  telephone: string
  postcode: string
  activeIncident: Incident | null
  overlayIncident: Incident | null
  activeMarker: Marker | null
  isPanelVisible: boolean
  isPreviewBarVisible: boolean
  lastFetchTimestamp: string
  userLocationMarker: UserLocation | null
  refreshIncidentsInterval: number | null
  mapPolygons: google.maps.PolygonOptions[]
  mapLegendVisible: boolean
  markersVisible: boolean
  isPostcodePanelOpen: boolean
  isTrackPanelOpen: boolean
  isTextUpdatesPanelOpen: boolean
  isCurrentThankYouPanelOpen: boolean
  isFutureThankYouPanelOpen: boolean
  isCanNotSubscribeCurrentIncident: boolean
  isCanNotSubscribeFutureIncident: boolean
  useIncidentType: boolean
  forceMultiMarker: boolean
  searchedAddress: Address | null
  isAddressModalVisible: boolean
}

export interface PowerCutMap {
  mapState: PowerCutMapState
  setMapState: React.Dispatch<React.SetStateAction<PowerCutMapState>>
  router?: NextRouter
  actions: {
    getAllIncidents: () => Promise<Incident[]>
    goToIncident: ({
      incident,
      marker,
      map,
      options,
    }: GoToIncidentParams) => Incident | undefined
    goToIncidentFromStoredSearch: (
      incidents: Incident[],
      address: Address,
      postcode: string,
      map: google.maps.Map
    ) => void
    fetchIncidentByPostcode: (
      postcode: string,
      address?: Address
    ) => Promise<Incident>
    getIncidentById: (
      id?: string | null,
      timestamp?: string
    ) => Promise<Incident>
    activateUserMode: () => void
    activateExploreMode: (
      e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void
    loadIncidentFromSearch: (
      address: Address,
      incidents: Incident[],
      map?: google.maps.Map
    ) => Promise<void>
    resetMapState: () => void
  }
}

export interface PlotPolygonParams {
  coordinates?: PostcodeCenter[]
  type: PowerCutType
  zoom: boolean
  map?: google.maps.Map
}

export const PowerCutMapContext = createContext<PowerCutMap>({
  mapState: {
    map: null,
    exploreMode: true,
    userMode: false,
    isLoading: false,
    incidents: [],
    activeIncident: null,
    overlayIncident: null,
    activeMarker: null,
    pollingIntervalTime: 30000,
    controlsPosition: 0,
    telephone: '',
    postcode: '',
    isPanelVisible: false,
    isPreviewBarVisible: false,
    lastFetchTimestamp: '',
    userLocationMarker: null,
    refreshIncidentsInterval: null,
    mapPolygons: [],
    mapLegendVisible: true,
    markersVisible: false,
    isPostcodePanelOpen: false,
    isTrackPanelOpen: false,
    isTextUpdatesPanelOpen: false,
    isCurrentThankYouPanelOpen: false,
    isFutureThankYouPanelOpen: false,
    isCanNotSubscribeCurrentIncident: false,
    isCanNotSubscribeFutureIncident: false,
    useIncidentType: false,
    forceMultiMarker: false,
    searchedAddress: null,
    isAddressModalVisible: false,
  },
  setMapState: () => {},
  actions: {
    getAllIncidents: async () => [],
    goToIncident: ({
      incident = {} as Incident,
      marker,
      options = {} as GoToIncidentOptions,
    }) => ({} as Incident),
    goToIncidentFromStoredSearch: (incidents, address, postcode, map) => {},
    fetchIncidentByPostcode: async (postcode, address) => ({} as Incident),
    getIncidentById: async (id, timestamp) => ({} as Incident),
    activateUserMode: () => {},
    activateExploreMode: (
      e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {},
    loadIncidentFromSearch: async (
      address: Address,
      incidents: Incident[],
      map?: {}
    ) => undefined,
    resetMapState: () => {},
  },
})

export interface PowerCutMapProps {
  children: ReactNode
}

export interface GoToIncidentOptions {
  zoom?: boolean
  skipContentLoad?: boolean
  showTracker?: boolean
  useIncidentType?: boolean
  forceMultiMarker?: boolean
}

export interface GoToIncidentParams {
  incident: Incident
  marker: Marker | null
  map?: google.maps.Map
  options?: GoToIncidentOptions
}

export const PowerCutMapProvider = ({ children }: PowerCutMapProps) => {
  const router = useRouter()

  const [mapState, setMapState] = useState<PowerCutMapState>({
    map: null,
    exploreMode: true,
    userMode: false,
    isLoading: false,
    incidents: [],
    activeIncident: null,
    overlayIncident: null,
    activeMarker: null,
    pollingIntervalTime: 30000,
    controlsPosition: 0,
    telephone: '',
    postcode: '',
    isPanelVisible: false,
    isPreviewBarVisible: false,
    lastFetchTimestamp: '',
    userLocationMarker: null,
    refreshIncidentsInterval: null,
    mapPolygons: [],
    mapLegendVisible: true,
    markersVisible: false,
    isPostcodePanelOpen: false,
    isTrackPanelOpen: false,
    isTextUpdatesPanelOpen: false,
    isCurrentThankYouPanelOpen: false,
    isFutureThankYouPanelOpen: false,
    isCanNotSubscribeCurrentIncident: false,
    isCanNotSubscribeFutureIncident: false,
    useIncidentType: false,
    forceMultiMarker: false,
    searchedAddress: null,
    isAddressModalVisible: false,
  })

  useEffect(() => {
    if (
      mapState.userLocationMarker &&
      mapState.userMode &&
      !mapState.activeIncident?.postcodeData?.[0]
    ) {
      mapState.map?.setZoom(mapConfig.zoomLevels.zoomedIn)
      mapState.map?.setCenter(
        mapState.userLocationMarker?.postcodeData[0]
          .center as google.maps.LatLngLiteral
      )
    }
  }, [mapState.userLocationMarker, mapState.userMode, mapState.activeIncident])

  const getAllIncidents = async () => {
    const { data: incidentsData } = await axios.get<IncidentData>(
      '/api/power-cut/all-incidents'
    )

    const serviceDown = incidentsData.serviceDown
    const serviceDownUrl = incidentsData.serviceDownUrl
    const pollingIntervalTime = incidentsData.pollingInterval
    const allIncidents = incidentsData.incidents || []

    if (serviceDown && serviceDownUrl) {
      window.location.href = serviceDownUrl
    }

    setMapState((prevState) => ({ ...prevState, pollingIntervalTime }))

    return allIncidents.map(processIncidentData)
  }

  const goToIncident = ({
    incident = {} as Incident,
    marker,
    map,
    options = {} as GoToIncidentOptions,
  }: GoToIncidentParams) => {
    const {
      incidentReference,
      coordinates,
      panelContentUrl,
      serviceDown,
      serviceDownUrl,
    } = incident

    const {
      zoom,
      skipContentLoad,
      showTracker,
      useIncidentType,
      forceMultiMarker,
    } = options

    const isMulti = incident.powerCutType === PowerCutType.MULTIPLE_INCIDENT

    setMapState((prevState) => ({
      ...prevState,
      activeIncident: incident,
      activeMarker: marker,
      overlayIncident: null,
      refreshIncidentsInterval: null,
      useIncidentType: !!useIncidentType,
      forceMultiMarker: !!forceMultiMarker,
      isTrackPanelOpen: skipContentLoad ? prevState.isTrackPanelOpen : false,
      isPostcodePanelOpen: skipContentLoad
        ? prevState.isPostcodePanelOpen
        : false,
      isTextUpdatesPanelOpen: skipContentLoad
        ? prevState.isTextUpdatesPanelOpen
        : false,
      isCurrentThankYouPanelOpen: skipContentLoad
        ? prevState.isCurrentThankYouPanelOpen
        : false,
      isFutureThankYouPanelOpen: skipContentLoad
        ? prevState.isFutureThankYouPanelOpen
        : false,
      isAddressModalVisible: skipContentLoad
        ? prevState.isAddressModalVisible
        : false,
      searchedAddress: null,
      markersVisible: !prevState.userLocationMarker,
    }))

    // Check for service down response
    if (serviceDown && serviceDownUrl) {
      window.location.href = serviceDownUrl
      return
    }

    // If no content url, hide panel
    if (!panelContentUrl) {
      setMapState((prevState) => ({
        ...prevState,
        isPanelVisible: false,
        isPreviewBarVisible: false,
      }))

      return
    }

    // If incident or postcodes sector doesn't exist, hide panel
    // Allow if type is 'Multiple' as 'id' will be null
    if (!incidentReference && incident.powerCutType && !isMulti) {
      setMapState((prevState) => ({
        ...prevState,
        isPanelVisible: false,
        isPreviewBarVisible: false,
      }))

      return
    }

    // Use marker if supplied, otherwise get by postcode/id
    // const marker = options.marker || this.getMarker(postcode, id)
    // If no marker found, should 'not found'
    if (!marker || !incident.powerCutType) {
      setMapState((prevState) => ({
        ...prevState,
        isPanelVisible: true,
        isPreviewBarVisible: false,
      }))

      return
    }

    // Plot a polygon from the incident coordinates
    if (isRemovedMarkerCheck(incident)) {
      setMapState((prevState) => ({
        ...prevState,
        mapPolygons: [],
      }))
    } else {
      plotPolygon({
        coordinates: coordinates[marker.postcode],
        type: incident.powerCutType,
        zoom: !!zoom,
        map,
      })
    }

    // Update the url
    incident.powerCutType === PowerCutType.MULTIPLE_INCIDENT
      ? replaceUrlWithPostcode(router, marker.postcode)
      : replaceUrlWithId(router, incidentReference, showTracker)

    // Load panel content, unless told to skip
    if (!skipContentLoad) {
      setMapState((prevState) => ({
        ...prevState,
        isPanelVisible: true,
        isPreviewBarVisible: false,
      }))
    }

    // Open the map legend key, if not in user mode
    if (!mapState.userMode) {
      setMapState((prevState) => ({
        ...prevState,
        mapLegendVisible: true,
      }))
    }

    return incident
  }

  const goToIncidentFromStoredSearch = (
    incidents: Incident[],
    address: Address,
    postcode: string,
    map: google.maps.Map
  ) => {
    const marker = getMarkerByPostcode(incidents, postcode)
    setMapState((prevState) => ({
      ...prevState,
      userLocationMarker: {
        powerCutType: 'location',
        postcode: postcode,
        postcodeData: [
          {
            center: {
              lat: 1,
              lng: 1,
            },
            postcode: postcode,
          },
        ],
      },
    }))

    fetchIncidentByPostcode(postcode, address)
      .then((incident) =>
        goToIncident({
          incident,
          marker,
          map,
          options: {
            useIncidentType: true,
            zoom: true,
          },
        })
      )
      .catch(console.error)
  }

  const plotPolygon = ({ coordinates, type, zoom, map }: PlotPolygonParams) => {
    if (isEmpty(coordinates) || !coordinates) return
    if (!type) return

    const paths = coordinates.map(parseCoordinates)
    const fillColor = mapConfig.polygons.fillColor[type]
    const fillOpacity = mapConfig.polygons.fillOpacity[type]
    const strokeWeight = 0

    const polygon = {
      paths,
      strokeWeight,
      fillColor,
      fillOpacity,
      type,
    }

    setMapState((prevState) => ({
      ...prevState,
      mapPolygons: [polygon],
    }))

    if (zoom) {
      calculateZoomFromPolygon(coordinates, map)
    }
  }

  const fetchIncidentByPostcode = async (
    postcode: string,
    addressData?: Address
  ) => {
    if (mapState.userMode) {
      setMapState((prevState) => ({
        ...prevState,
        userLocationMarker: {
          ...prevState.userLocationMarker,
          Postcode: postcode,
        } as UserLocation,
      }))
    }

    // API Endpoint needs a blank address object sending with the request
    const address = addressData || {
      mpan: 'string',
      uprn: 0,
      proNumber: 0,
      houseNo: 'string',
      houseName: 'string',
      streetName: 'string',
      county: 'string',
      country: 'string',
      postCode: 'string',
      dno: 1,
      supplierName: 'string',
      supplierNumber: 'string',
    }

    // postcode can be a full postcode or a sector, e.g. 'IG11 7' or 'IG11 7PS'
    // getPostcodeSector will return both of the above as 'IG117'
    const postcodeSector = getPostcodeSector(postcode)

    const incident = await axios.post<IndividualIncidentContent>(
      `/api/power-cut/contextual-incident?postcodeSector=${postcodeSector}`,
      address
    )
    // const incident = mockGetContextualIncident(postcodeSector)
    return processIncidentData(incident.data.result)
  }

  const getIncidentById = async (id?: string | null, timestamp?: string) => {
    if (mapState.userMode && mapState.userLocationMarker) {
      setMapState((prevState) => ({
        ...prevState,
        userLocationMarker: prevState.userLocationMarker
          ? ({
              ...prevState.userLocationMarker,
              id,
            } as UserLocation)
          : null,
      }))
    }

    const ts = !!timestamp ? `&ts=${timestamp}` : ''

    const incident = await axios.get<IndividualIncidentContent>(
      `/api/power-cut/incident-by-id?id=${id}${ts}`
    )
    // const incident = mockGetIncidentById(id)

    return processIncidentData(incident.data.result)
  }

  const calculateZoomFromPolygon = (
    coordinates: PostcodeCenter[] = [],
    map?: google.maps.Map
  ) => {
    if (!coordinates) return

    const theMap = mapState.map || map

    const bounds = new google.maps.LatLngBounds()

    const polygon = new google.maps.Polygon({
      paths: coordinates.map(parseCoordinates),
    })

    polygon
      .getPaths()
      .forEach((path: google.maps.MVCArray<google.maps.LatLng>) => {
        path.getArray().forEach((point) => bounds.extend(point))
      })

    const largeScreen = window.innerWidth >= Breakpoints.LG
    const extraLeftPadding = largeScreen ? 430 : 0 // To account for panel width

    const padding = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50 + extraLeftPadding,
    }

    theMap?.fitBounds(bounds, padding)
  }

  const activateUserMode = () => {
    setMapState((prevState) => ({
      ...prevState,
      userMode: true,
      exploreMode: false,
      mapLegendVisible: true,
      markersVisible: false,
      mapPolygons: [],
    }))
  }

  const activateExploreMode = (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const queryParams = queryString.parse(location.search)
    const queryIncidentId = queryParams.incidentid
    const queryPostcodeSector = queryParams.postcodesector

    // If event data is present, function is called by click
    if (e) {
      if (queryPostcodeSector || queryIncidentId) {
        history.replaceState(null, '', '/power-cut/map')
      }
    }

    setMapState((prevState) => ({
      ...prevState,
      userMode: false,
      exploreMode: true,
      mapLegendVisible: true,
      markersVisible: true,
      userLocationMarker: null,
    }))

    localStorage.removeItem('searchedAddress')
  }

  const loadIncidentFromSearch = async (
    address: Address,
    incidents: Incident[],
    map?: google.maps.Map
  ) => {
    const incident = getIncidentByPostcode(incidents, address.postCode)
    const marker = getMarkerByPostcode(incidents, address.postCode)
    const postcodeSector = getPostcodeSector(address.postCode)
    const formattedAddress = PostcodeService.formatAddress(address)

    activateUserMode()

    await getCoordsByAddress(formattedAddress)
      .then((results) => {
        if (results.length === 1) return results[0]

        // Multiple addresses returned
        // Find the address that matches the user location postcode
        const foundLocation = results.find(({ address_components = [] }) =>
          address_components.find(
            ({ long_name, types = [] }) =>
              types.find((type) => type === 'postal_code') &&
              getPostcodeSector(long_name) === postcodeSector
          )
        )

        return foundLocation || results[0] || {}
      })
      .then((result) => result.geometry) // Get geometry
      .then((geometry) => geometry.location) // Get user location
      .then((userLocation) => {
        setMapState((prevState) => ({
          ...prevState,
          ...(incident && { activeIncident: incident }),
          userLocationMarker: {
            powerCutType: 'location',
            postcode: address.postCode,
            postcodeData: [
              {
                postcode: address.postCode,
                center: {
                  lat: userLocation.lat(),
                  lng: userLocation.lng(),
                },
              },
            ],
          },
        }))
      })

    fetchIncidentByPostcode(address.postCode, address).then((incident) => {
      goToIncident({
        incident,
        marker,
        options: {
          useIncidentType: true,
          zoom: true,
        },
        map,
      })
    })
  }

  const resetMapState = () => {
    // Reset partial map state when naigation occurs
    setMapState((prevState) => ({
      ...prevState,
      exploreMode: true,
      userMode: false,
      isPanelVisible: false,
      isPreviewBarVisible: false,
      lastFetchTimestamp: '',
      userLocationMarker: null,
      mapPolygons: [],
      markersVisible: false,
      isPostcodePanelOpen: false,
      isTrackPanelOpen: false,
      isTextUpdatesPanelOpen: false,
      isCurrentThankYouPanelOpen: false,
      isFutureThankYouPanelOpen: false,
      isAddressModalVisible: false,
      activeIncident: null,
      useIncidentType: false,
      forceMultiMarker: false,
      overlayIncident: null,
      activeMarker: null,
    }))

    mapState.map?.setZoom(mapConfig.zoomLevels.zoomedOut)
  }

  return (
    <PowerCutMapContext.Provider
      value={{
        mapState,
        setMapState,
        router,
        actions: {
          getAllIncidents,
          goToIncident,
          goToIncidentFromStoredSearch,
          fetchIncidentByPostcode,
          getIncidentById,
          activateUserMode,
          activateExploreMode,
          loadIncidentFromSearch,
          resetMapState,
        },
      }}
    >
      {children}
    </PowerCutMapContext.Provider>
  )
}

export const usePowerCutMap = () => useContext(PowerCutMapContext)
