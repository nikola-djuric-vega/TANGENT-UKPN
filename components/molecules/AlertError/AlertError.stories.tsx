import { AlertErrorType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import AlertError from './AlertError'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/AlertError',
  component: AlertError,
} as Meta<AlertErrorType>

const Template: Story<AlertErrorType> = (args) => <AlertError {...args} />

export const Default = Template.bind({})
export const AlertErrorData: AlertErrorType = {
  __typename: ComponentsTypeName.ALERT_ERROR,
  alertErrorDescription:
    'Coronavirus (Covid-19): How we are supporting our customers and staff',
  alertErrorIcon: IconNames.FORTY_PX_WARNING,
  alertErrorTitle: 'More info',
}
Default.args = AlertErrorData
