import LightboxVideoPlayer, {
  LightBoxVideoPlayerProps,
} from './LightboxVideoPlayer'
import { fireEvent, render } from '@testing-library/react'

const mockData: LightBoxVideoPlayerProps = {
  setState: jest.fn(),
}

describe('LightboxVideoPlayer test', () => {
  it('shall render LightboxVideoPlayer', async () => {
    const { findByText } = render(<LightboxVideoPlayer {...mockData} />)
    const button = await findByText('Close')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
