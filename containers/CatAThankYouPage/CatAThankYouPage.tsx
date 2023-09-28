import { CatAThankYouPage as CatAThankYouPageType } from '_types/CMS/pages/form-pages'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import FormHeader from '_molecules/FormHeader/FormHeader'
import ThankYou from '_atoms/ThankYou/ThankYou'
import { parseCookies } from 'nookies'

interface CatAThankYouPageProps {
  data: CatAThankYouPageType
}

export const CatAThankYouPage = ({ data }: CatAThankYouPageProps) => {
  return (
    <div>
      <CoreMetadata data={data} />
      <FormHeader
        imageMobileUrl="/images/g81/ukpn-logo-mobile@3x.jpg"
        imageDesktopUrl="/images/g81/ukpn-logo-desktop@3x.jpg"
        showLogo
      />
      <ThankYou
        title={data.pageTitle}
        message={data.thankYouText}
        referenceMessage="Your reference number"
        referenceNumber={parseCookies().referenceNumber}
        redirectLink={data.buttonLink}
      />
    </div>
  )
}
