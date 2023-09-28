import { useEffect, useState } from 'react'
import { LinkAppearance, PageTypeNames } from '_types/CMS'
import { transformUrl } from '_utils/transform-url'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './Breadcrumbs.module.scss'
import { BreadcrumbsItem } from '_types/CMS'
import debounce from 'lodash/debounce'
export interface BreadcrumbsProps {
  trail: BreadcrumbsItem[]
  currentPage: string
}

const Breadcrumbs = ({ trail, currentPage }: BreadcrumbsProps) => {
  const [isMobile, setMobile] = useState<boolean>(false)
  let editedTrail = [...trail]
  editedTrail.shift()

  useEffect(() => {
    const windowSize = () => {
      setMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', debounce(windowSize, 500))
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <section className={styles.Breadcrumbs}>
      <div className={styles.inner}>
        <nav className={styles.BreadcrumbsTrail}>
          <Link appearance={LinkAppearance.BREADCRUMB} url={'/'}>
            Home
          </Link>
          {!isMobile
            ? editedTrail.map((link) =>
                link.__typename === PageTypeNames.FOLDER ? (
                  <p className={styles.BreadcrumbsItem} key={link.name}>
                    {link.name}
                  </p>
                ) : (
                  <Link
                    appearance={LinkAppearance.BREADCRUMB}
                    url={transformUrl(link.url as string)}
                    key={link.id}
                  >
                    {link.breadcrumb || link.name}
                  </Link>
                )
              )
            : null}
          <p className={styles.BreadcrumbsItem} data-current="true">
            {currentPage}
          </p>
        </nav>
      </div>
    </section>
  )
}

export default Breadcrumbs
