import lowerFirst from 'lodash/lowerFirst'
import { isLetter } from './is-letter'

export const getValidData = (data: any) => {
  let validData: any
  let dataJSONString: string = JSON.stringify(data)

  let queue = [data],
    finished = false

  while (!finished && queue.length) {
    let o = queue.shift()

    finished = Object.keys(o).some(function (k) {
      if (isLetter(k.charAt(0)) && k.charAt(0) == k.charAt(0).toUpperCase()) {
        dataJSONString = dataJSONString.replace(
          new RegExp('"' + k + '":', 'g'),
          '"' + lowerFirst(k) + '":'
        )
      }

      if (o[k] !== null && typeof o[k] === 'object') queue.push(o[k])
    })
  }

  validData = JSON.parse(dataJSONString)
  return validData
}
