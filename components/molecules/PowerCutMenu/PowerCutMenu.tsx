import { ButtonAppearance, LinkAppearance } from '_types/CMS'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import Button from '_atoms/Button&Link/Button/Button'
import { transformUrl } from '_utils/transform-url'
import { usePowerCut } from '_context/power-cut'
import React, { useEffect, useRef } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './PowerCutMenu.module.scss'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'

const PowerCutMenu = () => {
  const { powerCutState, setPowerCutState } = usePowerCut()
  const router = useRouter()

  const closeMenu = () => {
    setPowerCutState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
      wasMenuOpen: true,
    }))
  }

  const closeMenuRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLElement>) => {
    if (
      e.propertyName === 'transform' &&
      closeMenuRef.current &&
      powerCutState.isMenuOpen
    ) {
      closeMenuRef.current.focus()
    }
  }

  const globalData = useUkpnGlobalData()

  useEffect(() => {
    setPowerCutState((prevState) => ({
      ...prevState,
      isMenuOpen: false,
      wasMenuOpen: prevState.wasMenuOpen || prevState.isMenuOpen,
    }))
  }, [router])

  return (
    <nav
      className={styles.powerCutMenuWrapper}
      data-is-menu-open={powerCutState.isMenuOpen}
      aria-hidden={!powerCutState.isMenuOpen}
      aria-labelledby="menu-open"
      aria-label="main menu"
      ref={menuRef}
      id="menu"
      tabIndex={0}
      role="navigation"
      onTransitionEnd={handleTransitionEnd}
    >
      <Button
        className={styles.closeButton}
        appearance={ButtonAppearance.BLANK}
        onClick={closeMenu}
        type="button"
        id="menu-close"
        aria-label="close menu"
        ref={closeMenuRef}
      >
        <Icon name={IconNames.ICON_CLOSE_TWO} />
        Close
      </Button>
      {globalData?.allSiteSettings?.RightHandMenuNavigation?.menuLinks
        ?.length && (
        <>
          <h2
            className={styles.screenReaderOnly}
            id="mainmenulabel"
            tabIndex={0}
          >
            Main menu
          </h2>
          <div className={styles.navigation}>
            {globalData?.allSiteSettings?.RightHandMenuNavigation?.menuLinks?.map(
              (menuItem, menuItemIndex) => (
                <div key={menuItemIndex} className={styles.menuItem}>
                  <Link
                    appearance={LinkAppearance.BLANK}
                    url={menuItem.url}
                    className={styles.link}
                    data-active-item={router.asPath === menuItem.url}
                    target={menuItem.target}
                  >
                    <span
                      className={styles.menuItemIconWrapper}
                      data-active-item={
                        router.asPath === transformUrl(menuItem.url)
                      }
                    >
                      <Icon name={IconNames.CTA_ARROW_LONG} />
                    </span>
                    {menuItem.name}
                  </Link>
                </div>
              )
            )}
          </div>
        </>
      )}
    </nav>
  )
}

export default PowerCutMenu
