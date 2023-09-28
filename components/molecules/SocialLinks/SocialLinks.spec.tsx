import { SocialLinksType } from '_types/CMS/nodes/components/UKPN'
import { render } from '@testing-library/react'
import { ComponentsTypeName } from '_types/CMS'
import SocialLinks from './SocialLinks'
import React from 'react'

const mockProps: SocialLinksType = {
  __typename: ComponentsTypeName.SOCIAL_LINKS,
  title: 'Mock Social Link Title',
}

describe('Social Links Test', () => {
  it('should render Social Links with elements', () => {
    const screen = render(<SocialLinks {...mockProps} />)

    const element1 = screen.getByText('Mock Social Link Title')

    expect(element1).toBeInTheDocument()
  })
})
