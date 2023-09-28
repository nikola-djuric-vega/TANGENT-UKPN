import { upperFirstLocation } from './upperFirstLocation'
import { transformString } from './tranform-string'
import { DictionaryItems } from '_types/local'

export const getPowerCutAdditionalContent = (
  location: string,
  dictionaryItems: DictionaryItems
) => {
  return {
    seoTitle: transformString(
      dictionaryItems.powerCutTitle.replace(
        '[place]',
        upperFirstLocation(location as string)
      )
    ),
    seoDescription: transformString(
      dictionaryItems.powerCutDescription.replace(
        '[place]',
        upperFirstLocation(location as string)
      )
    ),
  }
}
