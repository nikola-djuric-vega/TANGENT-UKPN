import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ChecklistType } from '_types/CMS/nodes/components/UKPN'
import Heading from '_atoms/Heading/Heading'
import styles from './Checklist.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

const Checklist = ({ title, checklistItems }: ChecklistType) => {
  return (
    <ComponentLayout
      containerClass={styles.checklist}
      innerClass={styles.content}
    >
      <div className={styles.list}>
        {!!title && (
          <Heading className={styles.title} level={4}>
            {title}
          </Heading>
        )}
        {checklistItems?.map?.((item, index) => (
          <div className={styles.listItem} key={index}>
            {!!item && <p className={styles.text}>{item}</p>}
            <Icon name={IconNames.ICON_CHECK_ONE} />
          </div>
        ))}
      </div>
    </ComponentLayout>
  )
}

export default Checklist
