import MediaTile, { MediaTileProps } from './MediaTile'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'molecules/MediaTile',
  component: MediaTile,
} as Meta<MediaTileProps>

const Template: Story<MediaTileProps> = (args) => <MediaTile {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'I need to replace or paint my windows, faciaU+2019s or soffits and the electricity cable is in the way',
  image: {
    url: 'https://picsum.photos/200',
    name: 'image 1',
    umbracoHeight: '300',
    umbracoWidth: '300',
  },
  video: 'MuKPB2LH8r4&t=2s',
}
