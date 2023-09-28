import { SearchResultsMockData } from './mock-templates-data/search-results-mock-data'
import { SearchResults, SearchResultsPageProps } from './SearchResults'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'containers/SearchResults',
  component: SearchResults,
  parameters: {},
} as Meta

const Template: Story<SearchResultsPageProps> = (args) => (
  <SearchResults {...args} />
)
Template.parameters = {
  nextRouter: {
    path: '/profile/[id]',
    asPath: '/profile/ryanclementshax',
    query: {
      id: 'ryanclementshax',
    },
  },
}
export const SearchResultsMock = Template.bind({})

SearchResultsMock.args = { data: SearchResultsMockData }
