import { DangerousSituationType } from '_types/CMS/nodes/components/UKPN'
import DangerousSituation from './DangerousSituation'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/DangerousSituation',
  component: DangerousSituation,
} as Meta<DangerousSituationType>

const Template: Story<DangerousSituationType> = (args) => (
  <DangerousSituation {...args} />
)

export const Default = Template.bind({})
export const DangerousSituationData: DangerousSituationType = {
  __typename: ComponentsTypeName.DANGEROUS_SITUATION,
  dangerousSituationTitle: "Do you think you're in a dangerous situation?",
  dangerousSituationDescription:
    '<p>A dangerous situation could be an electricity cable hanging low, an exposed electricity cable in the ground, equipment that is sparking or on fire. It could be anything else that you consider dangerous.</p>',
  dangerousSituationImages: [
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/dotfau1y/danger1x3.jpeg',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/dotfau1y/danger1x3.jpeg',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/dotfau1y/danger1x3.jpeg',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
  ],
  dangerousSituationPrimaryButtonText: "No, it's not dangerous",
  dangerousSituationSecondaryButtonText: "Yes, it's dangerous",
  dangerousInformationTitle: 'Please report this immediately',
  callBoxDescription:
    '<p>Please treat electricity cables as live, stay away and call us immediately 24 hours a day on</p>',
  callBoxTitle: 'Call',
  emergencyBoxDescription:
    '<p>If you see electricity lines that are down or causing significant risk to the public please call</p>',
  emergencyBoxTitle: 'Emergency',
  dangerousInformationHelpText: '',
  setShowForm: () => {},
}
Default.args = DangerousSituationData
