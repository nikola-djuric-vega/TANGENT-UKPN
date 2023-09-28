import { getPostcodeSector } from '_organism/MapPage/map-utils'
import { IndividualIncidentContent } from '_types/local/incidents'
import { Address } from '_types/local'
import axios from 'axios'

export interface ResponseRLD {
  redirect: boolean
  scheduleBlocks?: string
}

export const checkRLDIncidentByPostcode = async (
  postcode: string,
  addressData?: Address
): Promise<ResponseRLD> => {
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

  const postcodeSector = getPostcodeSector(postcode)

  const incident = await axios.post<IndividualIncidentContent>(
    `/api/power-cut/contextual-incident?postcodeSector=${postcodeSector}`,
    address
  )

  if (incident.data.result?.redirect) {
    const blocks = incident.data.result?.blocks
    let scheduleBlocks: string | undefined
    if (blocks?.length! > 1) {
      scheduleBlocks = blocks
        ?.sort()
        ?.reduce((blocks, postcode, index, arr) => {
          if (index !== arr.length - 1) {
            return blocks + postcode?.toLowerCase() + '-'
          } else {
            return blocks + postcode?.toLowerCase()
          }
        }, '')
      return { redirect: true, scheduleBlocks }
    } else {
      scheduleBlocks = blocks?.[0].toLowerCase()
      return { redirect: true, scheduleBlocks }
    }
  } else {
    return { redirect: false }
  }
}
