import { IsPowerOffCTAType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import IsPowerOffCta from './IsPowerOffCta'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/IsPowerOffCta',
  component: IsPowerOffCta,
} as Meta<IsPowerOffCTAType>

const Template: Story<IsPowerOffCTAType> = (args) => <IsPowerOffCta {...args} />

export const Default = Template.bind({})
export const IsPowerOffCTAData: IsPowerOffCTAType = {
  __typename: ComponentsTypeName.IS_POWER_OFF_CTA,
  title: 'Is your power off?',
  icon: IconNames.ICO_POWER_CUT,
  body: '<p>Fill in this simple form to let us know.</p>',
  link: {
    name: 'Report power cut',
    type: LinkType.EXTERNAL,
    url: 'http://google.com',
  },
}
Default.args = IsPowerOffCTAData
