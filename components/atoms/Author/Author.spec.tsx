import { render } from '@testing-library/react'
import { AuthorData } from './Author.stories'
import { trimName } from '_utils/trim-name'
import Author from './Author'
import React from 'react'

describe('Author component test', () => {
  it('should render Author component with props', () => {
    const { getByText } = render(<Author {...AuthorData} />)
    const authorName = getByText(`${AuthorData.authorName}`)
    const department = getByText(`${AuthorData.department}`)

    expect(authorName).toBeInTheDocument()
    expect(department).toBeInTheDocument()
  })

  it('should render Author component with props and trimmed name', () => {
    const { getByText } = render(<Author {...AuthorData} trim />)

    const authorName = getByText(trimName(`${AuthorData.authorName}`))
    const department = getByText(`${AuthorData.department}`)

    expect(authorName).toBeInTheDocument()
    expect(department).toBeInTheDocument()
  })

  it('should render Author component with props and no authorName', () => {
    AuthorData.authorName = ''
    const { getByText } = render(<Author {...AuthorData} />)

    const department = getByText(`${AuthorData.department}`)
    expect(department).toBeInTheDocument()
  })
})
