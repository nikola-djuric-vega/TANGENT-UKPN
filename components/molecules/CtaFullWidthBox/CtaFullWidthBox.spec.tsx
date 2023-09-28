import { CtaFullWidthBoxType } from '_types/CMS/nodes/components/UKPN'
import CtaFullWidthBox from './CtaFullWidthBox'
import { render } from '@testing-library/react'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

const mockProps: CtaFullWidthBoxType = {
  __typename: ComponentsTypeName.CTA_FULL_WIDTH_BOX,
  cTAItems: [
    {
      title: 'Mock Full Width Box CTA Item 1',
      text: 'Mock Full Width Box CTA Item 1 Text',
      cTAFullWidthItemCTA: [
        {
          uRL: {
            name: 'Mock CTA Button 1',
            type: LinkType.EXTERNAL,
            url: '/mock/ctatest/url1',
          },
          __typename: LinkAppearance.PRIMARY,
          cTAType: ButtonColors.DARK,
        },
      ],
    },
    {
      title: 'Mock Full Width Box CTA Item 2',
      text: 'Mock Full Width Box CTA Item 2 Text',
      cTAFullWidthItemCTA: [
        {
          uRL: {
            name: 'Mock CTA Button 2',
            type: LinkType.EXTERNAL,
            url: '/mock/ctatest/url2',
          },
          __typename: LinkAppearance.SECONDARY,
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
  ],
}

describe('Cta Full Width Box Test', () => {
  it('should render Cta Full Width Offset', () => {
    const screen = render(<CtaFullWidthBox {...mockProps} />)

    const element1 = screen.getByText('Mock Full Width Box CTA Item 1')
    const element1T = screen.getByText('Mock Full Width Box CTA Item 1 Text')
    const element2U = screen.getByText('Mock CTA Button 2')

    expect(element1).toBeInTheDocument()
    expect(element1T).toBeInTheDocument()
    expect(element2U.closest('a')).toHaveAttribute('href', '/mock/ctatest/url2')
  })
})
