import { InformationCardsData } from '_molecules/InformationCard/InformationCard.stories'
import { StormChecklistMockData } from '_molecules/StormChecklist/StormChecklistMockData'
import { StormPrepare, StormPrepareProps } from './StormPrepare'
import { Story, Meta } from '@storybook/react'
import { PageTypeNames } from '_types/CMS'
import React from 'react'

export default {
  title: 'containers/StormPrepare',
  component: StormPrepare,
  parameters: {},
} as Meta

const Template: Story<StormPrepareProps> = (args) => <StormPrepare {...args} />

export const SearchResultsMock = Template.bind({})

SearchResultsMock.args = {
  data: {
    __typename: PageTypeNames.STORM_PREPARE,
    stormChecklist: [StormChecklistMockData],
    stormPrepareBody:
      '<p>Our electricity network is built to be resilient but extreme weather can affect overhead power lines. We urge the public to stay well clear of power lines and anyone spotting a damaged power line needs to report it to us immediately.</p><p>We have additional staff on duty covering operational, technical and call centre roles. As always our priorities in these situations are public safety and restoring supplies to customers as quickly and safely as possible. We provide free extra help to people living in vulnerable circumstances, who are on our Priority Services Register. Find out more and apply.</p>',
    ...InformationCardsData,
    name: 'Storm prepare',
    contentTypeAlias: '',
    url: '/',
    id: '',
    ancestors: {
      items: [],
    },
  },
}
