import RotaLoadDisconnectionsPopUp, {
  RotaLoadDisconnectionsPopUpProps,
} from './RotaLoadDisconnectionsPopUp'
import { Story, Meta } from '@storybook/react'
import React from 'react'
import { GlobalChildrenItemsName, PowerSharingData } from '_types/CMS/nodes'
import { ButtonColors, LinkAppearance, LinkType } from '_types/CMS'

export default {
  title: 'Atoms/RotaLoadDisconnectionsPopUp',
  component: RotaLoadDisconnectionsPopUp,
} as Meta

const mockData: PowerSharingData = {
  powerSharingEnabled: false,
  powerSharingPopUpButtons: [
    {
      cTAType: ButtonColors.LIGHT,
      uRL: {
        type: LinkType.EXTERNAL,
        name: 'Check my schedule',
        url: 'https://mcrs-uat-rld.tangentlabs.co.uk/',
        __typename: 'Link',
      },
      __typename: LinkAppearance.PRIMARY,
    },
    {
      cTAType: ButtonColors.LIGHT,
      uRL: {
        type: LinkType.EXTERNAL,
        name: 'Return to homepage',
        url: 'https://www.ukpowernetworks.co.uk',
        __typename: 'Link',
      },
      __typename: LinkAppearance.SECONDARY,
    },
  ],
  powerSharingPopUpIcon: 'icon_calendar',
  powerSharingPopUpMessage:
    '<p>If you’re a UKPN customer you may experience, or already be experiencing regular power cuts which are part of a scheduled plan. Please check the schedule for your area to see if or when you’ll be affected.</p>',
  powerSharingPopUpTitle: 'Power Sharing',
  __typename: GlobalChildrenItemsName.POWERSHARING,
}

const Template: Story<RotaLoadDisconnectionsPopUpProps> = (args) => (
  <RotaLoadDisconnectionsPopUp {...args} />
)

export const Default = Template.bind({})
Default.args = { data: mockData }
