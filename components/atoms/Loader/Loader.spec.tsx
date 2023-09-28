import Loader from './Loader'
import { render } from '@testing-library/react'

describe('Loader test', () => {
  it('shall render Loader test with initial colour', () => {
    const { getByTestId } = render(<Loader />)

    const svg = getByTestId('svg')
    expect(svg).toBeInTheDocument()
    expect(svg.firstChild).toHaveAttribute('stroke', '#27187E')
  })
})
