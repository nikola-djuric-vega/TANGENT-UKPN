import { DateTime } from 'luxon'

export interface GenertateTimeArgs {
  amount: number
  isDecrement?: boolean
  addTimeFromMins?: number
}

export const generateTime = ({
  amount,
  isDecrement,
  addTimeFromMins = 0,
}: GenertateTimeArgs) => {
  let todaysDate = DateTime.now()

  let roundedMin: string | number = Math.ceil(todaysDate.minute / 15) * 15
  let hour = todaysDate.hour
  let nextSlot

  nextSlot = DateTime.now().set({ minute: roundedMin })

  if (isDecrement) {
    nextSlot = nextSlot.minus({ hours: amount })
  } else {
    nextSlot = nextSlot.plus({
      hours: amount,
      ...(addTimeFromMins && { minutes: addTimeFromMins }),
    })
  }

  return nextSlot
}
