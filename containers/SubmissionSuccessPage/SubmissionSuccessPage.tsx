import { ConfirmationSuccess as ConfirmationSuccessType } from '_types/CMS/pages'
import ConfirmationPage from '_organism/ConfirmationPage/ConfirmationPage'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'

interface SubmissionSuccessPageProps {
  data: ConfirmationSuccessType
}

export const SubmissionSuccessPage = ({ data }: SubmissionSuccessPageProps) => {
  return (
    <>
      <CoreMetadata data={data} />
      <PowerCutPageContainer>
        <ConfirmationPage {...data} />
      </PowerCutPageContainer>
    </>
  )
}
