import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ContactUsType } from '_types/CMS/nodes/components/UKPN'
import { checkIfEmail } from '_utils/check-if-email'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './ContactUs.module.scss'
import Heading from '_atoms/Heading/Heading'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import Icon from '_atoms/Icon/Icon'
import React from 'react'
import { IconNames } from '_types/local'

export interface ContactUsProps extends ContactUsType {
  isPanel?: boolean
  isHelpAndContact?: boolean
}

const ContactUs = ({
  contactUsItems,
  removeBottomMargin,
  isPanel = false,
  isHelpAndContact = false,
  contactUsBorder,
}: ContactUsProps) => {
  return (
    <ComponentLayout
      removeBottomMargin={removeBottomMargin}
      removeGridPadding={isHelpAndContact}
    >
      <div className={styles.contactUs} data-border={contactUsBorder}>
        <div
          className={styles.contactUsItems}
          data-is-help={isHelpAndContact}
          data-is-panel={isPanel}
          data-border={contactUsBorder}
        >
          {contactUsItems?.map?.((item, index) => (
            <div className={styles.item} key={index} data-is-panel={isPanel}>
              {item?.icon && (
                <div className={styles.icon}>
                  <Icon name={item.icon} baseColour />
                </div>
              )}
              {item?.title && (
                <Heading className={styles.itemTitle} level={5}>
                  {item.title}
                </Heading>
              )}
              {item?.text && <p className={styles.itemText}>{item.text}</p>}
              <div className={styles.phoneNumbers}>
                {item?.telephone1 && (
                  <Link
                    appearance={LinkAppearance.SECONDARY}
                    url={`tel:${item.telephone1}`}
                    icon={IconNames.TELEPHONE}
                    color={ButtonColors.DARK}
                    className={styles.link}
                    skipUrlTransform
                  >
                    {item.telephone1}
                  </Link>
                )}
                {item?.telephone2 && (
                  <Link
                    appearance={LinkAppearance.SECONDARY}
                    url={`tel:${item.telephone2}`}
                    icon={IconNames.TELEPHONE}
                    color={ButtonColors.DARK}
                    className={styles.link}
                    skipUrlTransform
                  >
                    {item.telephone2}
                  </Link>
                )}
              </div>
              {item?.email?.url && item?.email?.name && (
                <Link
                  className={styles.link}
                  appearance={LinkAppearance.TERTIARY}
                  color={ButtonColors.DARK}
                  url={checkIfEmail(item.email.url, item.emailHeader)}
                >
                  {item.email.name}
                </Link>
              )}
              <div className={styles.links}>
                {item?.facebook?.name && item?.facebook?.url && (
                  <Link
                    appearance={LinkAppearance.SECONDARY}
                    target={item.facebook.target}
                    className={styles.social}
                    color={ButtonColors.DARK}
                    url={item.facebook.url}
                  >
                    <Icon name={IconNames.ICON_FACEBOOK} />
                  </Link>
                )}
                {item?.linkedIn?.name && item?.linkedIn?.url && (
                  <Link
                    appearance={LinkAppearance.SECONDARY}
                    target={item.linkedIn.target}
                    className={styles.social}
                    color={ButtonColors.DARK}
                    url={item.linkedIn.url}
                  >
                    <Icon name={IconNames.ICON_LINKEDIN} />
                  </Link>
                )}
                {item?.twitter?.name && item?.twitter?.url && (
                  <Link
                    appearance={LinkAppearance.SECONDARY}
                    target={item.twitter.target}
                    color={ButtonColors.DARK}
                    className={styles.social}
                    url={item.twitter.url}
                  >
                    <Icon name={IconNames.ICON_TWITTER} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ComponentLayout>
  )
}

export default ContactUs
