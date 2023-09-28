import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import TextBoxWithCTA from './TextBoxWithCTA'
import { IconNames } from '_types/local'
import {
  BackgroundColours,
  TextBoxWithCTAType,
} from '_types/CMS/nodes/components/UKPN'

export default {
  title: 'Molecules/TextBoxWithCTA',
  component: TextBoxWithCTA,
} as Meta

const Template: Story<TextBoxWithCTAType> = (args) => (
  <TextBoxWithCTA {...args} />
)

export const Default = Template.bind({})
export const WithWhiteBG = Template.bind({})
export const TextBoxWithCTAData: TextBoxWithCTAType = {
  __typename: ComponentsTypeName.TEXT_BOX_WITH_CTA,
  leftTitle: 'DER Owners and Operators',
  leftText:
    '<p> left text Register for access to our outage planning application Network Vision to view Extra High Voltage (EHV) outages affecting your site. It’s vital, for all voltage levels, that we have the correct operational contact information for your site. You can view and amend your Site Responsibility Schedule (SRS) so we can inform you of planned works that could impact your sites operation.</p><p>Register for access to our outage planning application Network Vision to view Extra High Voltage (EHV) outages affecting your site. It’s vital, for all voltage levels, that we have the correct operational contact information for your site. You can view and amend your Site Responsibility Schedule (SRS) so we can inform you of planned works that could impact your sites operation.</p>',
  leftIcon: IconNames.FORTY_PX_LOCATION,
  leftButtonLink: {
    url: 'http://google.com',
    name: 'Find out more',
    type: LinkType.EXTERNAL,
  },
  leftBackgroundColour: BackgroundColours.OCEAN_BLUE,

  rightTitle: 'The Embedded Capacity Register',
  rightText:
    '<p> right text The Embedded Capacity Register (ECR) has replaced the System-Wide Resource Register (SWRR). The Register provides information on Distributed Energy Resources and network requirements.</p><p>The Embedded Capacity Register (ECR) has replaced the System-Wide Resource Register (SWRR). The Register provides information on Distributed Energy Resources and network requirements.</p>',
  rightIcon: IconNames.FORTY_PX_LOCATION,
  rightButtonLink: {
    url: 'http://google.co.uk',
    name: 'View more',
    type: LinkType.EXTERNAL,
  },
  rightBackgroundColour: BackgroundColours.MIDNIGHT_BLUE,
}
export const TextBoxWithCTADataWithWhiteBG: TextBoxWithCTAType = {
  __typename: ComponentsTypeName.TEXT_BOX_WITH_CTA,
  leftTitle: 'DER Owners and Operators',
  leftText:
    '<p>Register for access to our outage planning application Network Vision to view Extra High Voltage (EHV) outages affecting your site. It’s vital, for all voltage levels, that we have the correct operational contact information for your site. You can view and amend your Site Responsibility Schedule (SRS) so we can inform you of planned works that could impact your sites operation.</p><p>Register for access to our outage planning application Network Vision to view Extra High Voltage (EHV) outages affecting your site. It’s vital, for all voltage levels, that we have the correct operational contact information for your site. You can view and amend your Site Responsibility Schedule (SRS) so we can inform you of planned works that could impact your sites operation.</p>',
  leftIcon: IconNames.FORTY_PX_LOCATION,
  leftButtonLink: {
    url: 'http://google.com',
    name: 'Find out more 1',
    type: LinkType.EXTERNAL,
  },
  leftBackgroundColour: BackgroundColours.DEFAULT,

  rightTitle: 'The Embedded Capacity Register',
  rightText:
    '<p>The Embedded Capacity Register (ECR) has replaced the System-Wide Resource Register (SWRR). The Register provides information on Distributed Energy Resources and network requirements.</p><p>The Embedded Capacity Register (ECR) has replaced the System-Wide Resource Register (SWRR). The Register provides information on Distributed Energy Resources and network requirements.</p>',
  rightIcon: IconNames.FORTY_PX_LOCATION,
  rightButtonLink: {
    url: 'http://google.co.uk',
    name: 'Find out more 2',
    type: LinkType.EXTERNAL,
  },
  rightBackgroundColour: BackgroundColours.DEFAULT,
}
Default.args = TextBoxWithCTAData
WithWhiteBG.args = TextBoxWithCTADataWithWhiteBG
