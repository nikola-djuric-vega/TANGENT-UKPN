import { TilesLayout } from '_types/CMS/compositions/media-tiles'
import { MediaTilesType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import MediaTiles from './MediaTiles'
import React from 'react'

import {
  mockMediaTilesMixed,
  mockMediaTilesImage,
  mockMediaTilesVideo,
} from './mock-media-tiles-data'

export default {
  title: 'organisms/MediaTiles',
  component: MediaTiles,
} as Meta

const Template: Story<MediaTilesType> = (args) => <MediaTiles {...args} />
interface MediaTilesDataType {
  [key: string]: MediaTilesType
}

export const MediaTilesData: MediaTilesDataType = {
  mockMediaTilesImage: {
    __typename: ComponentsTypeName.MEDIA_TILES,
    title: 'When will I need shrouding?',
    mediaTiles: mockMediaTilesImage,
    layout: TilesLayout.TIMES_THREE,
  },
  mockMediaTilesVideo: {
    __typename: ComponentsTypeName.MEDIA_TILES,
    title: 'When will I need shrouding?',
    mediaTiles: mockMediaTilesVideo,
    layout: TilesLayout.TIMES_TWO,
  },
  mockMediaTilesMixed: {
    __typename: ComponentsTypeName.MEDIA_TILES,
    title: 'When will I need shrouding?',
    mediaTiles: mockMediaTilesMixed,
    layout: TilesLayout.TIMES_TWO,
  },
}

export const LayoutThree = Template.bind({})
LayoutThree.args = MediaTilesData.mockMediaTilesImage

export const LayoutTwo = Template.bind({})
LayoutTwo.args = MediaTilesData.mockMediaTilesVideo

export const Mixed = Template.bind({})
Mixed.args = MediaTilesData.mockMediaTilesMixed
