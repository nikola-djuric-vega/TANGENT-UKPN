import { DateTime } from 'luxon'

export const checkHourSlot = (
  value: string,
  relValue: string,
  isUntil: boolean = false
) => {
  if (!value || !relValue) {
    return false
  }
  const [vlHour, vlMinutes] = value.split(':')
  const [rlHour, rlMinutes] = relValue.split(':')
  let timeDifference

  const rlTime = DateTime.now().set({
    hour: parseInt(rlHour),
    minute: parseInt(rlMinutes),
  })

  const vlTime = DateTime.now().set({
    hour: parseInt(vlHour),
    minute: parseInt(vlMinutes),
  })

  if (isUntil && vlTime.startOf('hour') <= rlTime.startOf('hour')) {
    return true
  } else {
    timeDifference = rlTime.diff(vlTime, 'hours')
  }

  return Math.abs(timeDifference.hours) >= 4
}
