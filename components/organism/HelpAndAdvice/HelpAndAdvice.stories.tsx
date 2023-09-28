import { HelpAndAdviceType } from '_types/CMS/nodes/components/UKPN'
import HelpAndAdvice, { HelpAndAdviceProps } from './HelpAndAdvice'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'organisms/HelpAndAdvice',
  component: HelpAndAdvice,
} as Meta

const Template: Story<HelpAndAdviceProps> = (args) => (
  <HelpAndAdvice {...args} />
)

export const Default = Template.bind({})
export const HelpAndAdviceData: HelpAndAdviceType = {
  __typename: ComponentsTypeName.HELP_AND_ADVICE,
  helpAndAdviceTitle: 'Useful information',
  helpAndAdviceEnableAlwaysOpen: true,
  helpAndAdviceItems: [
    {
      helpAndAdviceItemTitle: 'Our Schedule of Rates?',
      helpAndAdviceTitleIcon: IconNames.ICON_APPLY,
      helpAndAdviceDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      helpAndAdviceImage: {
        name: 'Linguine 1 1024X969',
        umbracoFile: {
          url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        },
      },
      helpAndAdviceImageOverlay: 'Image Overlay text',
      helpAndAdviceImageOverlayIcon: IconNames.ICON_APPLY,
      helpAndAdviceVideo: 'y29Aa0Z41xo',
      helpAndAdviceVideoPlayText:
        'Watch video to find out how to install a new connection',
    },

    {
      helpAndAdviceItemTitle: 'Our Schedule of Rates?',
      helpAndAdviceTitleIcon: IconNames.ICON_APPLY,
      helpAndAdviceDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      helpAndAdviceImage: {
        name: 'Linguine 1 1024X969',
        umbracoFile: {
          url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        },
      },
      helpAndAdviceImageOverlay: 'Image Overlay text',
      helpAndAdviceImageOverlayIcon: IconNames.ICON_APPLY,
      helpAndAdviceVideo: 'y29Aa0Z41xo',
      helpAndAdviceVideoPlayText: 'Video play text',
    },
    {
      helpAndAdviceItemTitle: 'Our Schedule of Rates?',
      helpAndAdviceTitleIcon: IconNames.ICON_APPLY,
      helpAndAdviceDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      helpAndAdviceImage: {
        name: 'Linguine 1 1024X969',
        umbracoFile: {
          url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        },
      },
      helpAndAdviceImageOverlay: 'Image Overlay text',
      helpAndAdviceImageOverlayIcon: IconNames.ICON_APPLY,
      helpAndAdviceVideo: 'y29Aa0Z41xo',
      helpAndAdviceVideoPlayText: 'Video play text',
    },
  ],
}
Default.args = HelpAndAdviceData
