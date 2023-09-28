import mockStormFeedData from '_molecules/StormFeed/mock-storm-feed-data'
import { StakeHolderPostType } from '_types/CMS/nodes/components/UKPN'
import { formattedUpdateTime, transformString } from '_utils'
import { render } from '@testing-library/react'
import StakeHolderPost from './StakeHolderPost'
import React from 'react'

describe('StakeHolderPost Test', () => {
  it('should render StakeHolderPost with elements', () => {
    const mockPost = mockStormFeedData[0] as StakeHolderPostType
    const { getByText } = render(
      <StakeHolderPost {...mockPost} isPinned={true} />
    )
    const postMessage = getByText(transformString(mockPost.summary))
    const pinned = getByText('Pinned')

    expect(postMessage).toBeInTheDocument()
    expect(pinned).toBeInTheDocument()
  })
})
