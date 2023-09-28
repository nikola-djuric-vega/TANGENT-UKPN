import { SubNavigationType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import SubNavigation from './SubNavigation'
import React from 'react'

export default {
  title: 'Molecules/SubNavigation',
  component: SubNavigation,
} as Meta<SubNavigationType>

const Template: Story<SubNavigationType> = (args) => <SubNavigation {...args} />

export const Default = Template.bind({})
export const SubNavigationData: SubNavigationType = {
  __typename: ComponentsTypeName.SUB_NAVIGATION,
  subNavigationLinks: [
    {
      type: LinkType.EXTERNAL,
      url: 'http://google.com',
      name: 'google',
      target: '_self',
    },
  ],
}
Default.args = SubNavigationData
