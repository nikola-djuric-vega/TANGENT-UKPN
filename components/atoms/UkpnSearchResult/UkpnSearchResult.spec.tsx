import UkpnSearchResult, { UkpnSearchResultProps } from './UkpnSearchResult'
import { render } from '@testing-library/react'

const mockDataWithPageTitle: UkpnSearchResultProps = {
  item: {
    description: 'description text',
    name: '',
    nodeId: 'nodeId text',
    pageTitle: 'page title',
    path: 'path text',
    score: 1,
  },
}

const mockDataWithName: UkpnSearchResultProps = {
  item: {
    description: 'description text',
    name: 'name text',
    nodeId: 'nodeId text',
    pageTitle: '',
    path: 'path text',
    score: 1,
  },
}

describe('UkpnSearchResult test', () => {
  it('shall render UkpnSearchResult with page title', () => {
    const { queryByText } = render(
      <UkpnSearchResult {...mockDataWithPageTitle} />
    )
    const description = queryByText('description text')
    const pageTitle = queryByText('page title')
    expect(description).toBeInTheDocument()
    expect(pageTitle).toBeInTheDocument()
  })

  it('shall render UkpnSearchResult with name', () => {
    const { queryByText } = render(<UkpnSearchResult {...mockDataWithName} />)
    const name = queryByText('name text')
    expect(name).toBeInTheDocument()
  })
})
