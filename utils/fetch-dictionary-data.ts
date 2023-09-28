import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { AllDictionaryItems } from '_types/CMS/nodes'
import { getValidData } from './get-valid-data'
import { DictionaryItems } from '_types/local'
import camelCase from 'lodash/camelCase'

interface FetchDictionaryDataArgs {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale: string
}

export const fetchDictionaryData = async ({
  apolloClient,
  preview = false,
  locale,
}: FetchDictionaryDataArgs) => {
  const query = gql`
    query {
      allDictionaryItem(culture: "${locale}", preview: ${preview}) {
        items {
          id
          name
          phrase
        }
      }
    }
  `

  const { data } = await apolloClient.query<AllDictionaryItems>({
    query: query,
  })

  const validData: AllDictionaryItems = getValidData(data)

  if (validData?.allDictionaryItem?.items) {
    let dictionaryItems: DictionaryItems =
      validData.allDictionaryItem.items.reduce<DictionaryItems>(
        (data, dictionaryItem) => {
          const property = camelCase(dictionaryItem.name)

          return { ...data, [property]: dictionaryItem.phrase }
        },
        {}
      )

    return dictionaryItems
  }

  return {}
}
