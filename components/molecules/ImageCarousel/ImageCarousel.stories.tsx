import { IsPowerOffCTAType } from '_types/CMS/nodes/components/UKPN'
import { ImageCarouselType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import ImageCarousel from './ImageCarousel'
import React from 'react'

export default {
  title: 'Molecules/ImageCarousel',
  component: ImageCarousel,
} as Meta<IsPowerOffCTAType>

const Template: Story<ImageCarouselType> = (args) => <ImageCarousel {...args} />

export const Default = Template.bind({})
export const ImageCarouselData: ImageCarouselType = {
  __typename: ComponentsTypeName.IMAGE_CAROUSEL,
  carosuelTitle: 'What are you doing to get my power back on?',
  carosuelSubtitle:
    '<p>We are working as quickly as is safely possible to get everyone’s power back on. We have extra engineers working, more employees ready to answer your calls and we’re contacting customers who need extra support when they have no power.</p>',
  carosuelImages: [
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
  ],
}
Default.args = ImageCarouselData
