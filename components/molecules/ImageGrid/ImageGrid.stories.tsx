import { ImageGridType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import ImageGrid from './ImageGrid'
import React from 'react'

export default {
  title: 'Molecules/ImageGrid',
  component: ImageGrid,
} as Meta<ImageGridType>

const Template: Story<ImageGridType> = (args) => <ImageGrid {...args} />

export const Default = Template.bind({})
export const ImageGridData: ImageGridType = {
  __typename: ComponentsTypeName.IMAGE_GRID,
  title: 'We work with a range of partners',
  gridItems: [
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/jcvbxbao/linkssouthern.png',
        name: 'Linkssouthern',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/2cwbyitx/sutton-and-east-surrey-water.png',
        name: 'South East Water Logo New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/2rnotbmf/smardenlogo-8.png',
        name: 'Anglianwater Logo New',
      },
    },

    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/jesiojla/rad-logo.png',
        name: 'CW Logo Thumb',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/eippq2xz/national-grid-logo-blue.png',
        name: 'SGN Gas Logo New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/b1djnyvp/esw-logo.png',
        name: 'Cadent Gas Logo New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/dksdvvlz/community-energy-south-logo.png',
        name: 'National Grid Logo Blue',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/o4zb240v/carers-trust.png',
        name: 'Brixton Energy Logo UD',
      },
    },

    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/uwepdi4v/british-lung.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/yhwldb4k/citizens-advice-logo.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/pfijmi04/aohl-logo.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/l34dx4gf/age-uk-logo.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/0r5ma05d/dementia-uk.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/sk4lyu0f/national-autistic-society-logo-svg.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/o4ahmozj/red-cross.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
    {
      logo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/e2fpapqg/east-sussex-fire-rescue.png',
        name: 'HASTE GENERATORS LOGO New',
      },
    },
  ],
}
Default.args = ImageGridData
