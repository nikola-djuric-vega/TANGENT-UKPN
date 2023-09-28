import {
  InformationCardColour,
  InformationCardType,
} from '_types/CMS/nodes/components/UKPN'
import InformationCard from './InformationCard'
import { Story, Meta } from '@storybook/react'
import React from 'react'
import { IconNames } from '_types/local'

export default {
  title: 'Molecules/InformationCard',
  component: InformationCard,
} as Meta<InformationCardType>

const Template: Story<InformationCardType> = (args) => (
  <InformationCard {...args} />
)

export const Default = Template.bind({})
export const InformationCardsData: InformationCardType = {
  informationCardTitle: 'Are you in a dangerous situation?',
  informationCardColour: InformationCardColour.PURPLE,
  informationCardIcon: IconNames.WARNING_ICON,
  informationCardText:
    '<p>Please treat electricity cables as live, stay away and call us immediately 0800 31 63 105 or 105 (Free to call from a landline or a mobile phone). If you see electricity lines down or causing significant risk to the public please call 999.</p>',
}
Default.args = InformationCardsData
