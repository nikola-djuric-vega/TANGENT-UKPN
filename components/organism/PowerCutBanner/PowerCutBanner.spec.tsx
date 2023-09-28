import { PowerCutBannerData } from './PowerCutBanner.stories'
import { render } from '@testing-library/react'
import PowerCutBanner from './PowerCutBanner'
import React from 'react'

describe('PowerCutBanner Test', () => {
  it('should render PowerCutBanner', () => {
    const {
      getByPlaceholderText,
      getByAltText,
      getAllByRole,
      getByText,
      getByRole,
    } = render(<PowerCutBanner {...PowerCutBannerData} />)

    const lookup = getByPlaceholderText('Enter a postcode here')
    const image = getByAltText(PowerCutBannerData.title || '')
    const title = getByText(PowerCutBannerData.title || '')
    const lines = getAllByRole('graphic')
    const liveTag = getByRole('status')

    expect(liveTag).toBeInTheDocument()
    expect(lookup).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(lines).toHaveLength(2)
  })
})
