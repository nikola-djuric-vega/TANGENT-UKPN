import CardButton, { CardButtonProps } from './CardButton'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import { LinkType } from '_types/CMS'
import React from 'react'

export default {
  title: 'Atoms/CardButton',
  component: CardButton,
} as Meta<CardButtonProps>

const Template: Story<CardButtonProps> = (args) => <CardButton {...args} />

export const Primary = Template.bind({})
export const CardButtonData: CardButtonProps = {
  icon: IconNames.ICON_PERSON,

  link: {
    type: LinkType.CONTENT,
    name: 'Investor relations',
    udi: 'umb://document/01a181d672954cb09511eac48fff609a',
    url: '/ukpn/about-us/investor-relations/',
    __typename: 'Link',
  },
}
Primary.args = CardButtonData
