import { AreaCheckerType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import AreaChecker from './AreaChecker'
import React from 'react'

export default {
  title: 'Molecules/AreaChecker',
  component: AreaChecker,
} as Meta

const Template: Story<AreaCheckerType> = (args) => <AreaChecker {...args} />

export const Default = Template.bind({})
export const AreaCheckerData: AreaCheckerType = {
  __typename: ComponentsTypeName.AREA_CHECKER,
  title: 'Check if you’re in our area',
  text: "<p>Enter your postcode and select your address to see if we're responsible for your electricity supply</p>",
  desktopImage: {
    name: 'desktop-image',
    url: 'https://media.umbraco.io/dev-uk-power-networks/naaat1ek/area-checker-desktop.png',
  },
  mobileImage: {
    name: 'desktop-image',
    url: 'https://media.umbraco.io/dev-uk-power-networks/lsehivw4/area-checker-mobile.png',
    umbracoHeight: '300',
    umbracoWidth: '300',
  },
  successTitle:
    'Good News. UK Power Networks own and maintain the electricity cables in your area.',
  successText:
    'Your address is within our London Network Area. So if you have a power cut, need extra support or need another electrical service then we can help.',
  errorAreaTitle:
    'Sorry, unfortunately we are not the local electricity distributor for your address.',
  errorAddressTitle:
    'Sorry, we’re not able to find that address. Can you check you’ve entred your adress correctly?',
  errorAddressText:
    '<p>If you have please <a href="#>contact</a> us and we’ll help you</p>',
}
Default.args = AreaCheckerData
