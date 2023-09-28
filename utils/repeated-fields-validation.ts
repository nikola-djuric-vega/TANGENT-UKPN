import FormikControls from '_lib/formik-controls'
import { Form, FormPage } from '_types/CMS'
import * as Yup from 'yup'

export const repeatedFieldsValidation = (subForm: Form, required: boolean) => {
  return required
    ? Yup.array()
        .of(FormikControls.setValidationSchema(subForm.pages[0]))
        .min(1, 'This asset must have at least 1 item')
    : Yup.array().of(FormikControls.setValidationSchema(subForm.pages[0]))
}

export const repeatedFieldsDefaultValue = (pages: FormPage[]) => {
  const initialData = FormikControls.getInitialValues(pages)
  return initialData
}
