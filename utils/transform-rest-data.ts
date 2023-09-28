import upperFirst from 'lodash/upperFirst'
import { CmsContentPage, CmsPage } from '_types/CMS/base'

export const transformRestData = (restData: any): CmsContentPage<CmsPage> => {
  function changeValue(obj: any) {
    if (typeof obj === 'object') {
      for (var keys in obj) {
        if (typeof obj[keys] === 'object') {
          changeValue(obj[keys])
        } else if (keys === '__typename') {
          obj[keys] = upperFirst(obj[keys])
        }
      }
    }

    return { ...obj }
  }

  let transformedData: any
  let dataJSONString: string = JSON.stringify(restData)

  let queue = [restData],
    finished = false

  while (!finished && queue.length) {
    let o = queue.shift()

    finished = Object.keys(o).some(function (k) {
      if (k === 'contentTypeAlias' || k === 'mediaTypeAlias') {
        dataJSONString = dataJSONString.replace(
          new RegExp(`"${k}":`, 'g'),
          `"__typename":`
        )
      }

      if (k === 'focalPointUrlTemplate') {
        dataJSONString = dataJSONString.replace(
          new RegExp(`"${k}":`, 'g'),
          `"url":`
        )
      }

      if (k === '_url') {
        dataJSONString = dataJSONString.replace(
          new RegExp('"' + k + '":', 'g'),
          `"url":`
        )
      }

      if (o[k] !== null && typeof o[k] === 'object') queue.push(o[k])
    })
  }

  transformedData = JSON.parse(dataJSONString)
  const data = changeValue(transformedData)

  return { content: data }
}
