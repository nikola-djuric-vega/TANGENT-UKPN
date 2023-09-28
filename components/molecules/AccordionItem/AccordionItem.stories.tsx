import AccordionItem, { AccordionItemProps } from './AccordionItem'
import { ButtonColors, LinkAppearance, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/AccordionItem',
  component: AccordionItem,
} as Meta

const Template: Story<AccordionItemProps> = (args) => (
  <AccordionItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  accordionItem: {
    accordionItemTitle:
      'Highway Services Metered Connections Terms and Conditions',
    accordionDescription:
      '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
    accordionImage: {
      name: 'Linguine 1 1024X969',
      url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
      umbracoHeight: '900',
      umbracoWidth: '1600',
    },
    accordionImageOverlay: 'Image Overlay text',
    accordionImageOverlayIcon: IconNames.ICO_APPLY,
    accordionVideoID: 'y29Aa0Z41xo',
    accordionVideoPlayText: 'UKPN upgrade',
    accordionLinkItems: [
      {
        linkSetTitle: 'Document index November 2020',
        linkSetLinks: [
          {
            __typename: LinkAppearance.TERTIARY,
            uRL: {
              type: LinkType.EXTERNAL,
              url: 'http://google.com',
              name: 'Find out more',
            },
            cTAType: ButtonColors.LIGHT,
          },
        ],
      },
    ],
  },
}
