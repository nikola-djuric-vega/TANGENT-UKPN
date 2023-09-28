import { useEffect } from 'react'
import { PowerCutListPage } from '_organism/PowerCutListPage/PowerCutListPage'
import { PowerCutListPage as PowerCutListPageType } from '_types/CMS/pages'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import RotaLoadDisconnectionsPopUp from '_atoms/RotaLoadDisconnectionsPopUp/RotaLoadDisconnectionsPopUp'
import { useUkpnGlobalData } from '_context/ukpn-global-data'

interface PowerCutListProps {
  data: PowerCutListPageType
}

export const PowerCutListPageContainer = ({ data }: PowerCutListProps) => {
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
      <PowerCutPageContainer>
        <PowerCutListPage data={data} />
      </PowerCutPageContainer>
    </>
  )
}
