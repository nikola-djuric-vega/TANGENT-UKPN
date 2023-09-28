import { PowerCutCurvedBannerType } from '_types/CMS/nodes/components/UKPN'
import { fireEvent, render } from '@testing-library/react'
import PowerCutCurvedBanner from './PowerCutCurvedBanner'
import { ComponentsTypeName } from '_types/CMS'
import React from 'react'
import mockRouter from 'next-router-mock'
import { IconNames } from '_types/local'

const mockProps: PowerCutCurvedBannerType = {
  icon: IconNames.ANIMATION,
  tagLine: 'Mock Tag Line',
  title: 'Power Cut Curved Banner Mock Title',
  subTitle: 'Power Cut Curved Banner Mock SubTitle',
  status: 'Mock Power Cut Curved Banner Status',
  __typename: ComponentsTypeName.POWER_CUT_CURVED_BANNER,
}
jest.mock('next/router', () => require('next-router-mock'))

afterEach(() => {
  jest.clearAllMocks()
})

describe('Power Cut Curved Banner', () => {
  mockRouter.push = jest.fn()
  mockRouter.back = jest.fn()

  it('should render Power Cut Curved Banner with asPath="/power-cut/list"', () => {
    mockRouter.asPath = '/power-cut/list'
    const screen = render(<PowerCutCurvedBanner {...mockProps} />)

    screen.getByText('Power Cut Curved Banner Mock Title')
    screen.getByText('Mock Power Cut Curved Banner Status')

    fireEvent.click(screen.getByText('Back'))
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
  })

  it('should render Power Cut Curved Banner with asPath="/power-cut/text-updates/submission-failure" ', () => {
    mockRouter.asPath = '/power-cut/text-updates/submission-failure'

    const screen = render(<PowerCutCurvedBanner {...mockProps} />)

    fireEvent.click(screen.getByText('Back'))
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
  })

  it('should render Power Cut Curved Banner with asPath="/" ', () => {
    mockRouter.asPath = '/'

    const screen = render(<PowerCutCurvedBanner {...mockProps} />)

    fireEvent.click(screen.getByText('Back'))
    expect(mockRouter.back).toHaveBeenCalledTimes(1)
  })
})
