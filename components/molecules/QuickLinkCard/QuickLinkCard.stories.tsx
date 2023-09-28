import { Story, Meta } from '@storybook/react'
import QuickLinkCard from './QuickLinkCard'
import React from 'react'
import mockQuickLinkCard from './QuickLinkCard.mock'
import { QuickLinkCardType } from '_types/CMS/nodes/components/UKPN'

export default {
  title: 'Molecules/QuickLinkCard',
  component: QuickLinkCard,
} as Meta<QuickLinkCardType>

const Template: Story<QuickLinkCardType> = (args) => <QuickLinkCard {...args} />

export const Default = Template.bind({})

Default.args = mockQuickLinkCard
