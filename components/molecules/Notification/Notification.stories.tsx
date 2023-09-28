import { NotificationType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import Notification from './Notification'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/Notification',
  component: Notification,
} as Meta<NotificationType>

const Template: Story<NotificationType> = (args) => <Notification {...args} />

export const Default = Template.bind({})
export const NotificationData: NotificationType = {
  __typename: ComponentsTypeName.NOTIFICATION,
  notificationMessage:
    'Strong winds are forecast across parts of our electricity network in the East of England.',
  link: { url: 'http://google.com', name: 'google', type: LinkType.EXTERNAL },
  secondaryCallToAction: 'More info',
  pulseTitle: 'LIVE',
  enableLivePulse: true,
}
Default.args = NotificationData
