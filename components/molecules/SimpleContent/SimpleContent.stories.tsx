import { SimpleContentType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import SimpleContent from './SimpleContent'
import React from 'react'

export default {
  title: 'Molecules/SimpleContent',
  component: SimpleContent,
} as Meta<SimpleContentType>

const Template: Story<SimpleContentType> = (args) => <SimpleContent {...args} />

export const Default = Template.bind({})
export const SimpleContentData: SimpleContentType = {
  __typename: ComponentsTypeName.SIMPLE_CONTENT,
  text: '<p>Hello World</p>',
}
Default.args = SimpleContentData
