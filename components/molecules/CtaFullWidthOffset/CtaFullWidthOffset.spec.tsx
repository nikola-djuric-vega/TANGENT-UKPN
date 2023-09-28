import { CtaFullWidthOffsetType } from '_types/CMS/nodes/components/UKPN'
import { CTAButton } from '_types/CMS/nodes/components/UKPN/buttons/base'
import CtaFullWidthOffset from './CtaFullWidthOffset'
import { render } from '@testing-library/react'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

const mockCTAs: CTAButton[] = [
  {
    uRL: {
      name: 'Mock CTA Full Width Offset 1',
      type: LinkType.EXTERNAL,
      url: 'mock/ctatest/url1',
    },
    __typename: LinkAppearance.PRIMARY,
    cTAType: ButtonColors.DARK,
  },
  {
    uRL: {
      name: 'Mock CTA Full Width Offset 2',
      type: LinkType.EXTERNAL,
      url: 'mock/ctatest/url2',
    },
    __typename: LinkAppearance.SECONDARY,
    cTAType: ButtonColors.LIGHT,
  },
]

const mockProps: CtaFullWidthOffsetType = {
  __typename: ComponentsTypeName.CTA_FULL_WIDTH_OFFSET,
  title: 'Mock CTA Offset',
  text: 'Mock CTA Offset Text',
  cTA: mockCTAs,
  image: { name: 'mockImagename', url: 'mock/image/url' },
}

describe('Cta Full Width Offset Test', () => {
  it('should render Cta Full Width Offset', () => {
    const screen = render(<CtaFullWidthOffset {...mockProps} />)

    const element0 = screen.getByText('Mock CTA Offset')
    const element1 = screen.getByText('Mock CTA Full Width Offset 1')
    const element2U = screen.getByText('Mock CTA Full Width Offset 1')
    const elementImg = screen.getByAltText('image')

    expect(element0).toBeInTheDocument()
    expect(element1).toBeInTheDocument()
    expect(element2U.closest('a')).toHaveAttribute('href', '/mock/ctatest/url1')
    expect(elementImg).toHaveAttribute('src', 'mock/image/url')
  })
})
