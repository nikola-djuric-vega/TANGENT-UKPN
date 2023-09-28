import { Story, Meta } from '@storybook/react'
import RelatedContent from './RelatedContent'
import React from 'react'

import {
  RelatedContentType,
  ModuleColors,
} from '_types/CMS/nodes/components/UKPN'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Molecules/RelatedContent',
  component: RelatedContent,
} as Meta<RelatedContentType>

const Template: Story<RelatedContentType> = (args) => (
  <RelatedContent {...args} />
)

export const Default = Template.bind({})
export const RelatedContentData: RelatedContentType = {
  __typename: ComponentsTypeName.RELATED_CONTENT,
  moduleTitle: 'Useful information',
  moduleColor: ModuleColors.DEFAULT,
  links: [
    {
      serviceTitle: 'Need help?',
      serviceCopyText:
        'Read our help and advice on installing Electric Vehicle Charging Points.',
      cTAButton: [
        {
          __typename: LinkAppearance.SECONDARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://delfi.com',
            name: 'Read now',
          },
          cTAType: ButtonColors.DARK,
        },
      ],
    },
    {
      serviceTitle: 'Ask the expert',
      serviceCopyText:
        'Ask our electric vehicle expert a question online or request a face-to-face meeting to learn more before you apply.',
      cTAButton: [
        {
          __typename: LinkAppearance.PRIMARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://google.com',
            name: 'Find out more',
          },
          cTAType: ButtonColors.LIGHT,
        },
        {
          __typename: LinkAppearance.PRIMARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://google.com',
            name: 'Find out more',
          },
          cTAType: ButtonColors.LIGHT,
        },
        {
          __typename: LinkAppearance.PRIMARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://google.com',
            name: 'Find out more',
          },
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
    {
      serviceTitle: 'Check which of our substations have capacity',
      serviceCopyText:
        'View our map to see the available electricity network capacity at our local substations.',
      cTAButton: [
        {
          __typename: LinkAppearance.SECONDARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://google.com',
            name: 'Check now',
          },
          cTAType: ButtonColors.DARK,
        },
      ],
    },
  ],
}
Default.args = RelatedContentData
