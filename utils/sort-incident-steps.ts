import { Step } from "_types/local/step"

export const sortIncidentSteps = (steps?: Step[] | null ) => {
  const lastUpdated = steps?.find((step) => !!step.active)

  const sortedSteps = steps
    ?.filter((step) => !!step.date || !!step.message)
    .sort((a, b) => {
      const dateA = a.date as string
      const dateB = b.date as string
      return dateA < dateB ? -1 : dateA > dateB ? 1 : 0
    })

  return {
    lastUpdated,
    sortedSteps
  }
}