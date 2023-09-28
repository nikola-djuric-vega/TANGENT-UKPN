import { Story, Meta } from '@storybook/react'
import { AuthorType } from '_types/CMS'
import Author from './Author'
import React from 'react'

export default {
  title: 'Atoms/Author',
  component: Author,
} as Meta<AuthorType>

const Template: Story<AuthorType> = (args) => <Author {...args} />

export const Primary = Template.bind({})
export const AuthorData: AuthorType = {
  authorName: 'Basil Scarsella',
  department: 'CEO of UK Power Networks',
  image: {
    url: 'https://picsum.photos/200',
    name: 'picsum',
  },
}
Primary.args = AuthorData
