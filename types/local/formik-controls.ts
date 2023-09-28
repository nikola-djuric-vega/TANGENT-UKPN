import { SmartMeterSubmitData } from './smart-meter'
import { FormikHelpers, FormikValues } from 'formik'
import { Dispatch, RefObject } from 'react'
import { FormState } from '../CMS'
import * as Yup from 'yup'

import {
  CustomFieldsPage,
  FormFieldset,
  FormPage,
  RpcState,
  Form,
} from '_types/CMS'

export type GetInitialValues = (
  pages: FormPage[],
  mandatorySection?: string,
  customElements?: CustomFieldsPage
) => { [key: number]: string }

export type SetValidationSchemaType = (
  page: FormPage,
  mandatorySection?: string,
  subForm?: Form[],
  customElements?: CustomFieldsPage
) => Yup.BaseSchema

export type GetProceedingLabel = (
  fieldsets: FormFieldset[],
  isLastStep: boolean,
  nextLabel?: string,
  submitLabel?: string
) => string

export interface SubmitFormResponse {
  callReference: string
}

export interface submitParams {
  _id: string
  values: FormikValues
  actions: FormikHelpers<FormikValues>
  address?: string | null
  setFormState: Dispatch<React.SetStateAction<FormState>>
  setRpcState: Dispatch<React.SetStateAction<RpcState>>
  formState: FormState
  rpcState: RpcState
  form: RefObject<HTMLFormElement>
  callBack: () => void
  type: string
  includeReference: boolean
  repeaterForms: {
    assetRepeaterItems: Form
    representativeFormItems: Form
  }
  customElements?: CustomFieldsPage
  formName?: string
  smartMeter?: SmartMeterSubmitData
}

export type HandleSubmitType = (params: submitParams) => void
