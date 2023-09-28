import { ComponentsTypeName, LinkType } from '_types/CMS'
import { render } from '@testing-library/react'
import WhatService from './WhatService'
import React from 'react'

import {
  WhatServiceItem,
  WhatServiceType,
  PowerCutBox,
} from '_types/CMS/nodes/components/UKPN'

const mockPCBox: PowerCutBox = {
  phoneNumberHeader: 'Mock Phone Number Header',
  powerCutMapLink: {
    name: 'Power Cut Map Link',
    type: LinkType.EXTERNAL,
    url: 'powerCutMapLink/link/url',
  },
  powerCutImage: {
    name: 'Mock powerCutImage',
    url: 'powerCutImage/media',
  },
  phoneNumber: '+4400000000',
  header: 'Mock Power Cut Box Header',
  title: 'Mock Power Cut Box Title',
}

const mockWSItem: WhatServiceItem = {
  title: 'Mock What Service Item',
  subTitle: 'Mock What Service Item Subtitle',
  copyText: 'Mock What Service Item Copy Text',
  linkText: 'Mock What Service Item Link Text',
  whatServiceItemLinks: [
    {
      name: 'What Service Item Link 1',
      type: LinkType.CONTENT,
      url: 'whatServiceItem/link/url1',
    },
    {
      name: 'What Service Item Link 2',
      type: LinkType.CONTENT,
      url: 'whatServiceItem/link/url2',
    },
  ],
}

const mockProps: WhatServiceType = {
  __typename: ComponentsTypeName.WHAT_SERVICE,
  powerCutBox: [mockPCBox],
  moduleCopyText: 'What Service Module Copy Text',
  moduleTitle: 'What Service Mock Module Title',
  moduleServiceTitle: 'What Service Mock Title',
  whatServiceItems: [mockWSItem],
  removeBottomMargin: false,
}

describe('What Service', () => {
  it('Render What Service', async () => {
    const screen = render(<WhatService {...mockProps} />)

    const element1 = screen.getByText('What Service Mock Module Title')
    const element2 = screen.getByText('Mock Power Cut Box Title')
    const elementI = screen.getByAltText('Mock powerCutImage')
    const elementT = screen.getByText('+4400000000')

    const elementIt = screen.getByText('Mock What Service Item Link Text')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(elementI).toBeInTheDocument()
    expect(elementT).toBeInTheDocument()
    expect(elementI).toHaveAttribute('src', 'powerCutImage/media')
    expect(elementIt).toBeInTheDocument()
  })
})
