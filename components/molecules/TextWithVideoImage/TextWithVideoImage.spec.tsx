import { fireEvent, render, act } from '@testing-library/react'
import TextWithVideoImage from './TextWithVideoImage'
import { IconNames } from '_types/local'
import React from 'react'

import {
  TextWithVideoImageType,
  MediaPlacement,
} from '_types/CMS/nodes/components/UKPN'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

const mockPropsWithVideoAndImageSet: TextWithVideoImageType = {
  __typename: ComponentsTypeName.TEXT_WITH_VIDEO_IMAGE,
  heading: 'Mock Text With VideoImage Heading',
  mainText: 'Mock Text With VideoImage Text',
  video: 'https://www.mockyoutube.com/watch?v=mockYT',
  imageStyle: 'mock_img_style',
  imageOverlayIcon: IconNames.ICON_CHEVRON_RIGHT,
  imageOverlayLink: {
    __typename: 'mock_type',
    name: 'Mock VideoImage Link',
    type: LinkType.CONTENT,
    url: 'mock/VideoImage/url',
  },
  cTAs: [
    {
      uRL: {
        name: 'Mock CTA VideoImageText 1',
        type: LinkType.EXTERNAL,
        url: 'mock/videoimageCTA/link',
      },
      __typename: LinkAppearance.PRIMARY,
      cTAType: ButtonColors.DARK,
    },
  ],
  warningMessage: 'warning',
}

const mockPropsWithoutVideoButWithImageSet: TextWithVideoImageType = {
  __typename: ComponentsTypeName.TEXT_WITH_VIDEO_IMAGE,
  heading: 'Mock Text With VideoImage Heading',
  mainText: 'Mock Text With VideoImage Text',
  image: { name: 'Mock Media Name', url: 'mock.com/media' },
  imageStyle: 'mock_img_style',
  imageOverlayText: 'Mock Image Overlay Text',
  imageOverlayIcon: IconNames.ICON_CHEVRON_RIGHT,
  cTAs: [
    {
      uRL: {
        name: 'Mock CTA VideoImageText 1',
        type: LinkType.EXTERNAL,
        url: 'mock/videoimageCTA/link',
      },
      __typename: LinkAppearance.PRIMARY,
      cTAType: ButtonColors.DARK,
    },
  ],
  warningMessage: 'warning',
}

const mockPropsWithMediaPlacementCenter: TextWithVideoImageType = {
  __typename: ComponentsTypeName.TEXT_WITH_VIDEO_IMAGE,
  heading: 'Mock Text With VideoImage Heading',
  mainText: 'Mock Text With VideoImage Text',
  image: { name: 'Mock Media Name', url: 'mock.com/media' },
  imageStyle: 'mock_img_style',
  imageOverlayText: 'Mock Image Overlay Text',
  imageOverlayIcon: IconNames.ICON_CHEVRON_RIGHT,
  imageOverlayLink: {
    __typename: 'mock_type',
    name: 'Mock VideoImage Link',
    type: LinkType.CONTENT,
    url: 'mock/VideoImage/url',
  },
  cTAs: [
    {
      uRL: {
        name: 'Mock CTA VideoImageText 1',
        type: LinkType.EXTERNAL,
        url: 'mock/videoimageCTA/link',
      },
      __typename: LinkAppearance.PRIMARY,
      cTAType: ButtonColors.DARK,
    },
  ],
  warningMessage: 'warning',
  mediaPlacement: MediaPlacement.CENTER,
}

const mockPropsWithNoImageOverlayText: TextWithVideoImageType = {
  __typename: ComponentsTypeName.TEXT_WITH_VIDEO_IMAGE,
  heading: 'Mock Text With VideoImage Heading',
  mainText: 'Mock Text With VideoImage Text',
  image: { name: 'Mock Media Name', url: 'mock.com/media' },
  imageStyle: 'mock_img_style',
  imageOverlayIcon: IconNames.ICON_CHEVRON_RIGHT,
  cTAs: [
    {
      uRL: {
        name: 'Mock CTA VideoImageText 1',
        type: LinkType.EXTERNAL,
        url: 'mock/videoimageCTA/link',
      },
      __typename: LinkAppearance.PRIMARY,
      cTAType: ButtonColors.DARK,
    },
  ],
  warningMessage: 'warning',
  mediaPlacement: MediaPlacement.CENTER,
}

describe('Text with Video Image Test', () => {
  it('should render a thumbnail', async () => {
    const screen = render(
      <TextWithVideoImage {...mockPropsWithVideoAndImageSet} />
    )

    const element1 = screen.getByText('Mock Text With VideoImage Heading')
    const element2 = screen.getByText('Mock CTA VideoImageText 1')
    const videoButton = screen.getByRole('button')

    expect(element1).toBeInTheDocument()
    expect(element2.closest('a')).toHaveAttribute(
      'href',
      '/mock/videoimageCTA/link'
    )
    expect(videoButton).toBeInTheDocument()
    await act(async () => {
      fireEvent.click(videoButton)
    })
  })
})

describe('Text with Video Image Test', () => {
  it('should render image overlay text, warning message', () => {
    const screen = render(
      <TextWithVideoImage {...mockPropsWithoutVideoButWithImageSet} />
    )
    const overlayText = screen.queryByText('Mock Image Overlay Text')
    const warningText = screen.queryByText('warning')
    expect(overlayText).toBeInTheDocument()
    expect(warningText).toBeInTheDocument()
  })
})

describe('Text with Video Image Test', () => {
  it('should render with media placement center', () => {
    const screen = render(
      <TextWithVideoImage {...mockPropsWithMediaPlacementCenter} />
    )
    const media = screen.getByTestId('media')
    expect(media).toBeInTheDocument()
    expect(media).toHaveAttribute('data-media-placement', 'Center')
  })
})

describe('Text with Video Image Test', () => {
  it('should render image and use image name for title', () => {
    const screen = render(
      <TextWithVideoImage {...mockPropsWithNoImageOverlayText} />
    )
    const image = screen.queryByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('title', 'Mock Media Name')
  })
})
