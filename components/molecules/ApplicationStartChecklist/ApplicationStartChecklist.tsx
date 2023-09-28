import styles from './ApplicationStartChecklist.module.scss'
import Heading from '_atoms/Heading/Heading'
import React from 'react'

export interface ApplicationStartChecklistProps {
  checkListTitle: string
  checklistItems: string[]
}

const ApplicationStartChecklist = ({
  checkListTitle,
  checklistItems,
}: ApplicationStartChecklistProps) => {
  return (
    <>
      {!!checkListTitle && (
        <Heading className={styles.listTitle} level={5} tabIndex={0}>
          {checkListTitle}
        </Heading>
      )}
      {!!checklistItems?.length && (
        <ul className={styles.listItems}>
          {checklistItems.map((listItem, index) => (
            <li className={styles.listItem} key={index} tabIndex={0}>
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ApplicationStartChecklist
