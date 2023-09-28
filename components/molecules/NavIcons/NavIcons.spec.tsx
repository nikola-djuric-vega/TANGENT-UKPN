import { NavigationIconType, NavIcon } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { render } from '@testing-library/react'
import NavIcons from './NavIcons'
import React from 'react'
import { IconNames } from '_types/local'

const mockNavicons: NavIcon[] = [
  {
    title: 'Mock NavIcon Title 1',
    subtitle: 'Mock NavIcon Subtitle 1',
    icon: IconNames.ANIMATION,
    link: {
      name: 'Mock Link Name 1',
      type: LinkType.EXTERNAL,
      url: 'test/mock/mockurl1.com',
    },
  },
  {
    title: 'Mock NavIcon Title 2',
    subtitle: 'Mock NavIcon Subtitle 2',
    icon: IconNames.ARROW_ICON,
    link: {
      name: 'Mock Link Name 2',
      type: LinkType.EXTERNAL,
      url: 'test/mock/mockurl2.com',
    },
  },
]

const mockProps: NavigationIconType = {
  __typename: ComponentsTypeName.NAVIGATION_ICON,
  title: 'Mock Navigation Icon Title',
  items: mockNavicons,
}

describe('NavIcons Test', () => {
  it('should render NavIcons', () => {
    const screen = render(<NavIcons {...mockProps} />)

    const element = screen.getByText('Mock Navigation Icon Title')
    const elementLink1 = screen.getByText('Mock NavIcon Title 1')
    const elementUrl2 = screen.getByText('Mock Link Name 2')

    expect(element).toBeInTheDocument()
    expect(elementLink1).toBeInTheDocument()
    expect(elementUrl2).toHaveAttribute('href', '/test/mock/mockurl2.com')
  })
})
