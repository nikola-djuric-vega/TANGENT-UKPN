import { PlainLinkType } from '_types/CMS/nodes/components/UKPN'
import PowerCutPanelLink from './PowerCutPanelLink'
import { Meta, Story } from '@storybook/react'
import { LinkType } from '_types/CMS'
import React from 'react'

export default {
  title: 'Atoms/PowerCutPanelLink',
  component: PowerCutPanelLink,
} as Meta

const Template: Story<PlainLinkType> = (args) => <PowerCutPanelLink {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Privacy policy',
  link: {
    url: '/privacy-policy',
    target: '_blank',
    name: 'Privacy Policy',
    type: LinkType.CONTENT,
  },
}
