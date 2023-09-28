import { WhatServiceItem } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS/base'
import WhatServicePanel from './WhatServicePanel'
import { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'
import { LinkType } from '_types/CMS'

export default {
  title: 'Molecules/WhatServicePanel',
  component: WhatServicePanel,
} as Meta<WhatServiceItem>

const Template: Story<WhatServiceItem> = (args) => {
  const [panelNumber, setPanel] = useState<number | null>(null)
  return <WhatServicePanel {...args} backClick={() => setPanel(2)} />
}

export const Default = Template.bind({})
Default.args = {
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
}
