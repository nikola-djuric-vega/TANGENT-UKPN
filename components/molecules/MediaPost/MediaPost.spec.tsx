import mockStormFeedData from '_molecules/StormFeed/mock-storm-feed-data'
import { MediaPostType } from '_types/CMS/nodes/components/UKPN'
import { formattedUpdateTime, transformString } from '_utils'
import { render } from '@testing-library/react'
import MediaPost from './MediaPost'
import React from 'react'

describe('StormFeedCard Test', () => {
  it('should render StormFeedCard with elements', () => {
    const mockPost = mockStormFeedData[3] as MediaPostType
    const { getByText, getByLabelText } = render(<MediaPost {...mockPost} />)

    const postMessage = getByText(transformString(mockPost.summary))
    const playVideoButton = getByLabelText('play video')
    const pinned = getByText('Pinned')

    expect(playVideoButton).toBeInTheDocument()
    expect(postMessage).toBeInTheDocument()
    expect(pinned).toBeInTheDocument()
  })
})
