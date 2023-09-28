import { NavigationIconType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS/base'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import { LinkType } from '_types/CMS'
import NavIcons from './NavIcons'
import React from 'react'

export default {
  title: 'Molecules/NavIcons',
  component: NavIcons,
} as Meta<NavigationIconType>

const Template: Story<NavigationIconType> = (args) => <NavIcons {...args} />

export const Default = Template.bind({})
export const NavIconsData: NavigationIconType = {
  __typename: ComponentsTypeName.NAVIGATION_ICON,
  title: 'Typically customers need this when:',
  items: [
    {
      title: 'A priority number',
      icon: IconNames.ICON_EXTENSION,
    },
    {
      title: 'A priority number',
      subtitle: 'that you can call 24 hours a day',
      icon: IconNames.ICON_CONNECTED_POWER,
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'View more',
      },
    },
    {
      title: 'A priority number',
      subtitle: 'that you can call 24 hours a day',
      icon: IconNames.ICON_CHIMNEY,
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'View more',
      },
    },
  ],
}
Default.args = NavIconsData
