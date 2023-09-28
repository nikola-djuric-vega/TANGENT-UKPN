import { MeteredConnectionFormPage as MeteredConnectionFormPageType } from '_types/CMS/pages/form-pages'
import { RepresentativeFormItemsProvider } from '_context/representative-form-item'
import { AssetRepeaterItemsProvider } from '_context/asset-repeater-items'
import { identifyThankyouPage } from '_utils/identify-thankyou-page'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import DynamicForm from '_organism/DynamicForm/DynamicForm'
import FormHeader from '_molecules/FormHeader/FormHeader'
import { Form, UmbracoForm } from '_types/CMS'
import React from 'react'

interface MeteredConnectionFormPageProps {
  data: MeteredConnectionFormPageType
  formData?: Form
}

export const MeteredConnectionFormPage = ({
  data,
  formData,
}: MeteredConnectionFormPageProps) => {
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
        <RepresentativeFormItemsProvider
          items={data.representativeFormRepeater}
        >
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
        </RepresentativeFormItemsProvider>
      )}
    </div>
  )
}
