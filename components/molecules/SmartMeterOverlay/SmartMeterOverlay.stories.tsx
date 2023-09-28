import { SmartMeterOverlayType } from '_types/CMS/form'
import SmartMeterOverlay from './SmartMeterOverlay'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local/icons'
import React from 'react'

export default {
  title: 'Molecules/SmartMeterOverlay',
  component: SmartMeterOverlay,
} as Meta

const Template: Story<SmartMeterOverlayType> = (args) => (
  <SmartMeterOverlay {...args} />
)

export const Default = Template.bind({})
export const SimpleContentData: SmartMeterOverlayType = {
  smartMeterBodyText: `<p>We have completed some checks on your smart meter and can confirm that you are still receiving power to your property. If you have a prepayment meter please check your credit, otherwise please contact your electricity supplier (the company you pay your electricity bills to), who will be able to help you further.</p><br><br><p>Not sure who your electricity supplier is? If you live in London, the South East and East of England we can help by telling you who the current electricity supplier is for your address. <a href="https://www.ukpowernetworks.co.uk/internet/en/help-and-advice/who-is-my-supplier/">Find your supplier.</a></p>`,
  smartMeterSubtitle: 'There is an electricity supply to your meter',
  smartMeterTitle: 'We have checked your electricity supply',
  smartMeterIcon: IconNames.ICON_METERBOX,
}
Default.args = SimpleContentData
