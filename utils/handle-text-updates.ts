import isPlainObject from 'lodash/isPlainObject'
import { FormikValues } from 'formik'
import axios, { AxiosResponse } from 'axios'

export interface TextUpdatesResponse {
  success: boolean
}

export type HandleTextUpdatesType = (
  values: FormikValues,
  signUpFuture: boolean,
  incidentReference?: string | null,
) => Promise<AxiosResponse<TextUpdatesResponse, any>>

export const handleTextUpdates: HandleTextUpdatesType = (
  values,
  signUpFuture = false,
  incidentReference
) => {
  const searchedAddress = values.address && JSON.parse(values.address)
  const reqData = {
    telephoneNumber: values.telephoneNumber,
    futureIncidentsOptIn: signUpFuture,
    liveIncidentOptIn: !signUpFuture,
    postcode: searchedAddress?.postCode || values.postcode,
    ...(!!signUpFuture &&
      !!searchedAddress &&
      isPlainObject(searchedAddress) && {
        mpan: searchedAddress.mpan.toString(),
        addressLine1: `${
          searchedAddress.houseName || searchedAddress.houseNo
        } ${searchedAddress.streetName}`,
      }),
    incidentId: incidentReference,
  }

  return axios.put<TextUpdatesResponse>('/api/text-updates', reqData)
}
