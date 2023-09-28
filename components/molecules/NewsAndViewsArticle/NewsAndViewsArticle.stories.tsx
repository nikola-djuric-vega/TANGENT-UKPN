import { Story, Meta } from '@storybook/react'
import React from 'react'

import NewsAndViewsArticle, {
  NewsAndViewsArticleProps,
} from './NewsAndViewsArticle'

export default {
  title: 'Molecules/NewsAndViewsArticle',
  component: NewsAndViewsArticle,
} as Meta<NewsAndViewsArticleProps>

const Template: Story<NewsAndViewsArticleProps> = (args) => (
  <NewsAndViewsArticle {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
