import { ContactUsType, ContactUsItem } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, Link, LinkType } from '_types/CMS'
import { render } from '@testing-library/react'
import ContactUs from './ContactUs'
import React from 'react'

const mockEmailLink: Link = {
  name: 'Contact Us Mock Mail',
  type: LinkType.EXTERNAL,
  url: 'mock@testemail.com',
}

const mockContactUsItem: ContactUsItem = {
  title: 'Mock ContactUsItem Title',
  text: 'Mock ContactUsItem Text',
  telephone1: '00000000',
  email: mockEmailLink,
}

const mockProps: ContactUsType = {
  __typename: ComponentsTypeName.CONTACT_US,
  contactUsItems: [mockContactUsItem],
}

describe('Contact Us Test', () => {
  it('should render Contact Us with elements', () => {
    const screen = render(<ContactUs {...mockProps} />)

    const elementItem = screen.getByText('Mock ContactUsItem Title')
    const elementPhone = screen.getByText('00000000')
    const elementEmail = screen.getByText('Contact Us Mock Mail')

    expect(elementItem).toBeInTheDocument()
    expect(elementPhone).toBeInTheDocument()
    expect(elementEmail).toBeInTheDocument()
  })
})
