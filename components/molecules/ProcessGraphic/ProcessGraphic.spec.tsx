import { ProcessGraphicData } from './ProcessGraphic.stories'
import { render } from '@testing-library/react'
import ProcessGraphic from './ProcessGraphic'
import React from 'react'

describe('Ukpn Process Graphic Test', () => {
  it('should render process graphic component with data', () => {
    const screen = render(<ProcessGraphic {...ProcessGraphicData} />)

    const title = screen.getByText(`${ProcessGraphicData.title}`)
    const subTitle = screen.getByText(`${ProcessGraphicData.subTitle}`)
    const heading = screen.getByText(
      `${ProcessGraphicData.processItems?.[0].heading}`
    )

    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
})
