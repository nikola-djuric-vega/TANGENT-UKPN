import { NotificationType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, Link, LinkType } from '_types/CMS'
import { render } from '@testing-library/react'
import Notification from './Notification'
import React from 'react'
import { IconNames } from '_types/local'

const mockLink: Link = {
  __typename: 'mock_type',
  name: 'Mock Link',
  type: LinkType.CONTENT,
  url: 'mock/notification/url',
}

const mockProps: NotificationType = {
  __typename: ComponentsTypeName.NOTIFICATION,
  notificationMessage: 'Mock Notification Message',
  link: mockLink,
  pulseTitle: 'LIVE',
  enableLivePulse: true,
  secondaryCallToAction: 'More info',
}

describe('Notification Test', () => {
  it('should render Notification', () => {
    const screen = render(<Notification {...mockProps} />)

    const elementMessage = screen.getByText('Mock Notification Message')
    const elementUrl = screen
      .getByText('Mock Notification Message')
      .closest('a')

    expect(elementMessage).toBeInTheDocument()
    expect(elementUrl).toHaveAttribute('href', '/mock/notification/url')
  })
})
