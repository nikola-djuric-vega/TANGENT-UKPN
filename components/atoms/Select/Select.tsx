import { SelectStyles } from './select-styles'
import CustomSelect from 'react-select'
import { Option } from '_types/local'
import dynamic from 'next/dynamic'
import { useField } from 'formik'
import React from 'react'

const DynamicCustomSelect = dynamic(
  () => import('react-select')
) as typeof CustomSelect

export interface SelectProps {
  options?: object[]
  isDisabled?: boolean
  placeholder?: string
  name: string
  hasError?: boolean
  value?: Option
  isSearchable?: boolean
}

export type onChangeOption = Option | Option[] | undefined

const Select = ({
  options,
  isDisabled,
  placeholder,
  name,
  hasError = false,
  isSearchable = false,
  ...props
}: SelectProps) => {
  const [field, meta, helpers] = useField(name)
  const finalOptions = options
    ? [{ value: '', label: 'Select...' }, ...options]
    : [{ value: '', label: 'Select...' }]

  return (
    <DynamicCustomSelect
      className="react-select"
      //todo fix ts-ignore
      //@ts-ignore
      styles={SelectStyles(hasError)}
      options={finalOptions}
      placeholder={placeholder}
      isDisabled={isDisabled}
      onChange={(option) => helpers.setValue((option as Option).value)}
      isSearchable={isSearchable}
      blurInputOnSelect={true}
      onBlur={() => helpers.setTouched(true, false)}
      defaultValue={finalOptions.filter(
        (option) => (option as Option).value === meta.value
      )}
      name={name}
      inputId={name}
      {...props}
      aria-label={name}
    />
  )
}

export default Select
