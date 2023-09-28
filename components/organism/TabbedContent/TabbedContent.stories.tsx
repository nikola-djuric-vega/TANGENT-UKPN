import { TabbedContentType } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import TabbedContent from './TabbedContent'
import { IconNames } from '_types/local'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Organisms/TabbedContent',
  component: TabbedContent,
} as Meta<TabbedContentType>

const Template: Story<TabbedContentType> = (args) => <TabbedContent {...args} />

export const Default = Template.bind({})
export const TabbedContentData: TabbedContentType = {
  __typename: ComponentsTypeName.TABBED_CONTENT,
  moduleTitle: 'Module Title',
  tabbedContentItems: [
    {
      title: 'Safety animations and videos',
      titleIcon: IconNames.ICON_ADVICE_TWO,
      rightTitle:
        'Priority service register (PSR) ​​​Our free service for people in need',
      rightText:
        '<p>Do you, or someone you know need extra support during a power cut? The PSR is a free service that provides extra support during a power cut to those that need it.</p>',
      backgroundIcon: IconNames.ICON_ADVICE_TWO,
      videoID: 'C_ivGeuPXgc',
      videoText: 'Watch our video to find out how to install a connection',
    },
    {
      title: 'Safety leafelet and downloads',
      titleIcon: IconNames.ICON_DOWNLOAD,
      rightTitle:
        'Priority service register (PSR) ​​​Our free service for people in need',
      rightText:
        '<p>Do you, or someone you know need extra support during a power cut? The PSR is a free service that provides extra support during a power cut to those that need it.</p>',
      rightMobileImage: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/5ood5tnl/mother-and-baby.png',
        name: 'Mother And Baby',
      },
      rightTabletImage: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/szboi3lh/mother-and-baby-2x.png',
        name: 'Mother And Baby@2X',
      },
      rightDesktopImage: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/g30jkxoe/mother-and-baby-3x.png',
        name: 'Mother And Baby@3X',
      },
      backgroundIcon: IconNames.ICON_DOWNLOAD,
      videoID: 'C_ivGeuPXgc',
      videoText: 'Watch our video to find out how to install a connection',
      buttons: [
        {
          __typename: LinkAppearance.DOWNLOAD,
          uRL: {
            type: LinkType.EXTERNAL,
            name: 'google',
            url: 'http://google.com',
          },
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
    {
      title: 'Become a Pledge Partner',
      titleIcon: IconNames.ICON_SPECIALIST_TEAM,
      rightTitle:
        'Title goes here and this is what it looks like when it goes over two lines with the donload links',
      rightText:
        '<p>Do you, or someone you know need extra support during a power cut? The PSR is a free service that provides extra support during a power cut to those that need it.</p>',
      backgroundIcon: IconNames.ICON_SPECIALIST_TEAM,
      // videoID: 'C_ivGeuPXgc',
      // videoText: 'Watch our video to find out how to install a connection',
      buttons: [
        {
          __typename: LinkAppearance.DOWNLOAD,
          uRL: {
            type: LinkType.EXTERNAL,
            name: 'google',
            url: 'http://google.com',
          },
          cTAType: ButtonColors.LIGHT,
        },
        {
          __typename: LinkAppearance.DOWNLOAD,
          uRL: {
            type: LinkType.EXTERNAL,
            name: 'google',
            url: 'http://google.com',
          },
          cTAType: ButtonColors.LIGHT,
        },
        {
          __typename: LinkAppearance.DOWNLOAD,
          uRL: {
            type: LinkType.EXTERNAL,
            name: 'google',
            url: 'http://google.com',
          },
          cTAType: ButtonColors.LIGHT,
        },
        {
          __typename: LinkAppearance.DOWNLOAD,
          uRL: {
            type: LinkType.EXTERNAL,
            name: 'google',
            url: 'http://google.com',
          },
          cTAType: ButtonColors.LIGHT,
        },
        {
          __typename: LinkAppearance.DOWNLOAD,
          uRL: {
            type: LinkType.EXTERNAL,
            name: 'google',
            url: 'http://google.com',
          },
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
  ],
}
Default.args = TabbedContentData
