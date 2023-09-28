import { UkpnSearchResult } from '_types/CMS/nodes/ukpnsearchresults'
import styles from './UkpnSearchResult.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import { LinkAppearance } from '_types/CMS'
import React from 'react'

export interface UkpnSearchResultProps {
  item: UkpnSearchResult
}

const UkpnSearchResultItem = ({ item }: UkpnSearchResultProps) => {
  const {
    pageTitle: documentTitle,
    description,
    path: documentUrl,
    name,
  } = item

  return (
    <article className={styles.searchResult}>
      <Link url={documentUrl} appearance={LinkAppearance.SEARCH}>
        {documentTitle || name}
      </Link>
      <p>{description}</p>
    </article>
  )
}

export default UkpnSearchResultItem
