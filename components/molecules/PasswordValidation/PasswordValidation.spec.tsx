import PasswordValidation, {
  PasswordValidationProps,
} from './PasswordValidation'
import { fireEvent, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockData: PasswordValidationProps = {
  isValidation: true,
}

describe('PasswordValidation test', () => {
  it('shall render PasswordValidation without validation', () => {
    const { getByRole } = render(<PasswordValidation />)
    expect(getByRole('input')).toHaveAttribute('type', 'password')
  })

  it('shall render PasswordValidation with validation and be able to toggle password visibility', () => {
    const { getAllByRole } = render(<PasswordValidation {...mockData} />)
    const inputFields = getAllByRole('input')
    expect(inputFields[0]).toHaveAttribute('type', 'password')
    expect(inputFields[1]).toHaveAttribute('type', 'password')
    const buttons = getAllByRole('button')
    expect(buttons.length).toBe(2)
    fireEvent.click(buttons[0])
    expect(inputFields[0]).toHaveAttribute('type', 'text')
    fireEvent.click(buttons[1])
    expect(inputFields[1]).toHaveAttribute('type', 'password')
  })

  it('shall render PasswordValidation with error', async () => {
    const { getByText, getByTestId, getAllByRole } = render(
      <PasswordValidation {...mockData} />
    )
    const inputFields = getAllByRole('input')
    expect(inputFields.length).toBe(2)
    await userEvent.type(inputFields[0], 'HelloWorld2022')
    await userEvent.type(inputFields[1], 'dd')
    const error = await waitFor(() => getByTestId('error-msg'))
    expect(error).toBeInTheDocument()
    expect(getByText('The passwords do not match')).toBeInTheDocument()
  })

  it('shall render PasswordValidation with no error', async () => {
    const { queryByText, queryByTestId, getAllByRole } = render(
      <PasswordValidation {...mockData} />
    )
    const inputFields = getAllByRole('input')
    expect(inputFields.length).toBe(2)
    await userEvent.type(inputFields[0], 'HelloWorld/2022')
    await userEvent.type(inputFields[1], 'HelloWorld/2022')
    expect(queryByTestId('error-msg')).not.toBeInTheDocument()
    expect(queryByText('The passwords do not match')).not.toBeInTheDocument()
  })

  it('shall render PasswordValidation with error due to no lower case letters', async () => {
    const { queryByTestId, getAllByRole } = render(
      <PasswordValidation {...mockData} />
    )
    const inputFields = getAllByRole('input')
    expect(inputFields.length).toBe(2)
    await userEvent.type(inputFields[0], 'DD12!4567')
    await userEvent.type(inputFields[1], 'DD12!4567')
    expect(queryByTestId('error-msg')).not.toBeInTheDocument()
  })

  it('shall render PasswordValidation with error due to no capital case letters', async () => {
    const { queryByTestId, getAllByRole } = render(
      <PasswordValidation {...mockData} />
    )
    const inputFields = getAllByRole('input')
    expect(inputFields.length).toBe(2)
    await userEvent.type(inputFields[0], 'dd12!4567')
    await userEvent.type(inputFields[1], 'dd12!4567')
    expect(queryByTestId('error-msg')).not.toBeInTheDocument()
  })

  it('shall render PasswordValidationwith no error', async () => {
    const { queryByTestId, getAllByRole } = render(
      <PasswordValidation {...mockData} />
    )
    const inputFields = getAllByRole('input')
    expect(inputFields.length).toBe(2)
    await userEvent.type(inputFields[0], 'DD12!4567a')
    await userEvent.type(inputFields[1], 'DD12!4567a')
    expect(queryByTestId('error-msg')).not.toBeInTheDocument()
  })
})
