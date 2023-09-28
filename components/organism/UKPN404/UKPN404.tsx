import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import { ErrorPage as ErrorPageType } from '_types/CMS/pages'
import { transformString } from '_utils/tranform-string'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import { LinkAppearance } from '_types/CMS'
import styles from './UKPN404.module.scss'
import React from 'react'

export interface UKPN404Props {
  data: ErrorPageType
}

const UKPN404 = ({ data }: UKPN404Props) => {
  return (
    <PowerCutPageContainer>
      <div className={styles.errorPage}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.error}>
              <RichText
                text={data.pageText}
                tabIndex={0}
                className={styles.message}
              />
              <Link
                url={data.errorPageButtonLink.url}
                target={data.errorPageButtonLink.target}
                appearance={LinkAppearance.PRIMARY}
                className={styles.cta}
              >
                {transformString(data.errorPageButtonLink.name)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PowerCutPageContainer>
  )
}

export default UKPN404
