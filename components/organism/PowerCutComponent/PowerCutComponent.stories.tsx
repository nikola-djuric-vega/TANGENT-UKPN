import { PowerCutComponentType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import PowerCut from './PowerCutComponent'
import React from 'react'

export default {
  title: 'organisms/PowerCut',
  component: PowerCut,
} as Meta

const Template: Story<PowerCutComponentType> = (args) => <PowerCut {...args} />

export const Default = Template.bind({})
Default.args = {
  __typename: ComponentsTypeName.POWER_CUT_COMPONENT,
  subtitle: 'Enter your postcode to search, track and report power cuts.',
  cTAText: 'Don’t know your postcode? Explore all power cuts as:',
  image: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/szgnlckm/power-cut-bg.webp',
    name: 'bg-image',
  },
  title: 'Power off?',
  listLink: {
    type: LinkType.CONTENT,
    name: '',
    url: '/',
  },
  mapLink: {
    type: LinkType.CONTENT,
    name: '',
    url: '/',
  },
}
