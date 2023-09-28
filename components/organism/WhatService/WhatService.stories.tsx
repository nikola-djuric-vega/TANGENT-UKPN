import { WhatServiceType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS/base'
import { Story, Meta } from '@storybook/react'
import WhatService from './WhatService'
import { LinkType } from '_types/CMS'
import React from 'react'

export default {
  title: 'organisms/WhatService',
  component: WhatService,
} as Meta<WhatServiceType>

const Template: Story<WhatServiceType> = (args) => <WhatService {...args} />

export const Default = Template.bind({})
export const WhatServiceData: WhatServiceType = {
  __typename: ComponentsTypeName.WHAT_SERVICE,
  powerCutBox: [
    {
      registerForTextUpdatesText: 'Register for free text message updates',
      viewPowerCutMapButtonText: 'View power cut map',
      registerForTextUpdatesLink: {
        type: LinkType.CONTENT,
        name: 'test',
        url: '/',
      },
      title: 'Power off?',
      header: 'Enter your postcode to search, track and report power cuts.',
      phoneNumberHeader: 'or call us free 24 hrs a day on',
      phoneNumber: '0800 31 63 105',
      powerCutMapLink: {
        type: LinkType.CONTENT,
        name: 'Map',
        url: '/ukpn/power-cut/map/',
      },
      powerCutImage: {
        name: 'Power cut? Call 105',
        url: 'https://media.umbraco.io/dev-uk-power-networks/q5mohwfd/105-logo.png',
      },
    },
  ],
  moduleServiceTitle: 'What do you need?',
  moduleTitle: 'What do you need?',
  moduleCopyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  whatServiceItems: [
    {
      title: 'Install something new',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      copyText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique. Elementum nisi quis eleifend quam adipiscing. Adipiscing commodo elit at imperdiet. Commodo viverra maecenas accumsan lacus vel. At tellus at urna condimentum mattis pellentesque id. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Facilisi cras fermentum odio eu feugiat pretium nibh. Id velit ut tortor pretium viverra. Vel quam elementum pulvinar etiam. Non tellus orci ac auctor augue mauris augue. Elit pellentesque habitant morbi tristique senectus. Facilisi nullam vehicula ipsum a arcu cursus. Diam donec adipiscing tristique risus nec.',
      linkText: 'Install something new',
      whatServiceItemLinks: [
        {
          url: 'https://loremipsum.io/generator/?n=1&t=p',
          type: LinkType.CONTENT,
          name: 'Link Install something new',
        },
      ],
    },
    {
      linkText: 'Change an existing supply',
      whatServiceItemLinks: [
        {
          url: 'https://loremipsum.io/generator/?n=1&t=p',
          type: LinkType.CONTENT,
          name: 'Link one Change an existing supply',
        },
        {
          url: 'https://loremipsum.io/generator/?n=1&t=p',
          type: LinkType.CONTENT,
          name: 'Link one Change an existing supply',
        },
        {
          url: 'https://loremipsum.io/generator/?n=1&t=p',
          type: LinkType.CONTENT,
          name: 'Link one Change an existing supply',
        },
        {
          url: 'https://loremipsum.io/generator/?n=1&t=p',
          type: LinkType.CONTENT,
          name: 'Link one Change an existing supply',
        },
      ],
    },
    {
      title: 'Safety around power lines',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      copyText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique. Elementum nisi quis eleifend quam adipiscing. Adipiscing commodo elit at imperdiet. Commodo viverra maecenas accumsan lacus vel. At tellus at urna condimentum mattis pellentesque id. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Facilisi cras fermentum odio eu feugiat pretium nibh. Id velit ut tortor pretium viverra. Vel quam elementum pulvinar etiam. Non tellus orci ac auctor augue mauris augue. Elit pellentesque habitant morbi tristique senectus. Facilisi nullam vehicula ipsum a arcu cursus. Diam donec adipiscing tristique risus nec.',
      linkText: 'Safety around power lines',
      whatServiceItemLinks: [
        {
          url: 'https://loremipsum.io/generator/?n=1&t=p',
          type: LinkType.CONTENT,
          name: 'Link one Safety around power lines',
        },
      ],
    },
    {
      title: 'Safety around substations',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      copyText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique. Elementum nisi quis eleifend quam adipiscing. Adipiscing commodo elit at imperdiet. Commodo viverra maecenas accumsan lacus vel. At tellus at urna condimentum mattis pellentesque id. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Facilisi cras fermentum odio eu feugiat pretium nibh. Id velit ut tortor pretium viverra. Vel quam elementum pulvinar etiam. Non tellus orci ac auctor augue mauris augue. Elit pellentesque habitant morbi tristique senectus. Facilisi nullam vehicula ipsum a arcu cursus. Diam donec adipiscing tristique risus nec.',
      linkText: 'Safety around substations',
      whatServiceItemLinks: [
        {
          url: 'https://loremipsum.io/generator/?n=1&t=p',
          type: LinkType.CONTENT,
          name: 'Link one Safety around substations',
        },
      ],
    },
  ],
  removeBottomMargin: false,
}

Default.args = WhatServiceData
