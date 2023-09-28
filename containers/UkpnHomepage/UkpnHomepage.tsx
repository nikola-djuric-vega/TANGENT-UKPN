import { useEffect } from 'react'
import { UkpnHomepage as UkpnHomepageType } from '_types/CMS/pages'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import { ComponentsTypeName } from '_types/CMS'
import { StormMode } from '_types/CMS/nodes'
import Layout from '_hoc/Layout/Layout'
import RotaLoadDisconnectionsPopUp from '_atoms/RotaLoadDisconnectionsPopUp/RotaLoadDisconnectionsPopUp'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
interface UkpnHomepageProps {
  data: UkpnHomepageType
}

export const UkpnHomepage = ({ data }: UkpnHomepageProps) => {
  const globalData = useUkpnGlobalData()
  const { components, stormModeComponents } = data
  const definedComponents =
    globalData?.stormContainerData?.stormMode === StormMode.STORM
      ? stormModeComponents
      : components

  useEffect(() => {
    globalData?.fetchPowerSharingData!()
    globalData?.fetchStormContainerData()
  }, [])

  return (
    <>
      {globalData?.powerSharingData && (
        <RotaLoadDisconnectionsPopUp
          data={globalData?.allSiteSettings?.powerSharingData}
        />
      )}
      <Layout data={data}>
        {definedComponents
          ?.filter(
            (comp) => comp.__typename === ComponentsTypeName.NOTIFICATION
          )
          .map((comp, i) => renderComponent({ data: comp, id: i }))}

        {definedComponents
          ?.filter(
            (comp) =>
              comp.__typename !== ComponentsTypeName.SUB_NAVIGATION &&
              comp.__typename !== ComponentsTypeName.NOTIFICATION
          )
          .map((comp, i) => renderComponent({ data: comp, id: i }))}
      </Layout>
    </>
  )
}
