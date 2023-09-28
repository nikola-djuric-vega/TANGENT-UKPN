import { PageTypeNames } from '_types/CMS'

export const generateEndpoint = (
  type: PageTypeNames,
  isReportPowerCutManual: boolean
) => {
  let endpoint
  switch (type) {
    case PageTypeNames.EMAIL_FORM_PAGE:
      endpoint = process.env.FORM_EMAIL_ENDPOINT
      break
    case PageTypeNames.CAT_A_FORM_PAGE:
      endpoint = process.env.FORM_CAT_A_ENDPOINT
      break
    case PageTypeNames.PSR_FORM_PAGE:
      endpoint = process.env.FORM_PSR_ENDPOINT
      break
    case PageTypeNames.POWER_CUT_FORM_PAGE:
      endpoint = process.env.FORM_POWERCUT_ENDPOINT
      break
    case PageTypeNames.STREET_FORM_PAGE:
      endpoint = process.env.FORM_STREET_FURNITURE_ENDPOINT
      break
    case PageTypeNames.METERED_CONNECTION_FORM_PAGE:
      endpoint = process.env.FORM_METERED_UNMETERED_ENDPOINT
      break
    case PageTypeNames.UNMETERED_CONNECTION_FORM_PAGE:
      endpoint = process.env.FORM_METERED_UNMETERED_ENDPOINT
      break
  }

  if (isReportPowerCutManual) {
    endpoint = `${endpoint}/manualpowercut`
  }

  return endpoint
}
