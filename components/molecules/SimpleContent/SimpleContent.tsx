import { SimpleContentType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './SimpleContent.module.scss'
import RichText from '_atoms/RichText/RichText'
import React from 'react'

const SimpleContent = ({
  isHelpAndContact = false,
  text,
}: SimpleContentType) => {
  return (
    <ComponentLayout removeGridPadding={isHelpAndContact}>
      {!!text && <RichText text={text} className={styles.content} />}
    </ComponentLayout>
  )
}

export default SimpleContent
