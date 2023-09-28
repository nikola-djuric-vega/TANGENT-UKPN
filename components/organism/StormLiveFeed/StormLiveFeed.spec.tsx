import { StormLiveFeedData } from './StormLiveFeed.stories'
import { render } from '@testing-library/react'
import StormLiveFeed from './StormLiveFeed'

describe('StormLiveFeed test', () => {
  it('shall render StormLiveFeed', async () => {
    const { getByPlaceholderText, getByText, debug } = render(
      <StormLiveFeed {...StormLiveFeedData} />
    )
  })
})
