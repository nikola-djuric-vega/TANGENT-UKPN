import { StormFeedData } from './StormFeed.stories'
import { fireEvent, render } from '@testing-library/react'
import StormLiveFeed from './StormFeed'
import React from 'react'

describe('StormLiveFeed Test', () => {
  it('should render StormLiveFeed with elements', () => {
    const { getByText, getByRole, getAllByRole, getByLabelText } = render(
      <StormLiveFeed {...StormFeedData} />
    )
    const stormName = getByText(StormFeedData.stormName as string)
    const loadMoreButton = getByLabelText('View more news')
    const posts = getAllByRole('article')
    const stormFeed = getByRole('feed')

    expect(loadMoreButton).toBeInTheDocument()
    expect(stormName).toBeInTheDocument()
    expect(stormFeed).toBeInTheDocument()
    expect(posts).toHaveLength(4)
  })

  it('should render more articles on button click ', () => {
    const { getAllByRole, getByLabelText } = render(
      <StormLiveFeed {...StormFeedData} />
    )

    const loadMoreButton = getByLabelText('View more news')
    const posts = getAllByRole('article')

    expect(loadMoreButton).toBeInTheDocument()
    expect(posts).toHaveLength(4)
    fireEvent.click(loadMoreButton)
    const loadedPosts = getAllByRole('article')
    expect(loadedPosts).toHaveLength(8)
  })

  it('should display articles with correct aria attributes', () => {
    const { getAllByRole } = render(<StormLiveFeed {...StormFeedData} />)
    const posts = getAllByRole('article')

    expect(posts[0]).toHaveAttribute('aria-setsize', '4')
    expect(posts[0]).toHaveAttribute('aria-posinset', '0')
  })

  it('should display pinned element as first', () => {
    const { getAllByRole } = render(<StormLiveFeed {...StormFeedData} />)
    const posts = getAllByRole('article')

    expect(posts[0]).toHaveTextContent('Pinned')
  })

  it('should not render button ', () => {
    const { getAllByRole, queryByLabelText } = render(
      <StormLiveFeed
        descendants={{ items: [StormFeedData.descendants.items[0]] }}
        stormName={StormFeedData.stormName}
      />
    )

    const loadMoreButton = queryByLabelText('View more news')
    const posts = getAllByRole('article')

    expect(loadMoreButton).not.toBeInTheDocument()
    expect(posts).toHaveLength(1)
  })
})
