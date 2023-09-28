import { StreetFormPage as StreetFormPageType } from '_types/CMS/pages/form-pages'
import { AssetRepeaterItemsProvider } from '_context/asset-repeater-items'
import { identifyThankyouPage } from '_utils/identify-thankyou-page'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import DynamicForm from '_organism/DynamicForm/DynamicForm'
import FormHeader from '_molecules/FormHeader/FormHeader'
import { Form, UmbracoForm } from '_types/CMS'
import React from 'react'

interface StreetFormPageProps {
  data: StreetFormPageType
  formData?: Form
}

export const StreetFormPage = ({ data, formData }: StreetFormPageProps) => {
  const form = formData
    ? formData
    : (data.formDetails as UmbracoForm[])?.[0]?.umbracoForm
  return (
    <div>
      <CoreMetadata data={data} />
      <FormHeader
        imageMobileUrl="/images/g81/ukpn-logo-mobile@3x.jpg"
        imageDesktopUrl="/images/g81/ukpn-logo-desktop@3x.jpg"
        title={form?.name}
        showLogo
      />
      {!!form && (
        <AssetRepeaterItemsProvider items={data.assetFormRepeater}>
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
        </AssetRepeaterItemsProvider>
      )}
    </div>
  )
}
