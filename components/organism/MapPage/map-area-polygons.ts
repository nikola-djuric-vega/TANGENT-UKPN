import epn from './boundaries/ukpnEpnBoundaries'
import spn from './boundaries/ukpnSpnBoundaries'
import lpn from './boundaries/ukpnLpnBoundaries'

// Boundaries
const getLatLng = (d: number[]): google.maps.LatLngLiteral => ({
  lat: d[1],
  lng: d[0],
})

const ukpnLpnBoundaries = lpn.map(getLatLng)
const ukpnEpnBoundaries = epn.map(getLatLng)
const ukpnSpnBoundaries = spn.map(getLatLng)

const getWorldRect = (): google.maps.LatLngLiteral[] => {
  return [
    { lat: -90, lng: -180 },
    { lat: -90, lng: 0 },
    { lat: -90, lng: 180 },
    { lat: 90, lng: 180 },
    { lat: 90, lng: 0 },
    { lat: 90, lng: -180 },
  ]
}

const londonPolygon = {
  paths: ukpnLpnBoundaries,
  strokeColor: '#18c7c5',
  strokeOpacity: 1,
  strokeWeight: 2,
  fillColor: '#ffffff',
  fillOpacity: 0,
}

const epnPolygon = {
  paths: ukpnEpnBoundaries,
  strokeColor: '#18c7c5',
  strokeOpacity: 0.25,
  strokeWeight: 2,
  fillColor: '#ffffff',
  fillOpacity: 0,
}

const spnPolygon = {
  paths: ukpnSpnBoundaries,
  strokeColor: '#18c7c5',
  strokeOpacity: 0.25,
  strokeWeight: 2,
  fillColor: '#ffffff',
  fillOpacity: 0,
}

const UKPNRegionPolygon = {
  paths: [
    getWorldRect(),
    ukpnLpnBoundaries,
    ukpnEpnBoundaries,
    ukpnSpnBoundaries,
  ],
  strokeColor: '#0268b8',
  strokeOpacity: 0.25,
  strokeWeight: 2,
  fillColor: '#000000',
  fillOpacity: 0.25,
}

export const areaPolygons = [
  londonPolygon,
  epnPolygon,
  spnPolygon,
  UKPNRegionPolygon,
]
