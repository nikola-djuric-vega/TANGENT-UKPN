import { SubNavigationType } from '_types/CMS/nodes/components/UKPN'
import { ButtonAppearance, LinkAppearance } from '_types/CMS'
import Button from '_atoms/Button&Link/Button/Button'
import { transformUrl } from '_utils/transform-url'
import React, { useEffect, useState } from 'react'
import styles from './SubNavigation.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'

const SubNavigation = ({ subNavigationLinks }: SubNavigationType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const activePath =
    subNavigationLinks?.find(
      (link) => transformUrl(link.url) === router.asPath
    ) || subNavigationLinks?.[0]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [router])

  return (
    <nav className={styles.subNavigation}>
      {!!subNavigationLinks?.length && (
        <>
          {!!activePath && (
            <Button
              className={styles.navButton}
              appearance={ButtonAppearance.BLANK}
              type="button"
              onClick={toggleMenu}
            >
              {activePath.name}
              <span
                className={styles.iconWrapper}
                data-is-menu-open={isMenuOpen}
              >
                <Icon name={IconNames.CTA_DOWN_ARROW} />
              </span>
            </Button>
          )}
          {!!subNavigationLinks?.length && (
            <ul className={styles.navLinks} data-is-menu-open={isMenuOpen}>
              {subNavigationLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={styles.navItem}
                    data-active-menu-item={activePath?.url === link.url}
                  >
                    <Link
                      className={styles.navLink}
                      appearance={LinkAppearance.BLANK}
                      type="button"
                      url={link.url}
                      target={link.target}
                    >
                      {link.name}
                    </Link>
                    <span className={styles.divider}>|</span>
                  </li>
                )
              })}
            </ul>
          )}
        </>
      )}
    </nav>
  )
}

export default SubNavigation
