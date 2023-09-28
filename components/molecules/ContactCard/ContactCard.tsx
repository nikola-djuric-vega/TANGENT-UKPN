import Author, { AuthorLayout, AuthorTheme } from '_atoms/Author/Author'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ContactCardType } from '_types/CMS/nodes/components/UKPN'
import RichText from '_atoms/RichText/RichText'
import styles from './ContactCard.module.scss'
import React from 'react'

const ContactCard = ({ author, cardTitle, cardSubtitle }: ContactCardType) => {
  return (
    <ComponentLayout
      containerClass={styles.contactCard}
      removeBottomMargin
      removeGridPadding
    >
      <div className={styles.content}>
        {!!author && (
          <Author
            authorName={author.authorName}
            department={author.department}
            layout={AuthorLayout.COLUMN}
            theme={AuthorTheme.WHITE}
            trim
          />
        )}
        {!!cardTitle && (
          <p className={styles.cardTitle} tabIndex={1}>
            {cardTitle}
          </p>
        )}
        {!!cardSubtitle && (
          <RichText
            className={styles.cardSubtitle}
            text={cardSubtitle}
            tabIndex={1}
          />
        )}
      </div>
    </ComponentLayout>
  )
}

export default ContactCard
