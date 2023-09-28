import React from 'react'
import { render } from '@testing-library/react'
import ThankYou, { ThankYouProps } from './ThankYou'
import { LinkType } from '_types/CMS'

const mockData: ThankYouProps = {
  title: 'Thank You',
  redirectLink: {
    name: 'test',
    type: LinkType.EXTERNAL,
    url: 'http://google.com',
  },
  message: 'test message',
  referenceMessage: 'reference message',
  referenceNumber: '0123456789',
}

describe('ThankYou test', () => {
  it('should render Thank You component with props', () => {
    const { getByText } = render(<ThankYou {...mockData} />)
    const title = getByText('Thank You')
    const referenceNumber = getByText('0123456789')
    const referenceMessage = getByText('reference message')
    const message = getByText('test message')

    expect(title).toBeInTheDocument()
    expect(referenceNumber).toBeInTheDocument()
    expect(referenceMessage).toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })
})
