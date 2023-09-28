import { ButtonAppearance, LinkAppearance } from '_types/CMS'
import Button from '_atoms/Button&Link/Button/Button'
import { NavigationItem } from '_types/CMS/nodes'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './UkpnHeader.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import PromoBox from './PromoBox'
import React from 'react'

interface SubmenuProps {
  activeSubMenuItemIndex?: number
  openSubMenuItem: (itemId: number) => void
  isSubMenuOpen: boolean
  item: NavigationItem
  label: string
}

const SubMenu = ({
  activeSubMenuItemIndex,
  openSubMenuItem,
  isSubMenuOpen,
  label,
  item,
}: SubmenuProps) => {
  const hasSubMenu = item?.navigationMenu && item.navigationMenu.length > 1
  const isOnePromoBox = item?.promoBoxes && item.promoBoxes.length < 2
  const id = label.replace(/ /g, '')

  return (
    <>
      {!hasSubMenu && (
        <div
          className={styles.linksContainer}
          data-is-sub-menu-open={isSubMenuOpen}
          aria-selected={isSubMenuOpen}
          aria-hidden={!isSubMenuOpen}
          aria-labelledby={label}
          id={id}
          data-testid="submenu"
        >
          <>
            <div
              className={styles.linksWrapper}
              data-message-exists={!!item.promoBoxes?.length}
            >
              {item?.navigationMenu?.[0]?.navigationLinks?.map(
                (link, index) => (
                  <Link
                    tabIndex={!isSubMenuOpen ? -1 : 0}
                    appearance={LinkAppearance.BLANK}
                    className={styles.linkItem}
                    target={link.target}
                    url={link.url}
                    key={index}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
            {!!item?.promoBoxes?.length && (
              <>
                {item.promoBoxes.map((promoBox, promoBoxIndex) => (
                  <PromoBox
                    isOnePromoBox={isOnePromoBox}
                    isSubMenuOpen={isSubMenuOpen}
                    promoBox={promoBox}
                    key={promoBoxIndex}
                  />
                ))}
              </>
            )}
          </>
        </div>
      )}
      {!!hasSubMenu && (
        <div
          className={styles.subMenuLinksContainer}
          data-is-sub-menu-open={isSubMenuOpen}
          aria-selected={isSubMenuOpen}
          aria-hidden={!isSubMenuOpen}
          aria-labelledby={label}
          id={id}
        >
          <>
            {item?.navigationMenu?.map((subMenuItem, index) => (
              <React.Fragment key={index}>
                <div
                  className={styles.subMenuButtonWrapper}
                  data-dropdown-opened={index === activeSubMenuItemIndex}
                >
                  {!!subMenuItem?.title && (
                    <Button
                      data-dropdown-opened={index === activeSubMenuItemIndex}
                      onClick={() => openSubMenuItem(index)}
                      className={styles.subMenuItemButton}
                      appearance={ButtonAppearance.BLANK}
                      tabIndex={!isSubMenuOpen ? -1 : 0}
                      type="button"
                    >
                      {subMenuItem.title}
                      <Icon name={IconNames.CTA_ARROW_DOWN} />
                    </Button>
                  )}
                </div>
                <div
                  data-show-sub-menu-links={activeSubMenuItemIndex === index}
                  data-has-two-promos={!isOnePromoBox}
                  className={styles.subMenuLinks}
                  data-first-item={index === 0}
                >
                  {!!subMenuItem?.title && (
                    <p
                      aria-label={`section title ${subMenuItem.title}`}
                      className={styles.subMenuItemTitle}
                      tabIndex={!isSubMenuOpen ? -1 : 0}
                    >
                      {subMenuItem.title}
                    </p>
                  )}
                  {subMenuItem?.navigationLinks?.map((link, index) => (
                    <Link
                      tabIndex={!isSubMenuOpen ? -1 : 0}
                      appearance={LinkAppearance.BLANK}
                      className={styles.linkItem}
                      target={link.target}
                      url={link.url}
                      key={index}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </>
          {!!item?.promoBoxes?.length && (
            <>
              {item.promoBoxes.map((promoBox, promoBoxIndex) => (
                <PromoBox
                  isOnePromoBox={isOnePromoBox}
                  isSubMenuOpen={isSubMenuOpen}
                  promoBox={promoBox}
                  key={promoBoxIndex}
                />
              ))}
            </>
          )}
        </div>
      )}
    </>
  )
}

export default SubMenu
