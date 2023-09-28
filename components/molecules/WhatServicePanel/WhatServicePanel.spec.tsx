import React from 'react'
import WhatServicePanel, { WhatServicePanelProps } from './WhatServicePanel'
import { render } from '@testing-library/react'
import { LinkType } from '_types/CMS'

const mockData: WhatServicePanelProps = {
  linkText: 'linkText',
  title: 'title',
  subTitle: 'subTitle',
  copyText: 'copyText',
  backClick: () => {},
  whatServiceItemLinks: [
    {
      url: 'https://loremipsum.io/generator/?n=1&t=p',
      type: LinkType.CONTENT,
      name: 'Link one Safety around power lines',
    },
  ],
}

describe('WhatServicePanel Test', () => {
  it('should render WhatServicePanel component with passed props', () => {
    const { getByText } = render(<WhatServicePanel {...mockData} />)
    const title = getByText('title')
    const subTitle = getByText('subTitle')
    const copyText = getByText('copyText')
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(copyText).toBeInTheDocument()
  })
})
