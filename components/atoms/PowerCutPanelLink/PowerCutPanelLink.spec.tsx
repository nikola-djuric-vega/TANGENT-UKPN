import React from 'react'
import PowerCutPanelLink from './PowerCutPanelLink'
import { PlainLinkType } from '_types/CMS/nodes/components/UKPN'
import { render } from '@testing-library/react'
import { ComponentsTypeName, LinkType } from '_types/CMS'

const mockDataWithLink: PlainLinkType = {
  title: 'title',
  link: {
    url: '/privacy-policy',
    target: '_blank',
    name: 'Privacy Policy',
    type: LinkType.CONTENT,
  },
  __typename: ComponentsTypeName.PLAIN_LINK,
}

const mockDataWithNoLink: PlainLinkType = {
  title: 'title',
  __typename: ComponentsTypeName.PLAIN_LINK,
}

describe('PowerCutPanelLink  Test', () => {
  it('should render Power cut panel link', () => {
    const { queryByText } = render(<PowerCutPanelLink {...mockDataWithLink} />)
    const title = queryByText('title')
    expect(title).toBeInTheDocument()
  })

  it('should not render Power cut panel link', () => {
    const { queryByText } = render(
      <PowerCutPanelLink {...mockDataWithNoLink} />
    )
    const title = queryByText('title')
    expect(title).not.toBeInTheDocument()
  })
})
