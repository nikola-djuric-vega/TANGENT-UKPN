import { render } from '@testing-library/react'
import UKPN404, { UKPN404Props } from './UKPN404'
import { LinkType, PageTypeNames } from '_types/CMS'

const mockData: UKPN404Props = {
  data: {
    __typename: PageTypeNames.ERROR_PAGE,
    pageText: 'page text',
    errorPageButtonLink: {
      __typename: 'mock_type',
      name: 'Visit home page',
      type: LinkType.EXTERNAL,
      url: 'https://www.ukpowernetworks.co.uk/',
    },
    name: 'name',
    url: 'http://googl.com',
    id: 'test',
    contentTypeAlias: 'test',
  },
}

describe('UKPN404 test', () => {
  it('shall render UKPN404', () => {
    const { queryByText } = render(<UKPN404 {...mockData} />)
    const text = queryByText('page text')
    const link = queryByText('Visit home page')
    expect(text).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})
