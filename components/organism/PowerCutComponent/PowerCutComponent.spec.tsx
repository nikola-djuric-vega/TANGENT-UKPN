import { PowerCutComponentType } from '_types/CMS/nodes/components/UKPN'
import { fireEvent, render } from '@testing-library/react'
import PowerCutComponent from './PowerCutComponent'
import { ComponentsTypeName } from '_types/CMS'
import mockRouter from 'next-router-mock'
import { LinkType } from '_types/CMS'
import React from 'react'

const mockProps: PowerCutComponentType = {
  __typename: ComponentsTypeName.POWER_CUT_COMPONENT,
  postcodePlaceholderText: 'Mock Power Cut Placeholder',
  addressNotFound: 'Mock Power Cut Address Not Found Message',
  subtitle: 'Mock Power Cut Subtitle',
  cTAText: 'Mock Power Cut CTA Text',
  listLink: {
    __typename: 'mock_type',
    name: 'Mock Link',
    type: LinkType.CONTENT,
    url: 'mock/listLink/url',
  },
  image: { name: 'Mock Media Image Name', url: 'mock/image/media' },
  mapLink: {
    __typename: 'mock_type',
    name: 'Mock Map Link',
    type: LinkType.CONTENT,
    url: 'mock/mockmaplink/url',
  },
  title: 'Mock Power Cut Title',
}

jest.mock('next/router', () => require('next-router-mock'))

describe('Power Cut Component Test', () => {
  it('should render Power Cut Component', () => {
    mockRouter.query.slug = ['MockSlugKey', 'MockSlug1-Direction']

    const screen = render(<PowerCutComponent {...mockProps} />)

    const element1 = screen.getByText('Mock Power Cut Title')
    const element2 = screen.getByText('Mock Power Cut CTA Text')
    const element3 = screen.getByText('Map')
    const elementCB = screen.getByRole('combobox')
    const elementCBC = elementCB.nextSibling as HTMLInputElement

    fireEvent.click(elementCBC)

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
  })
})
