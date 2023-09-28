import UkpnPaginationControls from '_molecules/UkpnPaginationControls/UkpnPaginationControls'
import UkpnSearchResultItem from '_atoms/UkpnSearchResult/UkpnSearchResult'
import { useUkpnSearchResults } from '_context/search-result-items'
import { useDictionaryItems } from '_context/dictionary-items'
import { transformString } from '_utils/tranform-string'
import { showingMessage } from '_utils/showing-message'
import styles from './UkpnSearchResults.module.scss'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const UkpnSearchResults = () => {
  const results = useRef<HTMLDivElement>(null)
  const {
    query: { page, phrase },
    ...router
  } = useRouter()

  const {
    ukpnSearchResultsState: { documents, total, pages },
    setUkpnSearchResults,
  } = useUkpnSearchResults()

  const currentPage = parseInt(page as string) || 1
  const dictionary = useDictionaryItems()

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { docs, documentsCount, pageCount },
      } = await axios.get('/api/fetch-search-result', {
        params: {
          page: page,
          text: phrase,
        },
      })

      setUkpnSearchResults({
        documents: docs,
        total: documentsCount,
        pages: pageCount,
      })
    }
    if (page) {
      fetchData()
    } else {
      setUkpnSearchResults({ documents: [], total: 0 })
    }
  }, [page, phrase])

  return (
    <div className={styles.searchResults} id="results">
      <div className={styles.inner}>
        {documents?.length > 0 && (
          <>
            <p>{`Showing ${showingMessage({ currentPage, total })}`}</p>
            {documents?.map((item) => (
              <UkpnSearchResultItem key={item.nodeId} item={item} />
            ))}
            <p>{`Showing ${showingMessage({ currentPage, total })}`}</p>
            {!!page && <UkpnPaginationControls pages={pages as number} />}
          </>
        )}
        {documents?.length <= 0 && page && (
          <p>{transformString(dictionary.noResultsFound)}</p>
        )}
      </div>
    </div>
  )
}
export default UkpnSearchResults
