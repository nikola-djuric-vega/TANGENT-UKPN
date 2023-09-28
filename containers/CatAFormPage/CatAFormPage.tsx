import { CatAFormPage as CatAFormPageType } from '_types/CMS/pages/form-pages'
import { identifyThankyouPage } from '_utils/identify-thankyou-page'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import DynamicForm from '_organism/DynamicForm/DynamicForm'
import FormHeader from '_molecules/FormHeader/FormHeader'
import { Form, UmbracoForm } from '_types/CMS'

interface CatAFormPageProps {
  data: CatAFormPageType
  formData?: Form
}

export const CatAFormPage = ({ data, formData }: CatAFormPageProps) => {
  const form = formData
    ? formData
    : (data.formDetails as UmbracoForm[])?.[0]?.umbracoForm

  return (
    <div>
      <CoreMetadata data={data} />
      <FormHeader
        imageMobileUrl="/images/g81/ukpn-logo-mobile.jpg"
        imageDesktopUrl="/images/g81/ukpn-logo-desktop.jpg"
        title={form?.name}
        showLogo
      />
      {!!form && (
        <DynamicForm
          {...form}
          _id={data.id}
          includeReference={data.includeReference}
          thankYouPageUrl={identifyThankyouPage(
            data.descendants.items,
            data.thankYouPageId
          )}
          type={data.__typename}
        />
      )}
    </div>
  )
}
