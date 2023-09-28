import { generateTime } from '_utils/generate-time'
import { FromTo } from '_types/CMS'
import { DateTime } from 'luxon'

export const getTimesSlot = (
  amount: number,
  day: string,
  isUntil?: boolean
) => {
  const nextTimeSlot = generateTime({ amount })
  const times = []

  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 15) {
      let time = DateTime.now().set({ hour: hour, minute: min })
      const formatedTime = time.toFormat('HH:mm')

      switch (true) {
        case day === 'Today' && time >= nextTimeSlot:
          times.push({
            value: formatedTime,
            label: formatedTime,
          })
          break
        case day === 'Today' && time <= nextTimeSlot && isUntil:
          times.push({
            value: formatedTime,
            label: formatedTime,
          })
          break
        case day === 'Tomorrow':
          times.push({
            value: formatedTime,
            label: formatedTime,
          })
          break
        default:
          break
      }
    }
  }
  return times
}

export const timeSlots = (day: string = 'Today') => {
  return {
    from: getTimesSlot(0, day),
    until: getTimesSlot(4, day, true),
  } as FromTo
}
