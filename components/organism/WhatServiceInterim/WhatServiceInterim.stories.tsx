import { WhatServiceInterimType } from '_types/CMS/nodes/components/UKPN'
import WhatServiceInterimData from './mock-what-service-data'
import WhatServiceInterim from './WhatServiceInterim'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'organisms/WhatServiceInterim',
  component: WhatServiceInterim,
} as Meta<WhatServiceInterimType>

const Template: Story<WhatServiceInterimType> = (args) => (
  <WhatServiceInterim {...args} />
)

export const Default = Template.bind({})
Default.args = WhatServiceInterimData
