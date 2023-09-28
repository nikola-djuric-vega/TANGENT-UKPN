import {
  AccordionType,
  CategoryItemTitle,
} from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import Accordion from './Accordion'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'organisms/Accordion',
  component: Accordion,
} as Meta

const Template: Story<AccordionType> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
export const WithNoCategories = Template.bind({})

export const AccordionData: AccordionType = {
  __typename: ComponentsTypeName.ACCORDION,
  accordionTitle: 'Useful information',
  accordionEnableAlwaysOpen: false,
  accordionItems: [
    {
      categories: [
        { name: CategoryItemTitle.YOUR_PROPERTY, icon: IconNames.PROPERTY },
        {
          name: CategoryItemTitle.TEXT_UPDATES,
          icon: IconNames.TEXT_UPDATES,
        },
      ],
      accordionItemTitle: 'Extra support category',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.BOOKMARK,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'Video play text',
      accordionLinkItems: [
        {
          linkSetTitle: 'Document index December 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
        {
          linkSetTitle: 'Document index December 2021',
          linkSetLinks: [
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
      ],
    },
    {
      categories: [
        {
          name: CategoryItemTitle.EXTRA_SUPPORT,
          icon: IconNames.ICON_HELPING_HAND,
        },
        {
          name: CategoryItemTitle.PLANNED_POWER_CUTS,
          icon: IconNames.PLANNED_PC,
        },
      ],
      accordionItemTitle: 'Extra support category and planned power cuts',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.ICON_APPLY,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'Play',
      accordionLinkItems: [
        {
          linkSetTitle: 'Document index November 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
        {
          linkSetTitle: 'Document index December 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.TERTIARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
        {
          linkSetLinks: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.TERTIARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
      ],
    },
    {
      categories: [
        {
          name: CategoryItemTitle.EXTRA_SUPPORT,
          icon: IconNames.ICON_HELPING_HAND,
        },
        { name: CategoryItemTitle.YOUR_PROPERTY, icon: IconNames.PROPERTY },
      ],
      accordionItemTitle: 'Text updates category',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.ICON_APPLY,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'View more',
    },
    {
      categories: [
        {
          name: CategoryItemTitle.TEXT_UPDATES,
          icon: IconNames.TEXT_UPDATES,
        },
        {
          name: CategoryItemTitle.YOUR_PROPERTY,
          icon: IconNames.PROPERTY,
        },
      ],
      accordionItemTitle: 'Your property category',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.ICON_APPLY,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'Video CTA',
      accordionLinkItems: [
        {
          linkSetTitle: 'Document index November 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.TERTIARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
      ],
    },
  ],
}

export const AccordionWithoutCategoriesData: AccordionType = {
  __typename: ComponentsTypeName.ACCORDION,
  accordionTitle: 'Accordion title',
  accordionEnableAlwaysOpen: true,
  accordionItems: [
    {
      categories: [],
      accordionItemTitle: 'Extra support category',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.BOOKMARK,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'Video play text',
      accordionLinkItems: [
        {
          linkSetTitle: 'Document index December 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
        {
          linkSetTitle: 'Document index December 2021',
          linkSetLinks: [
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
      ],
    },
    {
      categories: [],
      accordionItemTitle: 'Extra support category and planned power cuts',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.ICON_APPLY,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'Play',
      accordionLinkItems: [
        {
          linkSetTitle: 'Document index November 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
        {
          linkSetTitle: 'Document index December 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.TERTIARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
        {
          linkSetLinks: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.TERTIARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
      ],
    },
    {
      categories: [],
      accordionItemTitle: 'Text updates category',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.ICON_APPLY,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'View more',
    },
    {
      categories: [],
      accordionItemTitle: 'Your property category',
      accordionDescription:
        '<p>Preparations to consider before a power cut:</p>\n<ul>\n<li>Keep a torch in  a place where you can reach it easily.</li>\n<li>Switch off appliances and lights, but leave one light on so you know when power has been restored.</li>\n<li>It’s especially important to keep warm if the weather is cold. Dress warmly in several layers and have a hat, gloves and a blanket to hand. You can also reduce heat loss by closing doors on unused rooms and by closing curtains.</li>\n<li>Cordless phones don’t work in a power cut. Phones with a cord will usually work in a power cut so either keep one always plugged in or have one you can plug-in in the event of a power cut. If you use a mobile phone keep a mobile phone ‘power bank’ charged-up so you can recharge your mobile phone during the power cut.</li>\n<li>Power cuts will also affect things like stair lifts, bath hoists and adjustable beds. Make sure that any essential medical equipment has a battery back-up. This means you can keep using it, even if the power is out. If you have a stair lift, check it has a manual release handle, you can use this to return the lift to the ground floor if you have a power cut.</li>\n<li>If you have electric gates or garage doors, please check how to manually open and close them.</li>\n</ul>',
      accordionImage: {
        name: 'Linguine 1 1024X969',
        url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
        umbracoHeight: '900',
        umbracoWidth: '1600',
      },
      accordionImageOverlay: 'Image Overlay text',
      accordionImageOverlayIcon: IconNames.ICON_APPLY,
      accordionVideoID: 'y29Aa0Z41xo',
      accordionVideoPlayText: 'Video CTA',
      accordionLinkItems: [
        {
          linkSetTitle: 'Document index November 2020',
          linkSetLinks: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.SECONDARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.TERTIARY,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
            {
              __typename: LinkAppearance.DOWNLOAD,
              uRL: {
                type: LinkType.EXTERNAL,
                url: 'http://google.com',
                name: 'Find out more',
              },
              cTAType: ButtonColors.DARK,
            },
          ],
        },
      ],
    },
  ],
  viewMore: {
    url: 'http://google.com',
    name: 'View more',
    type: LinkType.CONTENT,
  },
}
Default.args = AccordionData
WithNoCategories.args = AccordionWithoutCategoriesData
