import { UkpnHomepage as UkpnHomepageType } from '_types/CMS/pages'
import SubNavigation from '_molecules/SubNavigation/SubNavigation'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import Breadcrumbs from '_molecules/Breadcrumbs/Breadcrumbs'
import { hasSecondaryMenu } from '_utils/has-secondary-menu'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import UkpnFooter from '_molecules/UkpnFooter/UkpnFooter'
import { MainSitePages, PageTypeNames } from '_types/CMS'
import UkpnHeader from '_molecules/UkpnHeader/UkpnHeader'
import { StormMode } from '_types/CMS/nodes'
import styles from './Layout.module.scss'
import dynamic from 'next/dynamic'
import { ReactNode, useEffect, useState } from 'react'

const DynamicUkpnHeader = dynamic(
  () => import('_molecules/UkpnHeader/UkpnHeader')
) as typeof UkpnHeader

export interface LayoutProps {
  data: UkpnHomepageType | MainSitePages
  children: ReactNode
}

const Layout = ({ data, children }: LayoutProps) => {
  const globalData = useUkpnGlobalData()
  const stormModePages = [
    PageTypeNames.UKPN_HOMEPAGE,
    PageTypeNames.INCIDENT_PAGE,
    PageTypeNames.POWER_CUT,
  ]
  const isStormModePage = stormModePages.includes(data.__typename)

  const secondaryMenu =
    data && 'components' in data && hasSecondaryMenu(data.components)

  useEffect(() => {
    const init = async () => {
      await globalData?.fetchStormContainerData()
    }

    init()
  }, [])

  return (
    <div
      className={styles.layout}
      data-is-storm={
        globalData?.stormContainerData.stormMode === StormMode.STORM &&
        isStormModePage
      }
    >
      <CoreMetadata data={data} />
      <DynamicUkpnHeader
        isStormModePage={
          globalData?.stormContainerData.stormMode === StormMode.STORM &&
          isStormModePage
        }
      />
      <main className={styles.main}>
        {'ancestors' in data && !!data.ancestors && (
          <Breadcrumbs
            trail={data.ancestors.items}
            currentPage={data.breadcrumb || data.name}
          />
        )}
        {!!secondaryMenu && <SubNavigation {...secondaryMenu} />}
        {children}
      </main>
      <UkpnFooter />
    </div>
  )
}

export default Layout
