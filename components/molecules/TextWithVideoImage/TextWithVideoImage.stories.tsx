import { Story, Meta } from '@storybook/react'
import Intro from './TextWithVideoImage'
import { IconNames } from '_types/local'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

import {
  TextWithVideoImageType,
  MediaPlacement,
} from '_types/CMS/nodes/components/UKPN'

export default {
  title: 'Molecules/TextWithVideoImage',
  component: Intro,
} as Meta<TextWithVideoImageType>

const Template: Story<TextWithVideoImageType> = (args) => <Intro {...args} />

export const Default = Template.bind({})
export const TextWithVideoImageData: TextWithVideoImageType = {
  __typename: ComponentsTypeName.TEXT_WITH_VIDEO_IMAGE,
  heading: '<p>Basil Scarsella, Chief Executive Officer, UK Power Networks</p>',
  mainText:
    '<p>Basil has more than 20 years’ experience managing energy networks and has overseen our industry-leading performance since joining the company in 2011.</p><p>Between 2005 and 2011, Basil was the CEO of Northern Gas Networks: the company responsible for distributing gas to 2.5 million homes in the north east of England. From 1998 Basil was the CEO of ETSA Utilities, a privatised electricity distribution business in Australia.&nbsp; Between 1994 and 1998 he was General Manager of ETSA Power Corporation, responsible for electricity distribution, retailing, field services and customer services.&nbsp;</p><p>Basil holds a degree in Economics from the University of Adelaide and is a Fellow Certified Practicing Accountant.&nbsp; Basil received the Australian Sports Medal in 2000 and in 2003 became a Member of the Order of Australia (AM), for services to sport.</p>',
  image: {
    // portrait image
    url: 'https://media.umbraco.io/dev-uk-power-networks/mnpfzkwy/basilscarsella.png',
    // landscape image
    // url: 'https://media.umbraco.io/dev-uk-power-networks/qcfnwkxa/ukpn.png',
    umbracoHeight: '300',
    umbracoWidth: '300',
    name: 'Basilscarsella',
  },
  video: '4Ur8Gce8FYg',
  imageStyle: 'small',
  imageOverlayText: 'Image Overlay text',
  imageOverlayIcon: IconNames.ICON_MAINTENANCE,
  imageOverlayLink: {
    url: 'http://google.com',
    name: 'google',
    type: LinkType.EXTERNAL,
  },
  mediaPlacement: MediaPlacement.RIGHT,
  cTAs: [
    {
      __typename: LinkAppearance.PRIMARY,
      uRL: {
        url: 'http://google.com',
        name: 'google',
        type: LinkType.EXTERNAL,
      },
      cTAType: ButtonColors.LIGHT,
    },
    {
      __typename: LinkAppearance.SECONDARY,
      uRL: {
        url: 'http://google.com',
        name: 'google',
        type: LinkType.EXTERNAL,
      },
      cTAType: ButtonColors.DARK,
    },
  ],
  warningMessage: 'Warning message',
}
Default.args = TextWithVideoImageData
