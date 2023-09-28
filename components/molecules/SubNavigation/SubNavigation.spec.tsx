import { SubNavigationType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, Link, LinkType } from '_types/CMS'
import { fireEvent, render } from '@testing-library/react'
import SubNavigation from './SubNavigation'
import React from 'react'

const mockLink0: Link = {
  name: 'Mock Main Link',
  type: LinkType.EXTERNAL,
  url: 'mockurl1.com/link0',
}

const mockLink1: Link = {
  name: 'Mock Sub Link One',
  type: LinkType.EXTERNAL,
  url: 'mockurl2.com/link1',
}

const mockLink2: Link = {
  name: 'Mock Sub Link Two',
  type: LinkType.EXTERNAL,
  url: 'mockurl2.com/link2',
}

const mockProps: SubNavigationType = {
  __typename: ComponentsTypeName.SUB_NAVIGATION,
  subNavigationLinks: [mockLink0, mockLink1, mockLink2],
}

describe('Sub Navigation Test', () => {
  it('should render the subnavigation', () => {
    const screen = render(<SubNavigation {...mockProps} />)

    const element0 = screen.getAllByText('Mock Main Link')
    const element1 = screen.getByText('Mock Sub Link One')
    const element2 = screen.getByText('Mock Sub Link Two')
    const button = screen.getByRole('button')

    expect(element0).not.toBeNull()
    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element1).toHaveAttribute('href', '/mockurl2.com/link1')
    expect(element2).toHaveAttribute('href', '/mockurl2.com/link2')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
