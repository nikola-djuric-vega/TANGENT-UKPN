import FormStepper, { FormStepperProps } from './FormStepper'
import { render } from '@testing-library/react'

const mockData: FormStepperProps = {
  activePage: 1,
  completedPages: [1],
  pages: [
    { caption: 'Property details', fieldsets: [] },
    { caption: 'Diversion works', fieldsets: [] },
    { caption: 'Your details', fieldsets: [] },
  ],
}

describe('FormStepper test', () => {
  it('shall rebder FormStepper with mock props starting step 2', () => {
    const { queryByText } = render(<FormStepper {...mockData} />)
    const caption1 = queryByText('Property details')
    const caption2 = queryByText('Diversion works')
    const caption3 = queryByText('Your details')
    const step1 = queryByText('1')
    const step2 = queryByText('2')
    const step3 = queryByText('3')
    expect(caption1).toBeInTheDocument()
    expect(caption2).toBeInTheDocument()
    expect(caption3).toBeInTheDocument()
    expect(step1).not.toBeInTheDocument()
    expect(step2).toBeInTheDocument()
    expect(step3).toBeInTheDocument()
  })
})
