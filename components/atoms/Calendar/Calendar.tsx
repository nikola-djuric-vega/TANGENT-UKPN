import { format, addMonths, startOfMonth, parseISO } from 'date-fns'
import React, { useState, forwardRef } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './Calendar.module.scss'
import DatePicker from 'react-datepicker'
import { IconNames } from '_types/local'
import { useField } from 'formik'
import Icon from '../Icon/Icon'

export interface CalendarInputProps {
  value?: string
  onClick?: () => void
  placeholder?: string
  error?: boolean
}

export interface CalendarProps {
  placeholder?: string
  month?: boolean
  hideWeekend?: boolean
  name: string
  beginningDate?: Date | null
  endDate?: Date
}

const CustomInput = forwardRef(
  (props: CalendarInputProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    return (
      <button
        className={styles.customInput}
        onClick={props.onClick}
        ref={ref}
        type="button"
        data-error={props.error}
      >
        {props.value ? props.value : props.placeholder}
        <Icon name={IconNames.ICO_CALENDAR} size="xs" />
      </button>
    )
  }
)

CustomInput.displayName = 'CustomInput'

const Calendar = ({
  month,
  placeholder,
  name,
  hideWeekend = true,
  beginningDate = new Date(),
  endDate = undefined,
}: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [field, meta, helpers] = useField(name)

  const handleMenuClose = (shouldValidate: boolean) => {
    helpers.setTouched(true, shouldValidate)
  }

  const handleDateChange = (date: Date) => {
    setStartDate(date)
    helpers.setValue(format(date, 'dd/MM/yyyy'))
  }

  const currDate = format(new Date(), 'yyyy-MM-dd')
  const addOneMontToCurrDate = addMonths(parseISO(currDate), 1)
  const minDate = startOfMonth(addOneMontToCurrDate)
  const hasError = meta.error && meta.touched ? true : false

  return (
    <div className={styles.datePicker}>
      {month ? (
        <DatePicker
          {...field}
          placeholderText={placeholder}
          selected={startDate}
          onChange={(date: Date) => handleDateChange(date)}
          onCalendarClose={() => handleMenuClose(false)}
          onCalendarOpen={() => handleMenuClose(true)}
          customInput={<CustomInput error={hasError} />}
          calendarClassName={styles.calendarPopup}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFourColumnMonthYearPicker
          minDate={minDate}
        />
      ) : (
        <DatePicker
          {...field}
          placeholderText={placeholder}
          selected={startDate}
          onChange={(date: Date) => handleDateChange(date)}
          {...(hideWeekend && {
            filterDate: (date) => date.getDay() !== 6 && date.getDay() !== 0,
          })}
          customInput={<CustomInput error={hasError} />}
          calendarClassName={styles.calendarPopup}
          onCalendarClose={() => handleMenuClose(false)}
          onCalendarOpen={() => handleMenuClose(true)}
          calendarStartDay={1}
          dateFormat="dd/MM/yyyy"
          minDate={beginningDate}
          maxDate={endDate}
        />
      )}
    </div>
  )
}

export default Calendar
