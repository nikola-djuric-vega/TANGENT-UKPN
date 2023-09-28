import { ConfirmationFailure as ConfirmationFailureType } from '_types/CMS/pages'
import ConfirmationPage from '_organism/ConfirmationPage/ConfirmationPage'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'

interface SubmissionFailurePageProps {
  data: ConfirmationFailureType
}

export const SubmissionFailurePage = ({ data }: SubmissionFailurePageProps) => {
  return (
    <>
      <CoreMetadata data={data} />
      <PowerCutPageContainer>
        <ConfirmationPage {...data} />
      </PowerCutPageContainer>
    </>
  )
}
