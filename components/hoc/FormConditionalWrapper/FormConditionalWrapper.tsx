import { handleConditionals } from '_utils/handle-conditionals'
import { FormCondition } from '_types/CMS'
import { FormikValues } from 'formik'

interface FormConditionalWrapper {
  children: JSX.Element
  condition?: FormCondition
  values: FormikValues
}

const FormConditionalWrapper = ({
  children,
  condition,
  values,
}: FormConditionalWrapper) => {
  // IF condition exist then run the below code
  return handleConditionals(values, children, condition)
}

export default FormConditionalWrapper
