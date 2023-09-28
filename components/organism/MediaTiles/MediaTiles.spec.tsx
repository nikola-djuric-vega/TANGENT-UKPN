import { MediaTileType, TilesLayout } from '_types/CMS/compositions/media-tiles'
import { MediaTilesType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { render } from '@testing-library/react'
import MediaTiles from './MediaTiles'
import React from 'react'
import { IconNames } from '_types/local'

const mediaTilesType: MediaTileType[] = [
  {
    image: { name: 'Mock Media Image 1', url: 'mock.com/media1' },
    text: 'Mock Media Text 1',
    video: 'Video 1',
  },
  {
    image: { name: 'Mock Media Image 2', url: 'mock.com/media2' },
    text: 'Mock Media Text 2',
  },
  {
    image: { name: 'Mock Media Image 3', url: 'mock.com/media3' },
    text: 'Mock Media Text 3',
  },
]

const mockPropsT2: MediaTilesType = {
  title: 'Mock Media Tiles T2',
  mediaTiles: mediaTilesType,
  layout: TilesLayout.TIMES_TWO,
  __typename: ComponentsTypeName.MEDIA_TILES,
  removeBottomMargin: false,
}

const mockPropsT3: MediaTilesType = {
  title: 'Mock Media Tiles T3',
  mediaTiles: mediaTilesType,
  layout: TilesLayout.TIMES_THREE,
  __typename: ComponentsTypeName.MEDIA_TILES,
  removeBottomMargin: false,
}

global.innerWidth = 300
describe('Media Tiles', () => {
  it('Render Media Tiles 2', async () => {
    const screen = render(<MediaTiles {...mockPropsT2} />)

    const element1 = screen.getByText('Mock Media Tiles T2')
    const element2 = screen.getByText('Mock Media Text 1')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
  })

  it('Render Media Tiles 3', async () => {
    const screen = render(<MediaTiles {...mockPropsT3} />)

    const element1 = screen.getByText('Mock Media Tiles T3')
    const element2 = screen.getByAltText('Mock Media Text 3')

    expect(element1).toBeInTheDocument()
    expect(element2).toHaveAttribute('src', 'mock.com/media3')
  })
})
