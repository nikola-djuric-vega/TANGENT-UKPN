import UkpnSearchResults from '_molecules/UkpnSearchResults/UkpnSearchResults'
import SearchResultsBar from '_molecules/SearchResultsBar/SearchResultsBar'
import { SearchResults as SearchResultsPageType } from '_types/CMS/pages'
import { useDictionaryItems } from '_context/dictionary-items'
import { transformString } from '_utils/tranform-string'
import styles from './SearchResults.module.scss'
import Heading from '_atoms/Heading/Heading'
import Layout from '_hoc/Layout/Layout'

export interface SearchResultsPageProps {
  data: SearchResultsPageType
}

export const SearchResults = ({ data }: SearchResultsPageProps) => {
  const dictionary = useDictionaryItems()
  return (
    <div>
      <Layout data={data}>
        <div className={styles.searchPage}>
          <div className={styles.content}>
            <Heading level={2} className={styles.searchResultsHeading}>
              {transformString(dictionary.searchResults)}
            </Heading>
            <div className={styles.searchBar}>
              <SearchResultsBar />
            </div>

            <div className={styles.searchResults}>
              <UkpnSearchResults />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
