import React from 'react'
import UsefulLinks from './UsefulLinks'
import { render } from '@testing-library/react'
import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'

const mockData: UsefulLinksType = {
  whiteBackground: false,
  title: 'Useful links',
  usefulLinkItems: [
    {
      title: 'Coronavirus (COVID-19)',
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'Coronavirus (COVID-19): UK government response',
      },
    },
    {
      changeAppearance: true,
      title: 'Latest information from the MET office',
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'test',
      },
    },
  ],
  __typename: ComponentsTypeName.USEFUL_LINKS,
}

describe('UsefulLinks test', () => {
  it('should render UsefulLinks component', () => {
    const { getByText } = render(<UsefulLinks {...mockData} />)
    const title = getByText(mockData.title!)
    expect(title).toBeInTheDocument()
    const linkTitle = getByText(mockData.usefulLinkItems![1].title!)
    expect(linkTitle).toBeInTheDocument()
  })
})
