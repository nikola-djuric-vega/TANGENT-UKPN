import { CTAButton } from '_types/CMS/nodes/components/UKPN/buttons/base'
import { DoubleCTAType } from '_types/CMS/nodes/components/UKPN'
import { render } from '@testing-library/react'
import DoubleCTA from './DoubleCTA'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

const mockLeftCTAs: CTAButton[] = [
  {
    uRL: {
      name: 'Mock Left CTA Link 1',
      type: LinkType.EXTERNAL,
      url: 'mock/ctatest/url11',
    },
    __typename: LinkAppearance.PRIMARY,
    cTAType: ButtonColors.DARK,
  },
  {
    uRL: {
      name: 'Mock Left CTA Link 2',
      type: LinkType.EXTERNAL,
      url: 'mock/ctatest/url12',
    },
    __typename: LinkAppearance.SECONDARY,
    cTAType: ButtonColors.LIGHT,
  },
]

const mockRightCTAs: CTAButton[] = [
  {
    uRL: {
      name: 'Mock Right CTA Link 1',
      type: LinkType.EXTERNAL,
      url: 'mock/ctatest/url21',
    },
    __typename: LinkAppearance.PRIMARY,
    cTAType: ButtonColors.LIGHT,
  },
  {
    uRL: {
      name: 'Mock Right CTA Link 2',
      type: LinkType.EXTERNAL,
      url: 'mock/ctatest/url22',
    },
    __typename: LinkAppearance.SECONDARY,
    cTAType: ButtonColors.LIGHT,
  },
]

const mockProps: DoubleCTAType = {
  __typename: ComponentsTypeName.DOUBLE_CTA,
  leftCTATitle: 'Mock Left CTA',
  leftCTAText: 'Mock Left CTA Text',
  leftCTAs: mockLeftCTAs,
  rightCTATitle: 'Mock Right CTA',
  rightCTAText: 'Mock Right CTA Text',
  rightCTAs: mockRightCTAs,
}

describe('Double Cta Test', () => {
  it('should render Double Cta', () => {
    const screen = render(<DoubleCTA {...mockProps} />)

    const elementL = screen.getByText('Mock Left CTA')
    const elementR = screen.getByText('Mock Right CTA')
    const elementLE = screen.getByText('Mock Left CTA Link 1')
    const elementRM = screen.getByText('Mock Right CTA Link 1')

    expect(elementL).toBeInTheDocument()
    expect(elementR).toBeInTheDocument()
    expect(elementLE.closest('a')).toHaveAttribute(
      'href',
      '/mock/ctatest/url11'
    )
    expect(elementRM).toBeInTheDocument()
  })
})
