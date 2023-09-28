import { IncidentDto } from '_types/local/incident-dto'
import { transformString } from './tranform-string'
import { IconNames } from '_types/local'
import { DateTime } from 'luxon'

import {
  ExtraPropertiesItem,
  IncidentListItem,
  PowerCutType,
} from '_types/local/incidents'

export const transformIncidentsListData = (
  incidents: IncidentDto[],
  extraProperties: ExtraPropertiesItem[],
  dictionaryItems: any
) => {
  const incidentsTranformed: IncidentListItem[] = incidents.map(
    (inc, index) => {
      let incident: IncidentListItem
      const sharedValues = {
        reference: inc.incidentReference,
        incidentId: inc.incidentId,
        affectedPostcodes: inc.postCodesAffected,
      }

      let extraProperty = extraProperties[index]

      switch (inc.incidentTypeName) {
        case PowerCutType.UNPLANNED_INCIDENT:
          incident = {
            extraProperty,
            type: PowerCutType.UNPLANNED_INCIDENT,
            icon: IconNames.FORTY_PX_POWER_CUT,
            strapLine: 'Unplanned power cut',
            customersAffected: noCustomersAffected(
              inc.noCustomerAffected,
              dictionaryItems.over5000
            ),
            moreInfo: {
              headline: printHeadline(
                inc.incidentTypeName as PowerCutType,
                extraProperty.TBCDescription
              ),
              info: inc.mainMessage as string,
              extraInfo: inc.plannedIncidentReason as string,
              receivedDate: printReportedDate(
                inc.incidentTypeName as PowerCutType,
                inc.receivedDate as string
              ),
            },
            ...sharedValues,
          }
          break
        case PowerCutType.RESTORED_INCIDENT:
          incident = {
            extraProperty,
            type: PowerCutType.RESTORED_INCIDENT,
            icon: IconNames.FORTY_PX_SUCCESS,
            strapLine: 'Restored power cut',
            customersAffected: noCustomersAffected(
              inc.noCustomerAffected,
              dictionaryItems.over5000
            ),
            moreInfo: {
              headline: printHeadline(
                inc.incidentTypeName as PowerCutType,
                extraProperty.TBCDescription
              ),
              info: inc.mainMessage as string,
              extraInfo: inc.plannedIncidentReason as string,
              receivedDate: printReportedDate(
                inc.incidentTypeName as PowerCutType,
                inc.receivedDate as string
              ),
            },
            ...sharedValues,
          }
          break
        case PowerCutType.REPORTED_INCIDENT:
          incident = {
            extraProperty,
            type: PowerCutType.REPORTED_INCIDENT,
            icon: IconNames.FORTY_PX_POWER_CUT,
            strapLine: 'Reported power cut',
            customersAffected: noCustomersAffected(
              inc.noCustomerAffected,
              dictionaryItems.over5000
            ),
            moreInfo: {
              headline: printHeadline(
                inc.incidentTypeName as PowerCutType,
                extraProperty.TBCDescription
              ),
              info: inc.mainMessage as string,
              extraInfo: inc.plannedIncidentReason as string,
              receivedDate: printReportedDate(
                inc.incidentTypeName as PowerCutType,
                inc.receivedDate as string
              ),
            },
            ...sharedValues,
          }
          break
        default:
          incident = {
            extraProperty,
            type: PowerCutType.PLANNED_INCIDENT,
            icon: IconNames.PLANNED_PC,
            strapLine: 'Planned work',
            customersAffected: noCustomersAffected(
              inc.noPlannedCustomers,
              dictionaryItems.over5000
            ),
            moreInfo: {
              headline: printHeadline(
                inc.incidentTypeName as PowerCutType,
                extraProperty.TBCDescription
              ),
              info: inc.mainMessage as string,
              extraInfo: inc.plannedIncidentReason as string,
              receivedDate: printReportedDate(
                inc.incidentTypeName as PowerCutType,
                inc.receivedDate as string
              ),
            },
            ...sharedValues,
          }
          break
      }

      return incident
    }
  )

  return incidentsTranformed
}

export const printReportedDate = (type: PowerCutType, receivedDate: string) => {
  const reportedDate = DateTime.fromISO(receivedDate, {
    setZone: true,
  }).toFormat('dd MMM HH:mm')

  return `${reportedDate}`
}

const printHeadline = (type: PowerCutType, TBCDescription: string) => {
  switch (type) {
    case PowerCutType.RESTORED_INCIDENT:
      return `Power was restored at: ${TBCDescription}`
    default:
      return `Power will be back on at: ${TBCDescription}`
  }
}

export const noCustomersAffected = (
  customersAffected: number,
  dicValue: string
) => {
  if (customersAffected === 0) {
    return '-'
  } else if (customersAffected > 5000) {
    return transformString(dicValue)
  } else {
    return customersAffected
  }
}
