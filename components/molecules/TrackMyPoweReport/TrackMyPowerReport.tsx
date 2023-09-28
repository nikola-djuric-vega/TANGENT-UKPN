import { useDictionaryItems } from '_context/dictionary-items'
import { getNumberOfDays } from 'utils/get-number-of-days'
import { transformString } from '_utils/tranform-string'
import { getCurrentDay } from 'utils/get-current-day'
import styles from './TrackMyPowerReport.module.scss'
import RichText from '_atoms/RichText/RichText'
import { DateTime } from 'luxon'
import React from 'react'

interface TrackMyPowerReportProps {
  data: any
}

const TrackMyPowerReport = ({ data }: TrackMyPowerReportProps) => {
  const { date, name, message } = data
  const dictionary = useDictionaryItems()
  let reportedDate = DateTime.fromISO(date, {
    setZone: true,
  }).toFormat('dd MMM yyyy HH:mm')
  let reportedDateCheck = DateTime.fromISO(date, {
    setZone: true,
  }).toFormat('MM/dd/yyyy')
  let reportedDateTime = DateTime.fromISO(date, {
    setZone: true,
  }).toFormat('HH:mm')

  let daysDiff = getNumberOfDays(reportedDateCheck, getCurrentDay())

  const displayDate = () => {
    if (daysDiff === 0) {
      return 'Today ' + reportedDateTime
    } else if (daysDiff === 1) {
      return 'Yesterday ' + reportedDateTime
    } else {
      return reportedDate
    }
  }

  return DateTime.fromISO(date, {
    setZone: true,
  }).isValid ? (
    <>
      <section className={styles.reportsContainer}>
        <div className={styles.reportsContainerDate}>{displayDate()}</div>
        <div className={styles.reportsContainerTitle}>
          {name || transformString(dictionary.trackerTextMessagesTitle)}
        </div>
        {message && (
          <div className={styles.reportsContainerDescription}>
            <RichText text={message} />
          </div>
        )}
      </section>
    </>
  ) : null
}

export default TrackMyPowerReport
