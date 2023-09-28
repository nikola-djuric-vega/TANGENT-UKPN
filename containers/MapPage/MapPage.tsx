import { useEffect } from 'react'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import { MapPage as MapPageType } from '_types/CMS/pages'
import MapPage from '_organism/MapPage/MapPage'
import dynamic from 'next/dynamic'
import RotaLoadDisconnectionsPopUp from '_atoms/RotaLoadDisconnectionsPopUp/RotaLoadDisconnectionsPopUp'
import { useUkpnGlobalData } from '_context/ukpn-global-data'

interface MapPageProps {
  data: MapPageType
}

const DynamicMapPage = dynamic(
  () => import('_organism/MapPage/MapPage')
) as typeof MapPage

export const MapPageContainer = ({ data }: MapPageProps) => {
  const globalData = useUkpnGlobalData()

  useEffect(() => {
    globalData?.fetchPowerSharingData!()
  }, [])

  return (
    <>
      <CoreMetadata data={data} />
      {globalData?.powerSharingData && (
        <RotaLoadDisconnectionsPopUp
          data={globalData?.allSiteSettings?.powerSharingData}
        />
      )}
      <PowerCutPageContainer hasSearch={true}>
        <DynamicMapPage data={data} />
      </PowerCutPageContainer>
    </>
  )
}
