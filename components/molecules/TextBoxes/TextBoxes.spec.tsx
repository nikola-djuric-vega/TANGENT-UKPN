import { render } from '@testing-library/react'
import { ComponentsTypeName } from '_types/CMS'
import { LinkType } from '_types/CMS'
import TextBoxes from './TextBoxes'
import React from 'react'

import {
  TextBoxBackgroundStyle,
  TextBoxesType,
} from '_types/CMS/nodes/components/UKPN'
import { IconNames } from '_types/local'

const mockProps: TextBoxesType = {
  __typename: ComponentsTypeName.TEXT_BOXES,
  textBoxes: [
    {
      title: 'Mock Text Box Title 1',
      text: 'Mock Text Box Text 1',
      textBoxCTA: {
        __typename: 'mock_type',
        name: 'Mock Text Box Link',
        type: LinkType.CONTENT,
        url: 'mock/textboxlink/url',
      },
      icon: IconNames.ANIMATION,
      backgroundStyle: TextBoxBackgroundStyle.ORANGE,
    },
  ],
}

describe('Text Boxes', () => {
  it('should render Text Boxes', () => {
    const screen = render(<TextBoxes {...mockProps} />)

    const element1 = screen.getByText('Mock Text Box Title 1')
    const element2 = screen.getByText('Mock Text Box Text 1')
    const element3 = screen.getByRole('link')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toHaveAttribute('href', '/mock/textboxlink/url')
  })
})
