import React from 'react'
import Select, { SelectProps } from './Select'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Formik } from 'formik'
import { act } from 'react-dom/test-utils'
const mockDataWithOptions: SelectProps = {
  name: 'testing',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
}

const mockDataWithNoOptions: SelectProps = {
  name: 'test',
}

describe('Select test', () => {
  it('should render select component with options', async () => {
    const { getByLabelText, getByText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Select {...mockDataWithOptions} isSearchable={false} />
      </Formik>
    )

    const dropdown = await waitFor(() => getByLabelText('testing'))
    expect(dropdown).toBeInTheDocument()

    await act(async () => {
      dropdown.focus()
      fireEvent.keyDown(dropdown, { key: 'ArrowDown' })
    })
    const vanillaOption = getByText('Vanilla')
    const strawberryOption = getByText('Strawberry')
    const chocolateOption = getByText('Chocolate')
    expect(vanillaOption).toBeInTheDocument()
    expect(strawberryOption).toBeInTheDocument()
    expect(chocolateOption).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(vanillaOption)
    })
    expect(getByText('Vanilla')).toBeInTheDocument()

    dropdown.blur()
    expect(strawberryOption).not.toBeInTheDocument()
    expect(chocolateOption).not.toBeInTheDocument()
  })

  it('should render select component with no options', () => {
    const screen = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Select {...mockDataWithNoOptions} />
      </Formik>
    )
  })
})
