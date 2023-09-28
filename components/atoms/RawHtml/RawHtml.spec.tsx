import React from 'react'
import RawHtml from './RawHtml'
import { RawHtml as RawHtmlType } from '_types/CMS/nodes/components/UKPN'
import { render } from '@testing-library/react'
import { ComponentsTypeName } from '_types/CMS'

const mockProps: RawHtmlType = {
  __typename: ComponentsTypeName.RAW_HTML,
  rawHtml: 'TestRawHtml',
  scriptUrl: 'scriptUrl',
}

describe('RawHtml Test', () => {
  it('should render RawHtml', () => {
    const screen = render(<RawHtml {...mockProps} />)

    const element = screen.getByText('TestRawHtml')

    expect(element).toBeInTheDocument()
  })
})
