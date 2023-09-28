import { PowerCutPanelItem, UnplannedPanel } from '_types/CMS/pages'
import mapConfig from '_organism/MapPage/map-config'
import { PostcodeService } from '_utils'
import isString from 'lodash/isString'
import { Address } from '_types/local'
import isEmpty from 'lodash/isEmpty'
import axios from 'axios'

import {
  processIncidentData,
  getMarkerByPostcode,
  getCoordsByAddress,
  getPostcodeSector,
  cleanPostcode,
} from '_organism/MapPage/map-utils'

import {
  IndividualIncidentContent,
  PostcodeCenter,
  IncidentReason,
  UserLocation,
  PowerCutType,
  IncidentData,
  Incident,
  Marker,
} from '_types/local/incidents'
import { Polygon } from '@react-google-maps/api'

export type GetAllIncidents = () => Promise<Incident[]>

export interface PolygonFromSearchTypeResult {
  incident?: Incident | null
  userLocation: UserLocation
  incidentPolygon?: google.maps.PolygonOptions[]
}

export interface IncidentFoundData {
  incident: Incident
  addressMarker?: UserLocation
  polygon?: google.maps.PolygonOptions[]
}

export type FetchIncidentByPostcodeType = (
  postcode: string,
  address?: Address
) => Promise<Incident>

export type PointToLocationType = (
  incident: Incident,
  marker: Marker | null,
  map?: google.maps.Map
) => google.maps.PolygonOptions[] | undefined

export type CalculateZoomFromPolygonType = (
  coordinates: PostcodeCenter[],
  map?: google.maps.Map
) => void

export type GetIncidentByIdType = (
  id?: string | null,
  timestamp?: string
) => Promise<Incident>

export type PolygonFromSearchType = (
  address: Address,
  incidents: Incident[],
  map?: google.maps.Map,
  incident?: Incident | null
) => Promise<PolygonFromSearchTypeResult>

export type InitiateIncidentIntervalType = (
  incident: Incident,
  fecthedIncident: Incident
) => Incident | null

export type DefinedReasonType = (
  incident: Incident | null,
  dictionary: any,
  cmsFields?: PowerCutPanelItem
) => IncidentReason

export type GetIncidentByPostcode = (
  incidents: Incident[],
  postcode: string
) => Incident | null

export type LoadIncident = (
  incidentRef: string,
  allIncidents: Incident[],
  address: '' | Address | null,
  isPostcodeSector: boolean,
  map?: google.maps.Map
) => Promise<IncidentFoundData>
export class IncidentHelper {
  static parseCoordinates = (coordinates: PostcodeCenter) => {
    return {
      lat: isString(coordinates.lat)
        ? parseFloat(coordinates.lat)
        : coordinates.lat,
      lng: isString(coordinates.lng)
        ? parseFloat(coordinates.lng)
        : coordinates.lng,
    }
  }

  static calculateZoomFromPolygon: CalculateZoomFromPolygonType = (
    coordinates = [],
    map
  ) => {
    if (!coordinates || !map) return

    const bounds = new google.maps.LatLngBounds()

    const polygon = new google.maps.Polygon({
      paths: coordinates.map(this.parseCoordinates),
    })

    polygon
      .getPaths()
      .forEach((path: google.maps.MVCArray<google.maps.LatLng>) => {
        path.getArray().forEach((point) => bounds.extend(point))
      })

    const padding = {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
    }

    map?.fitBounds(bounds, padding)
  }

  static getIncidentById: GetIncidentByIdType = async (id, timestamp) => {
    const ts = !!timestamp ? `&ts=${timestamp}` : ''

    const incident = await axios.get<IndividualIncidentContent>(
      `/api/power-cut/incident-by-id?id=${id}${ts}`
    )

    return processIncidentData(incident.data.result)
  }

  static fetchIncidentByPostcode: FetchIncidentByPostcodeType = async (
    postcode,
    addressData
  ) => {
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

  static getAllIncidents: GetAllIncidents = async () => {
    const { data: incidentsData } = await axios.get<IncidentData>(
      '/api/power-cut/all-incidents'
    )
    const allIncidents = incidentsData.incidents || []

    return allIncidents.map(processIncidentData)
  }

  static getIncidentByPostcode: GetIncidentByPostcode = (
    incidents,
    postcode
  ) => {
    const postcodeSector = getPostcodeSector(postcode)
    let foundIncident = null

    incidents.some((incident) => {
      return incident.postcodeData.some((marker) => {
        if (cleanPostcode(marker.postcode) === postcodeSector) {
          foundIncident = incident
        }
      })
    })

    return foundIncident
  }

  static loadIncident: LoadIncident = async (
    incidentRef,
    allIncidents,
    address,
    isPostcodeSector,
    map
  ) => {
    let incident: Incident | null
    if (isPostcodeSector) {
      incident = await IncidentHelper.fetchIncidentByPostcode(
        incidentRef as string
      )
    } else {
      incident = await IncidentHelper.getIncidentById(incidentRef as string)
    }
    const { postcodeData = [] } = incident
    // Take first postcode as no searched postcode to use
    const postcode = postcodeData[0] && postcodeData[0].postcode
    let marker: Marker | null = getMarkerByPostcode(allIncidents, postcode)
    let addressMarker: UserLocation | undefined = {
      postcode: incident.postcode,
      postcodeData: incident.postcodeData,
      powerCutType: incident.powerCutType,
    }

    if (!!address) {
      const userAddressWithinIncindent = getMarkerByPostcode(
        allIncidents,
        address?.postCode
      )
      // The below repetition is needed because the address saved might not be part of
      // the incident in which case we use the postcode from the incident
      marker =
        userAddressWithinIncindent ||
        getMarkerByPostcode(allIncidents, postcode)

      if (map && !!userAddressWithinIncindent) {
        const { userLocation } = await this.polygonFromSearch(
          address,
          allIncidents,
          map,
          incident
        )

        addressMarker = userLocation
      }
    }

    const polygon = IncidentHelper.pointToLocation(incident, marker, map)

    return {
      addressMarker,
      incident,
      polygon,
    }
  }

  static polygonFromSearch: PolygonFromSearchType = async (
    address,
    incidents,
    map,
    incident
  ) => {
    if (!incident) {
      const incidentByPostcode = this.getIncidentByPostcode(
        incidents,
        address.postCode
      )

      incident = !!incidentByPostcode
        ? await this.getIncidentById(incidentByPostcode.incidentReference)
        : null
    }

    const formattedAddress = PostcodeService.formatAddress(address)
    const marker = getMarkerByPostcode(incidents, address.postCode)
    const postcodeSector = getPostcodeSector(address.postCode)

    return getCoordsByAddress(formattedAddress)
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
        let polygon: google.maps.PolygonOptions[] | undefined
        if (!incident) {
          const coordinates = {
            lat: userLocation.lat(),
            lng: userLocation.lng(),
          }

          this.calculateZoomFromPolygon([coordinates], map)
          map?.setZoom(mapConfig.zoomLevels.zoomedIn)
        } else {
          polygon = this.pointToLocation(incident, marker, map)
        }

        return {
          ...(!!incident && { incident: incident }),
          incidentPolygon: polygon,
          userLocation: {
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
        }
      })
  }

  static incidentInterval: InitiateIncidentIntervalType = (
    incident,
    fecthedIncident
  ) => {
    if (!fecthedIncident.ukpnIncident?.timestamp) return null

    // check if anything has changed since our last get request
    if (
      fecthedIncident.ukpnIncident?.timestamp ===
      incident.ukpnIncident?.timestamp
    ) {
      return null
    }

    if (
      fecthedIncident.ukpnIncident?.timestamp &&
      !incident.ukpnIncident?.timestamp
    ) {
      return fecthedIncident
    }

    return fecthedIncident
  }

  static defineReason: DefinedReasonType = (
    incident,
    dictionary,
    cmsFields
  ) => {
    switch (incident?.powerCutType) {
      case PowerCutType.PLANNED_INCIDENT:
        return {
          title: dictionary.reasonForThisPlannedWorkHeader,
          reason: incident?.ukpnIncident?.plannedIncidentReason,
        } as IncidentReason
      case PowerCutType.UNPLANNED_INCIDENT:
        return {
          title: (cmsFields as UnplannedPanel)?.reasonTitle,
          reason: incident?.incidentCategoryCustomerFriendlyDescription,
        } as IncidentReason
      case PowerCutType.RESTORED_INCIDENT:
        return {
          title: dictionary.restoredReasonForThePowerCut,
          reason: incident?.incidentCategoryCustomerFriendlyDescription,
        } as IncidentReason
      default:
        return {}
    }
  }

  static pointToLocation: PointToLocationType = (incident, marker, map) => {
    const coordinates = !!marker && incident.coordinates[marker.postcode]
    const polygonStyling = {
      [PowerCutType.UNPLANNED_INCIDENT]: '#FF630C',
      [PowerCutType.REPORTED_INCIDENT]: '#FF630C',
      [PowerCutType.PLANNED_INCIDENT]: '#758BFD',
      [PowerCutType.RESTORED_INCIDENT]: '#18C7C5',
      [PowerCutType.MULTIPLE_INCIDENT]: '#999999',
    }

    if (isEmpty(coordinates) || !coordinates) return
    if (!incident.powerCutType) return

    const paths = coordinates.map(this.parseCoordinates)
    const fillOpacity = mapConfig.polygons.fillOpacity[incident.powerCutType]
    const strokeColor = polygonStyling[incident.powerCutType]
    const fillColor = polygonStyling[incident.powerCutType]
    const strokeWeight = 2

    this.calculateZoomFromPolygon(coordinates, map)
    const polygons = [
      {
        paths,
        strokeWeight,
        strokeColor,
        fillColor,
        fillOpacity,
        type: incident.powerCutType,
      },
    ]

    return polygons
  }
}
