import { render, act, fireEvent } from '@testing-library/react'
import TabbedContent from './TabbedContent'
import { IconNames } from '_types/local'
import React from 'react'

import {
  TabbedContentItemType,
  TabbedContentType,
} from '_types/CMS/nodes/components/UKPN'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

const mockTabbedContentItemType: TabbedContentItemType = {
  title: 'Mock Content Type Title',
  titleIcon: IconNames.ICON_APPLY,
  rightTitle: 'Mock Right Tabbed Title',
  rightText: 'Mock Right Tabbed Text',
  rightMobileImage: {
    name: 'Mock rightMobileImage',
    url: 'rightMobileImage/media',
  },
  rightTabletImage: {
    name: 'Mock rightTabletImage',
    url: 'rightTabletImage/media',
  },
  rightDesktopImage: {
    name: 'Mock rightDesktopImage',
    url: 'rightDesktopImage/media',
  },
  backgroundIcon: IconNames.ICON_APPLY,
  videoID: 'MockVideoID',
  videoText: 'Mock Video Text',
  buttons: [
    {
      uRL: {
        name: 'Tabbed Content Link 1',
        type: LinkType.EXTERNAL,
        url: 'tabbed/link/url1',
      },
      __typename: LinkAppearance.PRIMARY,
      cTAType: ButtonColors.LIGHT,
    },
    {
      uRL: {
        name: 'Tabbed Content Link 2',
        type: LinkType.EXTERNAL,
        url: 'tabbed/link/url2',
      },
      __typename: LinkAppearance.SECONDARY,
      cTAType: ButtonColors.LIGHT,
    },
  ],
}

const mockProps: TabbedContentType = {
  __typename: ComponentsTypeName.TABBED_CONTENT,
  moduleTitle: 'Mock Module Title',
  tabbedContentItems: [mockTabbedContentItemType],
}

describe('Tabbed Content', () => {
  it('should render Tabbed Content', async () => {
    const screen = render(<TabbedContent {...mockProps} />)

    const element0 = screen.getByText('Mock Module Title')
    const element1 = screen.getByText('Mock Content Type Title')
    const elementImgs = screen.queryAllByRole('img')
    const videoButton = screen.getByText('Mock Video Text')
    const contentItem = screen.getByText('Mock Content Type Title')

    expect(element0).toBeInTheDocument()
    expect(element1).toBeInTheDocument()
    expect(element1).toBeInTheDocument()
    expect(elementImgs).not.toBeNull()
    expect(elementImgs[0]).toHaveAttribute('src', 'rightMobileImage/media')
    expect(videoButton).toBeInTheDocument()
    expect(contentItem).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(videoButton)
    })

    fireEvent.click(contentItem)
  })
})
