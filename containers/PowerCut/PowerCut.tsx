import RotaLoadDisconnectionsPopUp from '_atoms/RotaLoadDisconnectionsPopUp/RotaLoadDisconnectionsPopUp'
import { PowerCutPage as PowerCutPageType } from '_types/CMS/pages'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import { StormMode } from '_types/CMS/nodes'
import Layout from '_hoc/Layout/Layout'
import { useEffect } from 'react'

interface PowerCutProps {
  data: PowerCutPageType
}

export const PowerCut = ({ data }: PowerCutProps) => {
  const { components, stormComponents } = data

  const globalData = useUkpnGlobalData()
  const definedComponents =
    globalData?.stormContainerData?.stormMode === StormMode.STORM
      ? stormComponents
      : components

  useEffect(() => {
    globalData?.fetchPowerSharingData!()
    globalData?.fetchStormContainerData()
  }, [])

  return (
    <>
      <CoreMetadata data={data} />
      {globalData?.powerSharingData && (
        <RotaLoadDisconnectionsPopUp
          data={globalData?.allSiteSettings?.powerSharingData}
        />
      )}
      <Layout data={data}>
        {definedComponents.map((comp, i) =>
          renderComponent({ data: comp, id: i, location: data?.location })
        )}
      </Layout>
    </>
  )
}
