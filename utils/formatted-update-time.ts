import { DateTime, DurationObjectUnits } from 'luxon'

export const formattedUpdateTime = (updatedTime: string | undefined) => {
  // update CMSPageUpdateDate once page updateDate is available
  const CMSPageUpdateDate = '2022-10-08T16:45:00.00Z'
  const pastDate = DateTime.fromISO(
    updatedTime ? updatedTime : CMSPageUpdateDate
  )

  const now = DateTime.local()

  const time: DurationObjectUnits = now
    .diff(pastDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds'])
    .toObject()

  return DateTime.now()
    .minus(time)
    .toRelative({ unit: ['days', 'hours', 'minutes'] })
}
