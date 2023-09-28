import React from 'react'
import TitleAndDescription, {
  TitleAndDescriptionProps,
} from './TitleAndDescription'
import { render } from '@testing-library/react'

const mockData: TitleAndDescriptionProps = {
  title: 'Hello World',
  description: 'Greetings',
}

describe('Title and Description Test', () => {
  it('should render TitleAndDescription with props', () => {
    const { getByText } = render(<TitleAndDescription {...mockData} />)
    const title = getByText('Hello World')
    const description = getByText('Greetings')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
