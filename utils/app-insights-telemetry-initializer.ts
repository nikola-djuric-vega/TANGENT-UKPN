import { ITelemetryItem } from '@microsoft/applicationinsights-web'

export const telemetryInitializer = ({ baseData }: ITelemetryItem) => {
  const urlsToExclude = ['browsealoud.com', 'google-analytics.com']

  if (baseData?.target) {
    const shouldBeExcluded = urlsToExclude.some((item) =>
      baseData?.target.includes(item)
    )

    const badResponse =
      baseData.responseCode === 404 || baseData.responseCode === 500

    if (shouldBeExcluded && badResponse) {
      return false
    }
  }

  return true
}
