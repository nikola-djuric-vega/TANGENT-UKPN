import { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'
import RadioButton from './RadioButton'

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as Meta

const Template: Story = (args) => {
  const [option, setOption] = useState('')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <RadioButton {...args[0]} setOption={setOption}></RadioButton>
      <RadioButton {...args[1]} setOption={setOption}></RadioButton>
    </div>
  )
}

export const ButtonSelect = Template.bind({})
ButtonSelect.args = [
  { hasError: false, value: 'Yes', id: 'test1', name: 'option' },
  { hasError: false, value: 'No', id: 'test2', name: 'option' },
]
