import UkpnPaginationControls, {
  UkpnPaginationControlsProps,
} from './UkpnPaginationControls'
import { fireEvent, render } from '@testing-library/react'
import mockRouter from 'next-router-mock'

const mockData: UkpnPaginationControlsProps = {
  pages: 3,
}

jest.mock('next/router', () => require('next-router-mock'))

describe('UkpnPaginationControls test', () => {
  mockRouter.push = jest.fn()
  global.scrollTo = jest.fn()

  it('shall render UkpnPaginationControls starting page 1', async () => {
    mockRouter.query = { page: '1' }
    const { getByRole } = render(<UkpnPaginationControls {...mockData} />)

    const previous = getByRole('button', { name: 'Previous' })
    const next = getByRole('button', { name: 'Next..' })
    expect(previous).toBeInTheDocument()
    expect(next).toBeInTheDocument()
    expect(previous).toHaveAttribute('disabled')
    fireEvent.click(next)
  })

  it('shall render UkpnPaginationControls starting page 2', async () => {
    mockRouter.query = { page: '2' }
    const { getByTestId } = render(<UkpnPaginationControls {...mockData} />)
    const previous = getByTestId('previous')
    const next = getByTestId('next')
    expect(previous).toBeInTheDocument()
    expect(next).toBeInTheDocument()

    fireEvent.click(previous)
    fireEvent.click(previous)
    fireEvent.click(next)
  })

  it('shall render UkpnPaginationControls starting page 3', async () => {
    mockRouter.query = { page: '3' }
    const { getByTestId } = render(<UkpnPaginationControls {...mockData} />)
    const previous = getByTestId('previous')
    const next = getByTestId('next')
    expect(previous).toBeInTheDocument()
    expect(next).toBeInTheDocument()

    expect(next).toHaveAttribute('disabled')
  })
})
