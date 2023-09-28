import { BreadcrumbsItem, PageTypeNames } from '_types/CMS'
import { BreadcrumbsProps } from './Breadcrumbs'
import { render } from '@testing-library/react'
import Breadcrumbs from './Breadcrumbs'
import React from 'react'

const mockBreadCrums: BreadcrumbsItem[] = [
  {
    id: 'MockBC1',
    __typename: PageTypeNames.UKPN_HOMEPAGE,
    name: 'Breadcrum 1',
    url: 'ukpn/breadcrum1',
  },
  {
    id: 'MockBC2',
    __typename: PageTypeNames.GENERIC_PAGE,
    name: 'Breadcrum 2',
    url: 'ukpn/breadcrum2',
  },
  {
    id: 'MockBC3',
    __typename: PageTypeNames.GENERIC_PAGE,
    name: 'Breadcrum 3',
    url: 'ukpn/breadcrum3',
  },
]

const mockProps: BreadcrumbsProps = {
  trail: mockBreadCrums,
  currentPage: 'Breadcrum 3',
}

describe('Breadcrumbs', () => {
  it('should render breadcrumbs', () => {
    const screen = render(<Breadcrumbs {...mockProps} />)

    const element1 = screen.getByText('Breadcrum 2')
    const element2 = screen.getAllByText('Breadcrum 3')

    expect(element1).toBeInTheDocument()
    expect(element2[0].closest('a')).toHaveAttribute('href', '/breadcrum3')
  })
})
