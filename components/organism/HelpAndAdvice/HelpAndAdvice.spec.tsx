import { HelpAndAdviceType } from '_types/CMS/nodes/components/UKPN'
import { fireEvent, render } from '@testing-library/react'
import { ComponentsTypeName } from '_types/CMS'
import HelpAndAdvice from './HelpAndAdvice'
import React from 'react'

const mockProps1: HelpAndAdviceType = {
  __typename: ComponentsTypeName.HELP_AND_ADVICE,
  helpAndAdviceTitle: 'Mock Help and Advice Title',
  helpAndAdviceItems: [
    {
      helpAndAdviceItemTitle: 'Mock Help and Advice Item 1',
      helpAndAdviceDescription: 'Mock Help and Advice Description 1',
      helpAndAdviceImage: {
        name: 'Mock Help and Advice Image 1',
        umbracoFile: { url: 'mock/umbraco/file/url1' },
      },
      helpAndAdviceImageOverlay: 'Mock Image Overlay 1',
      helpAndAdviceVideo: 'mock_video1',
    },
    {
      helpAndAdviceItemTitle: 'Mock Help and Advice Item 2',
      helpAndAdviceDescription: 'Mock Help and Advice Description 2',
      helpAndAdviceImageOverlay: 'Mock Image Overlay 2',
      helpAndAdviceVideo: 'mock_video2',
    },
  ],
  helpAndAdviceEnableAlwaysOpen: true,
}

const mockProps2: HelpAndAdviceType = {
  __typename: ComponentsTypeName.HELP_AND_ADVICE,
  helpAndAdviceTitle: 'Mock Help and Advice Title',
  helpAndAdviceItems: [
    {
      helpAndAdviceItemTitle: 'Mock Help and Advice Item 1',
      helpAndAdviceDescription: 'Mock Help and Advice Description 1',
      helpAndAdviceImage: {
        name: 'Mock Help and Advice Image 1',
        umbracoFile: { url: 'mock/umbraco/file/url1' },
      },
      helpAndAdviceImageOverlay: 'Mock Image Overlay 1',
      helpAndAdviceVideo: 'mock_video1',
    },
    {
      helpAndAdviceItemTitle: 'Mock Help and Advice Item 2',
      helpAndAdviceDescription: 'Mock Help and Advice Description 2',
      helpAndAdviceImageOverlay: 'Mock Image Overlay 2',
      helpAndAdviceVideo: 'mock_video2',
    },
  ],
  helpAndAdviceEnableAlwaysOpen: false,
}

describe('Help and Contact', () => {
  it('Render Help and Contact', async () => {
    const screen = render(<HelpAndAdvice {...mockProps1} />)

    const element1 = screen.getByText('Mock Help and Advice Title')
    const element2 = screen.getByText('Mock Help and Advice Item 1')
    const element3 = screen.getByText('Mock Help and Advice Description 2')
    const element4 = screen.getAllByAltText('Mock Help and Advice Image 1')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4[0]).toHaveAttribute('src', 'mock/umbraco/file/url1')

    //Open...
    fireEvent.click(element2)
    fireEvent.click(element3)
    //...& Close Items
    fireEvent.click(element2)
    fireEvent.click(element3)
  })

  it('Render Help and Contact', async () => {
    const screen = render(<HelpAndAdvice {...mockProps2} />)

    const element1 = screen.getByText('Mock Help and Advice Title')
    const element2 = screen.getByText('Mock Help and Advice Item 1')
    const element3 = screen.getByText('Mock Help and Advice Description 2')
    const element4 = screen.getAllByAltText('Mock Help and Advice Image 1')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4[0]).toHaveAttribute('src', 'mock/umbraco/file/url1')

    //Open...
    fireEvent.click(element2)
    fireEvent.click(element3)
    //...& Close Items
    fireEvent.click(element2)
    fireEvent.click(element3)
  })
})
