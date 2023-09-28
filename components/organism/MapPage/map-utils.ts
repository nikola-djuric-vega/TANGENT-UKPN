import { NextRouter } from 'next/router'
import queryString from 'query-string'
import isString from 'lodash/isString'

import {
  PostcodeData as PostcodeDataType,
  IncidentContent,
  PostcodeCenter,
  PowerCutType,
  Incident,
  Marker,
} from '_types/local/incidents'

export const isMulti = (type: string) => {
  return type === PowerCutType.MULTIPLE_INCIDENT
}

export const processIncidentData = (
  incidentData: IncidentContent
): Incident => {
  const PostcodeData = incidentData?.postcodeData || ([] as PostcodeDataType[])

  const incidentId = queryString.parseUrl(incidentData?.panelContentUrl).query
    .incidentId as string

  const incidentReference = incidentData?.incidentReference || incidentId

  const postcode = PostcodeData[0] && PostcodeData[0].postcode
  const coordinates = PostcodeData.map(({ postcode, coordinates }) => ({
    [postcode]: coordinates,
  })).reduce((acc, cur) => Object.assign(acc, cur), {})

  const markers = PostcodeData.map(
    (marker): Marker => ({
      ...marker,
      incidentReference,
      powerCutType: incidentData.powerCutType,
      panelContentUrl: incidentData.panelContentUrl,
    })
  )

  return {
    ...incidentData,
    postcodeData: markers,
    incidentReference,
    postcode,
    coordinates,
  }
}

export const storePostcodes = (allIncidents: Incident[]) => {
  const allPostcodes = allIncidents
    .map(({ postcodeData = [] }) => postcodeData)
    .reduce((acc, cur) => acc.concat(cur), [])
    .map(({ postcode }) => postcode)

  localStorage.setItem('allPostcodes', JSON.stringify(allPostcodes))
}

export const cleanPostcode = (postcode = '') => {
  return postcode.replace(' ', '')
}

export const getPostcodeSector = (postcode = '') => {
  const endsWithTwoLetters = /[a-zA-Z]{2}$/.test(postcode)

  const postcodeSector = endsWithTwoLetters ? postcode.slice(0, -2) : postcode

  return cleanPostcode(postcodeSector)
}

export interface GoToIncidentOptions {
  zoom: boolean
  skipContentLoad: boolean
  showTracker: boolean
  useIncidentType: boolean
  forceMultiMarker: boolean
}

export interface GoToIncidentParams {
  incident: Incident
  marker: Incident
  options: GoToIncidentOptions
}

export const replaceUrlWithPostcode = (
  router: NextRouter,
  postcode: string
) => {
  router.push(
    {
      pathname: router.asPath.split('?')[0],
      query: { postcodesector: postcode },
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

export const replaceUrlWithId = (
  router: NextRouter,
  id?: string | null,
  showTracker?: boolean
) => {
  const showTrackerParam = showTracker ? '&showTracker=true' : ''
  router.push(
    {
      pathname: router.asPath.split('?')[0],
      query: { incidentid: `${id}${showTrackerParam}` },
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

export const parseCoordinates = (coordinates: PostcodeCenter) => {
  return {
    lat: isString(coordinates.lat)
      ? parseFloat(coordinates.lat)
      : coordinates.lat,
    lng: isString(coordinates.lng)
      ? parseFloat(coordinates.lng)
      : coordinates.lng,
  }
}

export const getIncidentByPostcode = (
  incidents: Incident[],
  postcode: string
) => {
  const postcodeSector = getPostcodeSector(postcode)

  return incidents.find(
    (incident) => cleanPostcode(incident.postcode) === postcodeSector
  )
}

export const getMarkerByPostcode = (
  incidents: Incident[],
  postcode: string
): Marker | null => {
  const postcodeSector = getPostcodeSector(postcode)
  let foundMarker = null

  incidents.some((incident) => {
    return incident.postcodeData.some((marker) => {
      if (cleanPostcode(marker.postcode) === postcodeSector) {
        foundMarker = marker
      }
    })
  })

  return foundMarker
}

export const isSameMarker = (
  first?: PostcodeCenter,
  second?: PostcodeCenter
) => {
  if (!first || !second) {
    return false
  }

  if (first.lat === second.lat && first.lng === second.lng) {
    return true
  }

  return false
}

export const getCoordsByAddress = async (
  address: string
): Promise<google.maps.GeocoderResult[]> => {
  const geocoder = new google.maps.Geocoder()

  return new Promise((resolve, reject) => {
    geocoder.geocode(
      {
        address,
        componentRestrictions: {
          country: 'GB',
        },
      },
      (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results) {
          resolve(results)
        } else {
          reject(status)
        }
      }
    )
  })
}
