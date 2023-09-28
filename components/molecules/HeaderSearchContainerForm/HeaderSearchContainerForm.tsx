import { useDictionaryItems } from '_context/dictionary-items'
import { HeaderState } from '_molecules/UkpnHeader/UkpnHeader'
import styles from './HeaderSearchContainerForm.module.scss'
import { transformString } from '_utils/tranform-string'
import { useSearchInput } from '_context/search-input'
import Button from '_atoms/Button&Link/Button/Button'
import { filterbyText } from '_utils/filter-by-text'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import Input from '_atoms/Input/Input'
import Icon from '_atoms/Icon/Icon'
import { FormEvent } from 'react'

export interface HeaderSearchContainerFormProps {
  setHeaderState: React.Dispatch<React.SetStateAction<HeaderState>>
  headerState: HeaderState
  isStorm: boolean
}

const HeaderSearchContainerForm = ({
  setHeaderState,
  headerState,
  isStorm,
}: HeaderSearchContainerFormProps) => {
  const { text, updatePhrase } = useSearchInput()
  const dictionary = useDictionaryItems()
  const {
    query: { slug },
    ...router
  } = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    filterbyText(text, router, slug)
  }

  return (
    <div
      data-search-is-opened={headerState.isSearchOpen}
      data-is-scrolled={headerState.isScrolled}
      data-is-storm={isStorm}
      className={styles.searchContainer}
    >
      <div className={styles.search}>
        <Button
          aria-expanded={headerState.isSearchOpen}
          appearance={ButtonAppearance.BLANK}
          className={styles.searchButton}
          aria-label="search button"
          type="button"
          onClick={() =>
            setHeaderState((prevState) => ({
              ...prevState,
              isSearchOpen: !headerState.isSearchOpen,
            }))
          }
        >
          <span className={styles.searchButtonTitle}>Search</span>
          <Icon name={IconNames.ICON_SEARCH} />
        </Button>
        <div className={styles.inputWrapper}>
          <form onSubmit={handleSubmit} className={styles.searchForm}>
            <Input
              className={styles.searchInput}
              id="textInputSearchHeader"
              aria-label="search input"
              onChange={updatePhrase}
              value={text}
              placeholder={transformString(
                dictionary.ukpnHeaderSearchPlaceholder
              )}
            />
          </form>
        </div>
      </div>
      <Button
        className={styles.closeSearchButton}
        disabled={!headerState.isSearchOpen}
        appearance={ButtonAppearance.BLANK}
        aria-label="close search"
        type="button"
        onClick={() =>
          setHeaderState((prevState) => ({
            ...prevState,
            isSearchOpen: !headerState.isSearchOpen,
          }))
        }
      >
        <Icon name={IconNames.CTA_CLOSE_ONE} />
        <span className={styles.closeBtnText}>Close</span>
      </Button>
    </div>
  )
}

export default HeaderSearchContainerForm
