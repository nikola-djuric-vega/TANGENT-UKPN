import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import HeaderSearchContainerForm, {
  HeaderSearchContainerFormProps,
} from './HeaderSearchContainerForm'

const mockProps1: HeaderSearchContainerFormProps = {
  setHeaderState: () => {},
  headerState: {
    activeSubMenuItemIndex: 0,
    activeMenuItemIndex: 0,
    isSubMenuOpen: false,
    isSearchOpen: false,
    isStormMode: false,
    isScrolled: false,
    isMenuOpen: false,
  },
  isStorm: false,
}

describe('Header Search', () => {
  it('should render Header Search Open', () => {
    const screen = render(<HeaderSearchContainerForm {...mockProps1} />)

    const element = screen.getByText('Search')

    expect(element).toBeInTheDocument()
    fireEvent.click(element)
    const button = screen.getByLabelText('close search')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })
})
