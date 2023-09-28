import { fireEvent, render, waitFor, act } from '@testing-library/react'
import SafeSpaceWidget from './SafeSpaceWidget'
import React from 'react'

const mockSafeSpaceError: object = {
  widget: '',
  error: true,
  isOpen: false,
}

const mockParcelApiData: object = {
  data: { isAlive: true },
}

const axios = require('axios')
jest.mock('axios')
axios.get.mockResolvedValue(mockParcelApiData)

describe('Safe Space Widget Test', () => {
  it('should render Safe Space Widget open', async () => {
    const screen = render(<SafeSpaceWidget />)

    const element = screen.getByText('Together we can end domestic abuse')
    const elementParent = element.parentNode as HTMLInputElement

    await waitFor(() => {
      expect(element).toBeInTheDocument()
    })

    await act(async () => {
      fireEvent.click(elementParent)
    })
  })

  it('should render Safe Space Widget error', async () => {
    axios.get.mockRejectedValueOnce()
    React.useState = jest.fn().mockReturnValue([mockSafeSpaceError, jest.fn])

    const screen = render(<SafeSpaceWidget />)
  })
})
