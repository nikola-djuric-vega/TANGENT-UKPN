import { SocialLinksType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import SocialLinks from './SocialLinks'
import React from 'react'

export default {
  title: 'Molecules/SocialLinks',
  component: SocialLinks,
} as Meta<SocialLinksType>

const Template: Story<SocialLinksType> = (args) => <SocialLinks {...args} />

export const Default = Template.bind({})
export const SocialLinksData: SocialLinksType = {
  __typename: ComponentsTypeName.SOCIAL_LINKS,
  title: 'Help others who may be affected',
}

Default.args = SocialLinksData
