import WhatServiceInterimData from '_organism/WhatServiceInterim/mock-what-service-data'
import { WhatServiceInterimPanelType } from '_types/CMS/nodes/components/UKPN'
import WhatServiceInterimPanel from './WhatServiceInterimPanel'
import { ComponentsTypeName } from '_types/CMS/base'
import { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'

export default {
  title: 'Molecules/WhatServiceInterimPanel',
  component: WhatServiceInterimPanel,
} as Meta<WhatServiceInterimPanelType>

const Template: Story<WhatServiceInterimPanelType> = (args) => {
  return <WhatServiceInterimPanel {...args} />
}

export const Default = Template.bind({})

Default.args = (WhatServiceInterimData.tabs as WhatServiceInterimPanelType[])[0]
