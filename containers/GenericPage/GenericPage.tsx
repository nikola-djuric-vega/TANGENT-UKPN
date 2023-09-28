import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { PowerCutPageContainer } from '_hoc/PowerCutPage/PowerCutPage'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import { ComponentsTypeName, Form } from '_types/CMS'
import styles from './GenericPage.module.scss'
import { MainSitePages } from '_types/CMS'
import Layout from '_hoc/Layout/Layout'

export interface GenericPageProps {
  data: MainSitePages
  formData?: Form
}

export const GenericPage = ({ data, formData }: GenericPageProps) => {
  return (
    <ConditionalWrapper
      condition={
        'applyPowerCutNavigation' in data &&
        data.applyPowerCutNavigation === true
      }
      wrapper={(children) => (
        <PowerCutPageContainer>
          <CoreMetadata data={data} />
          <main className={styles.main}>{children}</main>
        </PowerCutPageContainer>
      )}
      elseWrapper={(children) => <Layout data={data}>{children}</Layout>}
    >
      <>
        {'components' in data &&
          data.components
            ?.filter(
              (comp) => comp.__typename !== ComponentsTypeName.SUB_NAVIGATION
            )
            .map((comp, i) =>
              renderComponent({
                data: comp,
                id: i,
                pageContainer: data.__typename,
              })
            )}
      </>
    </ConditionalWrapper>
  )
}
