import { useDictionaryItems } from '_context/dictionary-items'
import { transformString } from '_utils/tranform-string'
import { useSearchInput } from '_context/search-input'
import Button from '_atoms/Button&Link/Button/Button'
import { filterbyText } from '_utils/filter-by-text'
import styles from './SearchResultsBar.module.scss'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import Input from '_atoms/Input/Input'
import Icon from '_atoms/Icon/Icon'

const SearchResultsBar = () => {
  const { text, updatePhrase } = useSearchInput()
  const dictionary = useDictionaryItems()

  const {
    query: { slug },
    ...router
  } = useRouter()

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBarInput}>
        <Input
          placeholder={transformString(dictionary.ukpnSearchPlaceholder)}
          id="textInputSearchResults"
          aria-label="search input"
          onChange={updatePhrase}
          value={text}
        />
        <Button
          appearance={ButtonAppearance.BLANK}
          aria-label="search button"
          type="button"
          onClick={(e) => {
            filterbyText(text, router, slug)
          }}
        >
          <Icon name={IconNames.ICON_SEARCH} size="xs" />
        </Button>
      </div>
    </div>
  )
}

export default SearchResultsBar
