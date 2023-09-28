import { Story, Meta } from '@storybook/react'
import ReCaptcha from './ReCaptcha'
import React from 'react'

export default {
  title: 'Atoms/ReCaptcha',
  component: ReCaptcha,
} as Meta

const Template: Story<{ onResult: (result: any) => void }> = (args) => (
  <ReCaptcha {...args}>
    <div>test</div>
  </ReCaptcha>
)

export const Primary = Template.bind({})
Primary.args = {}
