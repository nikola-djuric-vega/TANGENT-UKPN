import { T9ApplicationStartOverview } from '_types/CMS/pages/main-site-pages'
import ApplicationStart from '_organism/ApplicationStart/ApplicationStart'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import { ComponentsTypeName, Form } from '_types/CMS'
import Layout from '_hoc/Layout/Layout'

export interface T9ApplicationStartOverviewConnectionPageProps {
  data: T9ApplicationStartOverview
  formData?: Form
}

export const T9ApplicationStartOverviewConnectionPage = ({
  data,
}: T9ApplicationStartOverviewConnectionPageProps) => {
  return (
    <Layout data={data}>
      <ApplicationStart
        title={data.pageTitle}
        subTitle={data.pageSubtitle}
        checkListTitle={data.title}
        checklistItems={data.checklistItems}
        footer={data.footer}
        formTitle={data.postcodeFormTitle}
        formDestination={data.postcodeFormDestination}
        pDFDownloadLink={data.postcodePDFDownloadLink}
      />
      {data.components
        ?.filter(
          (comp) => comp.__typename !== ComponentsTypeName.SUB_NAVIGATION
        )
        .map((comp, i) => renderComponent({ data: comp, id: i }))}
    </Layout>
  )
}
