import { createApolloClient } from '_lib/create-apollo-client'
import { FormByID } from '_types/CMS/compositions'
import { umbracoForms } from '_lib/umbraco-forms'
import upperFirst from 'lodash/upperFirst'
import lowerFIrst from 'lodash/lowerFirst'
import { gql } from '@apollo/client'
import {
  FRAGMENT_POWER_CUT_CHECKS,
  FRAGMENT_BUTTONS_WITH_IMAGES,
  FRAGMENT_BUTTONS_WITH_MAIN_IMAGE,
} from './fragments'
import {
  CompositionTypeNames,
  FormCustomFields,
  UmbracoForm,
  FormField,
  FormPages,
  CmsPage,
  Form,
  ContentConnection,
} from '_types/CMS'
import { getValidData } from './get-valid-data'

export const fetchFormData = async (page: CmsPage) => {
  const hasForm = (page as FormPages).formDetails?.find?.(
    (component): component is FormByID =>
      component.__typename === CompositionTypeNames.FORM_BY_ID
  )
  let customFieldsData
  let form
  let validData

  if (hasForm) {
    // fetch form via REST API using formComponent.formID
    // https://api.umbraco.io/forms/ff8fdc04-3dca-4fbb-98c0-2ca039a5a2ab
    form = await umbracoForms(hasForm.formID)
    validData = getValidData(form)
    customFieldsData = await hasCustomField(validData)
  } else if (!!(page as FormPages).formDetails) {
    const { umbracoForm } = (page as FormPages).formDetails[0] as UmbracoForm
    validData = getValidData(umbracoForm)
    customFieldsData = await hasCustomField(validData)
  }

  return {
    form: validData,
    customFieldsData: customFieldsData,
  }
}

export const getCustomField = (field: FormField) => {
  switch (field.alias) {
    case FormCustomFields.POWER_CUT_CHECKS:
      return FRAGMENT_POWER_CUT_CHECKS
    case FormCustomFields.RADIO_BUTTONS_WITH_IMAGES:
      return FRAGMENT_BUTTONS_WITH_IMAGES
    case FormCustomFields.RADIO_BUTTONS_WITH_MAIN_IMAGE:
      return FRAGMENT_BUTTONS_WITH_MAIN_IMAGE
    default:
      return null
  }
}

export const hasCustomField = async (form: Form) => {
  let customFieldsItems
  const customFieldsToFind = [
    FormCustomFields.RADIO_BUTTONS_WITH_MAIN_IMAGE,
    FormCustomFields.RADIO_BUTTONS_WITH_IMAGES,
    FormCustomFields.POWER_CUT_CHECKS,
  ]

  const customFields = form.pages
    .map((page) => {
      return page.fieldsets
        .map((set) => {
          return set.columns[0].fields.filter((field: FormField) => {
            return !!customFieldsToFind.includes(
              field.alias as FormCustomFields
            )
          })
        })
        .flat()
    })
    .flat()

  if (customFields?.length) {
    const allFragments = customFields.map((field) => getCustomField(field))
    const allAlias = customFields
      .map((field) => `...${upperFirst(field.alias)}`)
      .join(' ')
    const allIds = customFields
      .map(
        (field) =>
          `"${field.settings.defaultValue || field.settings.DefaultValue}"`
      )
      .join(',')
    const query = gql`
      ${allFragments.join()}
      query {
        allContent(where: { id_any: [${allIds}] }, culture: "en", preview: false) {
          items {
            name
            url

            ${allAlias}
          }
        }
      }
    `

    const apolloClient = createApolloClient()
    customFieldsItems = await apolloClient.query<ContentConnection>({
      query: query,
    })
  }

  return customFieldsItems?.data.allContent.items.reduce(
    (obj, item) => ({ ...obj, [lowerFIrst(item.__typename)]: item }),
    {}
  )
}
