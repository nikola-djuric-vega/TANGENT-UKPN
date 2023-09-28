import { StormSummaryType } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import StormSummary from './StormSummary'
import React from 'react'

export default {
  title: 'Molecules/StormSummary',
  component: StormSummary,
} as Meta<StormSummaryType>

const Template: Story<StormSummaryType> = (args) => <StormSummary {...args} />

export const Default = Template.bind({})
export const StormSummaryData: StormSummaryType = {
  title: 'Summary',
  description:
    '<p>We have restored power to 277,000 properties. Numbers will change and there are currently 54,700 properties without power accross the East of England and <bold>113,400</bold> accross the South East including:</p>',
  summaryData: [
    {
      region: { name: 'East of England' },
      countyData: [
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
      ],
    },
    {
      region: { name: 'South East of England' },
      countyData: [
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
      ],
    },
    {
      region: { name: 'South East of England' },
      countyData: [
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
        {
          customersAffected: '18000',
          county: {
            name: 'Bedfordshire',
          },
        },
      ],
    },
  ],
}

Default.args = StormSummaryData
