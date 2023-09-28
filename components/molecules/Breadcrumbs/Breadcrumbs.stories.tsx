import Breadcrumbs, { BreadcrumbsProps } from './Breadcrumbs'
import { Meta, Story } from '@storybook/react'
import { PageTypeNames } from '_types/CMS'
import React from 'react'

export default {
  title: 'molecules/Breadcrumbs',
  component: Breadcrumbs,
} as Meta

export const Default: Story<BreadcrumbsProps> = (args) => (
  <Breadcrumbs {...args} />
)
Default.args = {
  currentPage: 'Start application',
  trail: [
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
}
