import HeaderSearchContainerForm from '_molecules/HeaderSearchContainerForm/HeaderSearchContainerForm'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ButtonAppearance, LinkAppearance } from '_types/CMS'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import React, { useState, useEffect, useRef } from 'react'
import { Breakpoints } from '_types/local/breakpoints'
import useOnClickOutside from '_hooks/onClickOutside'
import Button from '_atoms/Button&Link/Button/Button'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './UkpnHeader.module.scss'
import { StormMode } from '_types/CMS/nodes'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import throttle from 'lodash/throttle'
import Icon from '_atoms/Icon/Icon'
import SubMenu from './SubMenu'
import Image from 'next/image'

export interface HeaderState {
  activeSubMenuItemIndex?: number
  activeMenuItemIndex?: number
  isSubMenuOpen: boolean
  isSearchOpen: boolean
  isStormMode: boolean
  isScrolled: boolean
  isMenuOpen: boolean
}
export interface UkpnHeaderProps {
  isStormModePage: boolean
}

const UkpnHeader = ({ isStormModePage }: UkpnHeaderProps) => {
  const [headerState, setHeaderState] = useState<HeaderState>({
    isStormMode: isStormModePage,
    activeSubMenuItemIndex: undefined,
    activeMenuItemIndex: undefined,
    isSubMenuOpen: false,
    isSearchOpen: false,
    isScrolled: false,
    isMenuOpen: false,
  })

  const linksContainerRef = useRef(null)
  const globalData = useUkpnGlobalData()
  const router = useRouter()

  useEffect(() => {
    closeMenu()
  }, [router.asPath])

  useEffect(() => {
    window.addEventListener('scroll', setNavSize, { passive: true })

    return () => {
      window.removeEventListener('scroll', setNavSize)
    }
  }, [])

  useOnClickOutside(linksContainerRef, () => {
    window.innerWidth > Breakpoints.HEADER &&
      window.document.body.classList.remove('menu-open')
    setHeaderState((prevState) => ({
      ...prevState,
      isSubMenuOpen: false,
    }))
  })

  const setNavSize = throttle(() => {
    if (window.scrollY < 25) {
      setHeaderState((prevState) => ({
        ...prevState,
        isScrolled: false,
      }))
    } else {
      setHeaderState((prevState) => ({
        ...prevState,
        isScrolled: true,
      }))
    }
  }, 250)

  const openMenuItem = (itemId: number) => {
    if (headerState.activeMenuItemIndex === itemId) {
      setHeaderState((prevState) => ({
        ...prevState,
        activeMenuItemIndex: itemId,
        isSubMenuOpen: !headerState.isSubMenuOpen,
        activeSubMenuItemIndex: undefined,
      }))
    } else {
      setHeaderState((prevState) => ({
        ...prevState,
        activeMenuItemIndex: itemId,
        isSubMenuOpen: true,
        activeSubMenuItemIndex: undefined,
      }))
    }
  }

  const openSubMenuItem = (itemId: number) => {
    window.document.body.classList.add('menu-open')
    if (headerState.activeSubMenuItemIndex === itemId) {
      setHeaderState((prevState) => ({
        ...prevState,
        activeSubMenuItemIndex: undefined,
      }))
    } else {
      setHeaderState((prevState) => ({
        ...prevState,
        activeSubMenuItemIndex: itemId,
      }))
    }
  }

  const openMenu = () => {
    setHeaderState((prevState) => ({
      ...prevState,
      isMenuOpen: !headerState.isMenuOpen,
    }))
    document.body.classList.add('menu-open')
  }

  const closeMenu = () => {
    setHeaderState((prevState) => ({
      ...prevState,
      activeSubMenuItemIndex: undefined,
      activeMenuItemIndex: undefined,
      isSubMenuOpen: false,
      isMenuOpen: false,
    }))
    document.body.classList.remove('menu-open')
  }

  const closeSubMenu = () => {
    setHeaderState((prevState) => ({
      ...prevState,
      isSubMenuOpen: false,
    }))
  }

  const menuItems = !isStormModePage
    ? globalData?.allSiteSettings?.MainNavigation?.children.items
    : globalData?.allSiteSettings?.MainNavigation?.children.items?.filter(
        (item) => item.showInStormMode === true
      )

  return (
    <nav
      className={styles.header}
      role="group"
      aria-label="Website header"
      data-is-storm={isStormModePage}
      data-is-scrolled={headerState.isScrolled}
    >
      <ComponentLayout
        innerClass={styles.topNavWrapper}
        removeBottomMargin
        data-is-storm={isStormModePage}
      >
        <ul
          className={styles.topNav}
          data-is-scrolled={headerState.isScrolled}
          aria-label="top navigation"
        >
          {globalData?.allSiteSettings?.GlobalHeader?.secondaryNavigationLinks?.map?.(
            (item, index) => (
              <li className={styles.topNavLinkWrapper} key={index}>
                <Link
                  appearance={LinkAppearance.BLANK}
                  url={item.url}
                  className={styles.topNavLink}
                  target={item.target}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </ComponentLayout>
      <ComponentLayout innerClass={styles.mainNavWrapper} removeBottomMargin>
        <div
          className={styles.mainNav}
          data-is-scrolled={headerState.isScrolled}
        >
          <div
            className={styles.logoContainer}
            data-is-scrolled={headerState.isScrolled}
            data-is-storm={isStormModePage}
            data-is-search-open={headerState.isSearchOpen}
          >
            <Link
              className={styles.mobileLogoLink}
              appearance={LinkAppearance.BLANK}
              url="/"
              aria-label="logo"
            >
              {globalData?.allSiteSettings?.mobileLogo?.url && (
                <Image
                  src={globalData.allSiteSettings.mobileLogo.url}
                  title="UK Power Network"
                  width={98}
                  height={32}
                  alt="logo"
                />
              )}
            </Link>
            <Link
              className={styles.mobileStormLogoLink}
              appearance={LinkAppearance.BLANK}
              url="/"
              aria-label="logo"
            >
              {globalData?.allSiteSettings?.stormModeLogo?.url && (
                <Image
                  src={globalData.allSiteSettings.stormModeLogo.url}
                  title="UK Power Network"
                  width={98}
                  height={32}
                  alt="logo"
                />
              )}
            </Link>
            <Link
              className={styles.desktopLogoLink}
              appearance={LinkAppearance.BLANK}
              url="/"
              aria-label="logo"
            >
              {globalData?.allSiteSettings?.mobileLogo?.url && (
                <Image
                  src={globalData.allSiteSettings.mobileLogo.url}
                  data-is-scrolled={headerState.isScrolled}
                  title="UK Power Network"
                  layout="responsive"
                  width={146}
                  height={48}
                  alt="logo"
                />
              )}
            </Link>
            <Link
              className={styles.desktopStormLogoLink}
              appearance={LinkAppearance.BLANK}
              url="/"
              aria-label="logo"
            >
              {globalData?.allSiteSettings?.stormModeLogo?.url && (
                <Image
                  src={globalData.allSiteSettings.stormModeLogo.url}
                  data-is-scrolled={headerState.isScrolled}
                  title="UK Power Network"
                  layout="responsive"
                  width={146}
                  height={48}
                  alt="logo"
                />
              )}
            </Link>
          </div>
          <div
            className={styles.menuContainer}
            data-is-menu-open={headerState.isMenuOpen}
            data-is-search-open={headerState.isSearchOpen}
            data-is-scrolled={headerState.isScrolled}
            data-is-storm={isStormModePage}
          >
            <div className={styles.menuControlButtonsWrapper}>
              <Button
                className={styles.closeSubMenuButton}
                appearance={ButtonAppearance.BLANK}
                type="button"
                onClick={() => closeSubMenu()}
                data-is-sub-menu-open={headerState.isSubMenuOpen}
              >
                Back
                <Icon name={IconNames.DOWN_CHEVRON} />
              </Button>
              <Button
                className={styles.closeMenuButton}
                appearance={ButtonAppearance.BLANK}
                type="button"
                onClick={() => closeMenu()}
              >
                <span>Close</span>
                <Icon name={IconNames.ICO_CLOSE} />
              </Button>
            </div>
            <div
              className={styles.mainMenuWrapper}
              ref={linksContainerRef}
              data-is-storm={isStormModePage}
              data-is-scrolled={headerState.isScrolled}
            >
              <div className={styles.mainMenu}>
                {menuItems?.map?.((item, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={styles.mainMenuButtonWrapper}
                      data-active-menu-item={
                        index === headerState.activeMenuItemIndex
                      }
                      aria-label="Menu tab"
                    >
                      <Button
                        className={styles.mainMenuButton}
                        appearance={ButtonAppearance.DEFAULT}
                        type="button"
                        onClick={() => openMenuItem(index)}
                        data-is-sub-menu-open={
                          index === headerState.activeMenuItemIndex &&
                          headerState.isSubMenuOpen
                        }
                        role="button"
                        aria-controls={`menu-${item?.name?.replace(/ /g, '')}`}
                        data-is-storm={isStormModePage}
                        data-is-scrolled={headerState.isScrolled}
                      >
                        {item.name}
                        <div className={styles.arrowLongIconContainer}>
                          <Icon name={IconNames.LEFT_CHEVRON} flip />
                        </div>
                        <div
                          className={styles.downArrowIconContainer}
                          data-is-sub-menu-open={
                            index === headerState.activeMenuItemIndex &&
                            headerState.isSubMenuOpen
                          }
                        >
                          <Icon name={IconNames.DOWN_CHEVRON} />
                        </div>
                      </Button>
                    </div>
                    {globalData?.allSiteSettings?.MainNavigation?.children
                      ?.items?.length && (
                      <SubMenu
                        item={item}
                        activeSubMenuItemIndex={
                          headerState.activeSubMenuItemIndex
                        }
                        openSubMenuItem={openSubMenuItem}
                        isSubMenuOpen={
                          headerState.isSubMenuOpen &&
                          headerState.activeMenuItemIndex === index
                        }
                        label={`menu-${item.name}`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className={styles.mobileNavLinksContainer}>
              {globalData?.allSiteSettings?.GlobalHeader?.secondaryNavigationLinks?.map?.(
                (item, index) => (
                  <div className={styles.mobileNavLinkWrapper} key={index}>
                    <Link
                      className={styles.mobileNavLink}
                      appearance={LinkAppearance.BLANK}
                      url={item.url}
                      target={item.target}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
          <HeaderSearchContainerForm
            isStorm={isStormModePage}
            headerState={headerState}
            setHeaderState={setHeaderState}
          />
          <div
            className={styles.mobileMenuButtonWrapper}
            data-is-storm={isStormModePage}
            data-is-search-open={headerState.isSearchOpen}
          >
            <Button
              appearance={ButtonAppearance.BLANK}
              type="button"
              onClick={() => openMenu()}
            >
              Menu
              <Icon name={IconNames.CTA_BURGER} />
            </Button>
          </div>
        </div>
      </ComponentLayout>
    </nav>
  )
}

export default UkpnHeader
