import { Buttons5MaxType } from '_types/CMS/nodes/components/UKPN'
import { render } from '@testing-library/react'
import Buttons5Max from './Buttons5Max'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

const mockProps: Buttons5MaxType = {
  __typename: ComponentsTypeName.BUTTONS_5_MAX,
  buttons: [
    {
      __typename: LinkAppearance.PRIMARY,
      uRL: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'Find out more',
      },
      cTAType: ButtonColors.LIGHT,
    },
  ],
}

describe('Find out more', () => {
  it('should render a Buttons5Max component with elements', () => {
    const screen = render(<Buttons5Max {...mockProps} />)

    const element = screen.getByText('Find out more')

    expect(element).toBeInTheDocument()
  })
})
