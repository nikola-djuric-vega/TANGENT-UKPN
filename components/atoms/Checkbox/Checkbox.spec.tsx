import Checkbox, { CheckboxProps } from './Checkbox'
import { render } from '@testing-library/react'

const mockData: CheckboxProps = {
  name: '',
  id: '',
  text: 'testing',
  isRequired: true,
}

describe('Checkbox test', () => {
  it('shall render Checkbox with mock props', () => {
    const { queryByText, getByRole } = render(<Checkbox {...mockData} />)
    const text = queryByText('testing')
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
