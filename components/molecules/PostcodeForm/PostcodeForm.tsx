import AddressLookUp from '_atoms/AddressLookUp/AddressLookUp'
import { useDictionaryItems } from '_context/dictionary-items'
import { Link as LinkType, LinkAppearance } from '_types/CMS'
import { transformString } from '_utils/tranform-string'
import styles from './PostcodeForm.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import { useRouter } from 'next/router'
import { Address } from '_types/local'
import { useState } from 'react'

export interface AreaCheck {
  address: Address | null
  isSuccessful: boolean
  notInTheArea: boolean
  incorrectAddress: boolean
}

export interface PostcodeFormProps {
  formDestination?: LinkType
  pDFDownloadLink?: LinkType
}

const PostcodeForm = ({
  formDestination,
  pDFDownloadLink,
}: PostcodeFormProps) => {
  const router = useRouter()
  const dictionary = useDictionaryItems()
  const [isAddress, setIsAddress] = useState<Address | null>(null)
  const handleAddress = (address: Address) => {
    if (formDestination?.url) {
      router.push(formDestination.url)
    }

    setIsAddress(address)
  }

  return (
    <section className={styles.postcodeForm}>
      {!!formDestination && (
        <div className={styles.content}>
          <section className={styles.postCodeSearch}>
            <AddressLookUp
              placeholder="Please enter your site postcode"
              clearHandler={() => setIsAddress(null)}
              clickHandler={handleAddress}
              isPostcodeForm
              id="PostcodeForm"
            >
              <div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: transformString(
                      dictionary.addressNotFoundStartApplication
                    ),
                  }}
                />{' '}
                <Link
                  appearance={LinkAppearance.BLANK}
                  target={formDestination.target}
                  url={formDestination.url}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: transformString(
                        dictionary.addressNotFoundStartApplicationContinue
                      ),
                    }}
                  />
                </Link>
              </div>
            </AddressLookUp>
          </section>
          <RichText
            className={styles.description}
            text={dictionary['postcodeSearchDescription']}
          />
          <Link
            className={styles.destinationLink}
            appearance={LinkAppearance.PRIMARY}
            data-has-address-set={!!isAddress}
            target={formDestination.target}
            url={formDestination.url}
          >
            {formDestination?.name}
          </Link>
        </div>
      )}
      {!!pDFDownloadLink && (
        <div className={styles.downloadLinkWrapper}>
          <Link
            className={styles.downloadLink}
            appearance={LinkAppearance.BLANK}
            url={pDFDownloadLink.url}
            target={pDFDownloadLink.target}
          >
            {pDFDownloadLink.name}
          </Link>
        </div>
      )}
    </section>
  )
}

export default PostcodeForm
