import { PostcodeFormProps } from './PostcodeForm'
import { render } from '@testing-library/react'
import { LinkType } from '_types/CMS'
import PostcodeForm from './PostcodeForm'
import React from 'react'

const mockProps: PostcodeFormProps = {
  formDestination: {
    name: 'Mock Link Name',
    type: LinkType.EXTERNAL,
    url: 'test/mock/mockurl1.com',
  },
  pDFDownloadLink: {
    name: 'download',
    type: LinkType.EXTERNAL,
    url: 'http://google.com',
  },
}

describe('Postcode Test', () => {
  it('should render the Postcode Form', () => {
    const screen = render(<PostcodeForm {...mockProps} />)

    const elementUrl = screen.getByText('Mock Link Name')

    expect(elementUrl).toBeInTheDocument()
    expect(elementUrl.closest('a')).toHaveAttribute(
      'href',
      '/test/mock/mockurl1.com'
    )
  })
})
