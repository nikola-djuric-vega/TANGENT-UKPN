import { ImageGridType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { render } from '@testing-library/react'
import ImageGrid from './ImageGrid'
import React from 'react'

const mockProps: ImageGridType = {
  __typename: ComponentsTypeName.IMAGE_GRID,
  title: 'Mock Image Grid',
  gridItems: [
    {
      logo: {
        name: 'Mock Media 1',
        url: 'mock/media1/url',
      },
    },
    {
      logo: {
        name: 'Mock Media 2',
        url: 'mock/media2/url',
      },
    },
  ],
}

describe('Image Grid Test', () => {
  it('should render an Image Grid', () => {
    const screen = render(<ImageGrid {...mockProps} />)

    const element0 = screen.getByText('Mock Image Grid')
    const element1A = screen.getByAltText('Mock Media 1')
    const element2U = screen.getByAltText('Mock Media 2')

    expect(element0).toBeInTheDocument()
    expect(element1A).toBeInTheDocument()
    expect(element2U).toHaveAttribute('src', 'mock/media2/url')
  })
})
