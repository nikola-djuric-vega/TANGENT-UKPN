import { FormButton } from '_types/CMS'

export const shouldNotBeRendered = (field: FormButton) => {
  const shouldNotBeRenderedFields = [
    FormButton.SUBMIT,
    FormButton.NEXT,
    FormButton.PREVIOUS,
  ]

  return shouldNotBeRenderedFields.includes(field)
}
