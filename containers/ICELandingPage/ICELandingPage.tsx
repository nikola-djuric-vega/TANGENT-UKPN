import { ICELandingPage as ICELandingPageType } from '_types/CMS/pages'
import { ButtonColors, LinkAppearance, TextSizes } from '_types/CMS'
import { useDictionaryItems } from '_context/dictionary-items'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import { SelectStyles } from '_atoms/Select/select-styles'
import FormHeader from '_molecules/FormHeader/FormHeader'
import RadioButton from '_atoms/RadioButton/RadioButton'
import styles from './ICELandingPage.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import CustomSelect from 'react-select'
import Label from '_atoms/Label/Label'
import { Option } from '_types/local'
import { useState } from 'react'
interface ICELandingPageProps {
  data: ICELandingPageType
}

const ICELandingPage = ({ data }: ICELandingPageProps) => {
  const [formLink, setFormLink] = useState<Option | null>()
  const [value, setValue] = useState<string | null>()
  const generateOptions = data?.links?.map((link) => ({
    value: link.url,
    label: link.name,
  }))

  const dictionary = useDictionaryItems()

  return (
    <>
      <CoreMetadata data={data} />
      <FormHeader
        imageMobileUrl="/images/g81/ukpn-logo-mobile.jpg"
        imageDesktopUrl="/images/g81/ukpn-logo-desktop.jpg"
        title={data.pageTitle}
        showLogo
      />
      <div className={styles.container}>
        <div className={styles.inner}>
          <Label
            className={styles.selectLabel}
            htmlFor="applicationOptions"
            text={data.selectLabel}
            isRequired={true}
          />
          {data?.links && data?.links?.length > 1 ? (
            <CustomSelect
              onChange={(option) => setFormLink(option)}
              //todo fix ts-ignore
              //@ts-ignore
              styles={SelectStyles(false)}
              inputId="applicationOptions"
              placeholder={'- Select -'}
              options={generateOptions}
              name="applicationOptions"
              className="react-select"
              isSearchable={false}
              value={formLink}
            />
          ) : (
            <div
              aria-label={data.selectLabel}
              className={styles.listItem}
              role="radiogroup"
            >
              <RadioButton
                name="Is this a dangerous situation"
                value="Yes"
                id="is-yes"
                setOption={(value: any) => setValue(value)}
                checked={value === 'Yes'}
              />
              <RadioButton
                name="Is this a dangerous situation"
                value="No"
                id="is-no"
                setOption={(value: any) => setValue(value)}
                checked={value === 'No'}
              />
            </div>
          )}
          <p className={styles.mandatoryText}>{data.mandatoryText}</p>
          {formLink && (
            <Link
              appearance={LinkAppearance.PRIMARY}
              url={formLink.value as string}
              className={styles.NextButton}
              color={ButtonColors.DARK}
            >
              Next
            </Link>
          )}
          {value === 'No' && (
            <Link
              appearance={LinkAppearance.PRIMARY}
              className={styles.NextButton}
              url={`${data?.links && data.links[0].url}`}
              color={ButtonColors.DARK}
            >
              Next
            </Link>
          )}
          {value === 'Yes' && (
            <div className={styles.richText}>
              <RichText
                text={dictionary.streetFurnitureDangerous}
                size={TextSizes.TEXT_BODY_2}
                tabIndex={0}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ICELandingPage
