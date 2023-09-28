import PowerCutRegisterTextUpdates from '_organism/PowerCutRegisterTextUpdates/PowerCutRegisterTextUpdates'
import { PowerCutRegisterTextUpdates as PowerCutRegisterTextUpdatesType } from '_types/CMS/pages'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'

interface PowerCutTextUpdatesSubscribePageProps {
  data: PowerCutRegisterTextUpdatesType
}

export const PowerCutTextUpdatesSubscribePage = ({
  data,
}: PowerCutTextUpdatesSubscribePageProps) => {
  return (
    <>
      <CoreMetadata data={data} />
      <PowerCutPageContainer isNotMap>
        <PowerCutRegisterTextUpdates {...data} />
      </PowerCutPageContainer>
    </>
  )
}
