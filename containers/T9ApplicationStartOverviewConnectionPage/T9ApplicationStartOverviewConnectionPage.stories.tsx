import { Story, Meta } from '@storybook/react'
import { PageTypeNames } from '_types/CMS'
import React from 'react'

import {
  T9ApplicationStartOverviewConnectionPageProps,
  T9ApplicationStartOverviewConnectionPage,
} from './T9ApplicationStartOverviewConnectionPage'

export default {
  title: 'containers/T9ApplicationStartOverviewConnectionPage',
  component: T9ApplicationStartOverviewConnectionPage,
  parameters: {},
} as Meta

const Template: Story<T9ApplicationStartOverviewConnectionPageProps> = (
  args
) => <T9ApplicationStartOverviewConnectionPage {...args} />
Template.parameters = {
  nextRouter: {
    path: '/profile/[id]',
    asPath: '/profile/ryanclementshax',
    query: {
      id: 'ryanclementshax',
    },
  },
}

export const T9ApplicationStartOverview = Template.bind({})
T9ApplicationStartOverview.args = {
  data: {
    __typename: PageTypeNames.T9_APPLICATION_START_OVERVIEW,
    name: 'T2LandingPage story',
    id: 'yureyrue',
    contentTypeAlias: '',
    url: '',
    breadcrumb: 'breadcrumb',
    ancestors: {
      items: [
        {
          id: '',
          __typename: PageTypeNames.FOLDER,
          name: 'Electricity',
        },
        {
          id: '',
          __typename: PageTypeNames.GENERIC_PAGE,
          name: 'Move',
          url: '/',
        },
      ],
    },
    components: [],
  },
}
