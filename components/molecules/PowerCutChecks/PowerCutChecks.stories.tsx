import { PowerCutChecks as PowerCutChecksType } from '_types/CMS/pages'
import { Story, Meta } from '@storybook/react'
import PowerCutChecks from './PowerCutChecks'
import React from 'react'

export default {
  title: 'molecules/PowerCutChecks',
  component: PowerCutChecks,
} as Meta<PowerCutChecksType>

const Template: Story<PowerCutChecksType> = (args) => (
  <PowerCutChecks {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  rightSteps: [
    {
      title: 'Find your electricity meter',
      text: 'Your electricity meter might be located in a cupboard under the stairs or outside on a wall.',
      images: [
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/0oto1jie/fusebox_gallery-1.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
      ],
    },
    {
      title: 'Turn the main switch off',
      text: 'Then turn off all of the individual switches.',
      images: [
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/jo5jq3ny/fusebox_step-switch-off.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/jo5jq3ny/fusebox_step-switch-off.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/jo5jq3ny/fusebox_step-switch-off.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
      ],
    },
  ],
  leftSteps: [
    {
      title: 'Find your fuse box',
      text: 'Your fuse box could be located under a cupboard under the stairs or in your kitchen.',
      images: [
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/0oto1jie/fusebox_gallery-1.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/0oto1jie/fusebox_gallery-1.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/0oto1jie/fusebox_gallery-1.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
      ],
    },
    {
      title: 'Turn the main switch off',
      text: 'Then turn off all of the individual switches.',
      images: [
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/jo5jq3ny/fusebox_step-switch-off.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/jo5jq3ny/fusebox_step-switch-off.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
        {
          url: 'https://media.umbraco.io/dev-uk-power-networks/jo5jq3ny/fusebox_step-switch-off.png',
          umbracoHeight: '308',
          umbracoWidth: '444',
          name: 'Image 1',
        },
      ],
    },
  ],
  rightHeading: 'Check your electricity meter',
  leftHeading: 'Check your fuse box',
  rightImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/2ezfdpfm/meter_cover.png',
    umbracoHeight: '308',
    umbracoWidth: '444',
    name: 'RightImage',
  },
  leftImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/coudj15y/fusebox_cover.png',
    umbracoHeight: '308',
    umbracoWidth: '444',
    name: 'LeftImage',
  },
  title: 'We might be able to help restore your power with two simple checks.',
  rightCTA: 'View step-by-step guide',
  leftCTA: 'View step-by-step guide',
}
