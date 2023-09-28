import { NewsAndViews as NewsAndViewsType } from '_types/CMS/nodes/components/UKPN'
import { mockNewsAndViewsData } from './mock-newsandviews-data'
import { Story, Meta } from '@storybook/react'
import NewsAndViews from './NewsAndViews'
import React from 'react'

export default {
  title: 'organisms/NewsAndViews',
  component: NewsAndViews,
} as Meta

const Template: Story<NewsAndViewsType> = (args) => <NewsAndViews {...args} />

export const Default = Template.bind({})
Default.args = {
  featuredArticle: mockNewsAndViewsData[4],
  title: 'Latest news ',
}
