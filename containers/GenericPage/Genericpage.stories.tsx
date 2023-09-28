import { T2MockData } from './mock-templates-data/t2-mock-data'
import { GenericPage, GenericPageProps } from './GenericPage'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'containers/GenericPage',
  component: GenericPage,
  parameters: {},
} as Meta

const Template: Story<GenericPageProps> = (args) => <GenericPage {...args} />
Template.parameters = {
  nextRouter: {
    path: '/profile/[id]',
    asPath: '/profile/ryanclementshax',
    query: {
      id: 'ryanclementshax',
    },
  },
}
export const T2LandingPage = Template.bind({})

T2LandingPage.args = { data: T2MockData }
