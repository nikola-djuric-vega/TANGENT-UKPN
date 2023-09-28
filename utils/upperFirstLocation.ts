import upperFirst from 'lodash/upperFirst'

export const upperFirstLocation = (location: string) => {
  let resultLocation: string = ''
  let locationArray = location.split('-')
  let cnt = locationArray.length

  locationArray.map((loc) => {
    resultLocation += upperFirst(loc)
    resultLocation += --cnt !== 0 ? ' ' : ''
  })

  return resultLocation
}
