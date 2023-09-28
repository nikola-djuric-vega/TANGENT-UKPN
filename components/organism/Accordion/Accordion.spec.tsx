import { fireEvent, render } from '@testing-library/react'
import Accordion from './Accordion'
import React from 'react'

import {
  AccordionData,
  AccordionWithoutCategoriesData,
} from './Accordion.stories'

describe('Accordion', () => {
  it('should render Accordion', () => {
    const screen = render(<Accordion {...AccordionData} />)

    const title = screen.getByText(`${AccordionData.accordionTitle}`)
    const button1 = screen.getByRole('button', {
      name: `${AccordionData.accordionItems?.[0].accordionItemTitle}`,
    })

    expect(title).toBeInTheDocument()
    expect(button1).toBeInTheDocument()

    fireEvent.click(button1)
    expect(button1).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(button1)
    expect(button1).toHaveAttribute('aria-expanded', 'false')
  })

  it('should render Accordion and body to have modal-open class once clicked on video button', () => {
    const screen = render(<Accordion {...AccordionData} />)

    const videoButton = screen.getByRole('button', {
      name: `${AccordionData.accordionItems?.[0].accordionVideoPlayText}`,
    })

    expect(videoButton).toBeInTheDocument()
    fireEvent.click(videoButton)
    const body = document.querySelector('body')
    expect(body).toHaveClass('modal-open')
  })

  it('should render Accordion component with Categories and not have active category', () => {
    const screen = render(<Accordion {...AccordionData} />)

    const category1 = screen.getByRole('button', {
      name: `${AccordionData.accordionItems?.[0].categories?.[0].name}`,
    })

    expect(category1).toBeInTheDocument()

    fireEvent.click(category1)
    expect(category1).toHaveAttribute('data-is-active', 'true')
  })
})

describe('Accordion without categories', () => {
  it('should render Accordion without categories', () => {
    const screen = render(<Accordion {...AccordionWithoutCategoriesData} />)

    const category1 = screen.queryByRole('button', {
      name: `${AccordionData.accordionItems?.[0].categories?.[0].name}`,
    })

    expect(category1).not.toBeInTheDocument()

    const title1 = screen.queryByRole('button', {
      name: `${AccordionWithoutCategoriesData.accordionItems?.[0].accordionItemTitle}`,
    })

    const title2 = screen.queryByRole('button', {
      name: `${AccordionWithoutCategoriesData.accordionItems?.[1].accordionItemTitle}`,
    })

    const title3 = screen.queryByRole('button', {
      name: `${AccordionWithoutCategoriesData.accordionItems?.[2].accordionItemTitle}`,
    })

    expect(title1).toBeInTheDocument()
    expect(title2).toBeInTheDocument()
    expect(title3).toBeInTheDocument()
  })

  it('should render Accordion without categories and check if item expands and collapses successfully', () => {
    const screen = render(<Accordion {...AccordionWithoutCategoriesData} />)

    const button1 = screen.getByRole('button', {
      name: `${AccordionWithoutCategoriesData.accordionItems?.[0].accordionItemTitle}`,
    })

    const button2 = screen.getByRole('button', {
      name: `${AccordionWithoutCategoriesData.accordionItems?.[1].accordionItemTitle}`,
    })
    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()

    fireEvent.click(button1)
    expect(button1).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(button1)
    expect(button1).toHaveAttribute('aria-expanded', 'false')
  })
})
