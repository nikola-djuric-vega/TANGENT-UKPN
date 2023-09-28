import FormHeader, { FormHeaderProps } from './FormHeader'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/FormHeader',
  component: FormHeader,
} as Meta

const Template: Story<FormHeaderProps> = (args) => {
  return <FormHeader {...args}></FormHeader>
}

export const Primary = Template.bind({})
Primary.args = {
  imageMobileUrl: 'images/g81/ukpn-logo-mobile.jpg',
  imageDesktopUrl: 'images/g81/ukpn-logo-desktop.jpg',
  title: 'Aplication form',
}
