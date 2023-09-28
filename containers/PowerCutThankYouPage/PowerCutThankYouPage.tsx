import { PowerCutThankYouPage as PowerCutThankYouPageType } from '_types/CMS/pages/form-pages'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import styles from './PowerCutThankYouPage.module.scss'
import { ComponentsTypeName } from '_types/CMS'
import ThankYou from '_atoms/ThankYou/ThankYou'
import { parseCookies } from 'nookies'

interface PowerCutThankYouPageProps {
  data: PowerCutThankYouPageType
}

export const PowerCutThankYouPage = ({ data }: PowerCutThankYouPageProps) => {
  return (
    <>
      <CoreMetadata data={data} />
      <PowerCutPageContainer>
        <ThankYou
          referenceNumber={parseCookies().referenceNumber}
          referenceMessage="Your reference number"
          redirectLink={data.buttonLink}
          message={data.thankYouText}
          title={data.pageTitle}
        />
        <div className={styles.components}>
          {data.components?.map((comp, i) => {
            const compObject =
              comp.__typename === ComponentsTypeName.ACCORDION
                ? { data: { ...comp, isPowerCut: true }, id: i }
                : { data: comp, id: i }
            return renderComponent(compObject)
          })}
        </div>
      </PowerCutPageContainer>
    </>
  )
}
