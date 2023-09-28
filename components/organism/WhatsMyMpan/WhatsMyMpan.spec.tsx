import { WhatsMyMpanType } from '_types/CMS/nodes/components/UKPN/whats-my-mpan'
import { act, fireEvent, render } from '@testing-library/react'
import WhatsMyMpan, { MpanCheck } from './WhatsMyMpan'
import { ComponentsTypeName } from '_types/CMS'
import React from 'react'

jest.mock('lodash/debounce', () => jest.fn)

const mockProps: WhatsMyMpanType = {
  __typename: ComponentsTypeName.WHATS_MY_MPAN,
  leftTitle: 'Mock Whats My Mpan Title',
  leftBlurb: 'Mock Whats My Mpan SubTitle',
  rightDesktopImage: {
    name: 'Mock rightDesktopImage',
    url: 'rightDesktopImage/media',
  },
  rightMobileImage: {
    name: 'Mock rightMobileImage',
    url: 'rightMobileImage/media',
  },
  successfulTitle: '',
  successfulBlurb: '',
  removeBottomMargin: false,
  checkboxText: 'Mock is Bill Payer',
  errorTitle: 'Mock Error Title',
  errorBlurb: 'Mock Error Blurb',
}

const mockMpanCheckOk: MpanCheck = { isSuccessful: true, hasFailed: false }
const mockMpanCheckKo: MpanCheck = { isSuccessful: false, hasFailed: true }

describe('Whats My MPAN', () => {
  it('Render Whats My MPAN Main', async () => {
    const screen = render(<WhatsMyMpan {...mockProps} />)

    const element1 = screen.getByText('Mock Whats My Mpan Title')
    const element2 = screen.getByAltText('Mock rightDesktopImage')
    const element3 = screen.getByText('Mock Whats My Mpan SubTitle')
    const elementEmail = screen.getByText('Email address')
    const elementEmailIn = elementEmail.previousSibling as HTMLInputElement
    const elementChkBx = screen.getAllByRole('checkbox')
    const elementSbmt = screen.getByText('Submit')
    const elementSearchDropdown = screen.getByRole('combobox')
    const elementCloseSearch =
      elementSearchDropdown.nextSibling as HTMLInputElement

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(elementCloseSearch)
    })

    await act(async () => {
      fireEvent.change(elementEmailIn, {
        target: { value: 'wrongEmail' },
      })
    })

    await act(async () => {
      fireEvent.click(elementChkBx[0])
    })

    await act(async () => {
      fireEvent.change(elementEmailIn, {
        target: { value: 'mock@email.com' },
      })
    })
    expect(elementEmailIn.value).toBe('mock@email.com')

    fireEvent.click(elementSearchDropdown)

    fireEvent.click(elementSbmt)

    //Test Resize
    global.innerWidth = 380
  })

  it('Render Whats My MPAN OK', async () => {
    React.useState = jest.fn().mockReturnValue([mockMpanCheckOk, jest.fn])

    const screen = render(<WhatsMyMpan {...mockProps} />)

    const element1 = screen.getByText('Mock Whats My Mpan Title')
    expect(element1).toBeInTheDocument()
  })

  it('Render Whats My MPAN KO', async () => {
    React.useState = jest.fn().mockReturnValue([mockMpanCheckKo, jest.fn])

    const screen = render(<WhatsMyMpan {...mockProps} />)

    const element1 = screen.getByText('Mock Whats My Mpan Title')
    expect(element1).toBeInTheDocument()
  })
})
