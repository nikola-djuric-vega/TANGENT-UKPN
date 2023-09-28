import { ProcessGraphicType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import ProcessGraphic from './ProcessGraphic'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/ProcessGraphic',
  component: ProcessGraphic,
} as Meta

const Template: Story<ProcessGraphicType> = (args) => (
  <ProcessGraphic {...args} />
)

export const Default = Template.bind({})
export const ProcessGraphicData: ProcessGraphicType = {
  __typename: ComponentsTypeName.PROCESS_GRAPHIC,
  title: 'What steps do I need to go through?',
  subTitle:
    'The first step is completing a form and our project designer will assess what you need.',
  processItems: [
    {
      icon: IconNames.ICON_CALL,
      heading: 'Call us',
      subheading:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    },
    {
      icon: IconNames.ICO_VISIT,
      heading: 'We will visit you',
      subheading:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    },
    {
      icon: IconNames.ICON_CHARGED,
      heading: 'We will cover your electricity cable',
      subheading: '(this may need to be done at a second appointment)',
    },
    {
      icon: IconNames.ICON_VAN,
      heading: 'You can then carry out the work you need safely',
    },
    {
      icon: IconNames.ICO_MAINTENANCE,
      subheading:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    },
  ],
}
Default.args = ProcessGraphicData
