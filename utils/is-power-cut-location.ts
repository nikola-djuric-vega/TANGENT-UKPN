import data from '_lib/loc.json'

export const isPowerCutLocation = (location: string) => {
  if (location) {
    location = location.replace(/-/g, ' ')

    if (
      data.locs.filter(
        (loc) => loc.loc.toUpperCase() === location.toUpperCase()
      ).length > 0
    ) {
      return true
    }
  }
  return false
}
