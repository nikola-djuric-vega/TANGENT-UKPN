import { ReadMoreRichTextMock } from './ReadMoreRichText.stories'
import { fireEvent, render } from '@testing-library/react'
import ReadMoreRichText from './ReadMoreRichText'
import React from 'react'

describe('ReadMoreRichText Test', () => {
  it('should render ReadMoreRichText with elements', () => {
    const { queryByTestId, getByLabelText } = render(
      <ReadMoreRichText data-testid="test" {...ReadMoreRichTextMock} />
    )
    const readMoreButton = getByLabelText('Read more')
    const textContainer = queryByTestId('test')

    expect(readMoreButton).toBeInTheDocument()
    expect(textContainer).toBeInTheDocument()
  })

  it('shall reveal content', () => {
    const { getByLabelText, queryByTestId, debug } = render(
      <ReadMoreRichText data-testid="test" {...ReadMoreRichTextMock} />
    )

    const readMoreButton = getByLabelText('Read more')
    const textContainer = queryByTestId('test')
    const textContainerStyle = window.getComputedStyle(
      textContainer as HTMLElement
    )
    fireEvent.click(readMoreButton)
    expect(textContainerStyle.height).toBeDefined()
  })

  it('shall hide content', () => {
    const { getByLabelText, queryByTestId, debug } = render(
      <ReadMoreRichText data-testid="test" {...ReadMoreRichTextMock} />
    )

    const readMoreButton = getByLabelText('Read more')
    const textContainer = queryByTestId('test')
    const textContainerStyle = window.getComputedStyle(
      textContainer as HTMLElement
    )
    fireEvent.click(readMoreButton)
    fireEvent.click(readMoreButton)
    expect(textContainerStyle.height).toBeDefined()
  })

  it('should update label', () => {
    const { getByLabelText } = render(
      <ReadMoreRichText data-testid="test" {...ReadMoreRichTextMock} />
    )
    const readMoreButton = getByLabelText('Read more')
    fireEvent.click(readMoreButton)
    expect(readMoreButton).toHaveTextContent('Read less')
  })
})
