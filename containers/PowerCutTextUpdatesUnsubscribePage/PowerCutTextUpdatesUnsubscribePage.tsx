import PowerCutUnsubscribeTextUpdates from '_organism/PowerCutUnsubscribeTextUpdates/PowerCutUnsubscribeTextUpdates'
import { PowerCutUnsubscribeTextUpdates as PowerCutTextUpdatesUnsubscribeType } from '_types/CMS/pages'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'

interface PowerCutTextUpdatesUnsubscribeProps {
  data: PowerCutTextUpdatesUnsubscribeType
}

export const PowerCutTextUpdatesUnsubscribePage = ({
  data,
}: PowerCutTextUpdatesUnsubscribeProps) => {
  return (
    <>
      <CoreMetadata data={data} />
      <PowerCutPageContainer isNotMap>
        <PowerCutUnsubscribeTextUpdates {...data} />
      </PowerCutPageContainer>
    </>
  )
}
