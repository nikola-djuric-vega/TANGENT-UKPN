import { render } from '@testing-library/react'
import CardList from './CardList'
import React from 'react'
import mockCardList from './CardList.mock'

describe('CardList component', () => {
  it('should not render items without a link', () => {
    const screen = render(<CardList {...mockCardList} />)
    const element = screen.queryAllByRole('link')

    expect(element.length).toEqual(mockCardList.items.length - 1)
  })

  it('should still have an icon when none specified', () => {
    const screen = render(<CardList {...mockCardList} />)
    const element = screen.getByTitle('Link')

    expect(element).toBeInTheDocument()
  })
})
