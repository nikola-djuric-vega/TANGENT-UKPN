import { Story, Meta } from '@storybook/react'
import CardList, { CardListProps } from './CardList'
import React from 'react'
import mockCardList from './CardList.mock'

export default {
  title: 'Molecules/CardList',
  component: CardList,
} as Meta<CardListProps>

const Template: Story<CardListProps> = (args) => <CardList {...args} />

export const Single = Template.bind({})
export const Multi = Template.bind({})

Single.args = {
  items: [mockCardList.items[0]],
}

Multi.args = mockCardList
