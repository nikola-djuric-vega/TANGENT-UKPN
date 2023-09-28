import { render, act } from '@testing-library/react'
import FormHeader, { FormHeaderProps } from './FormHeader'

const mockData: FormHeaderProps = {
  imageMobileUrl: 'images/g81/ukpn-logo-mobile.jpg',
  imageDesktopUrl: 'images/g81/ukpn-logo-desktop.jpg',
  title: 'Aplication form',
}

const mockDataWithLogoSetToTrue: FormHeaderProps = {
  imageMobileUrl: 'images/g81/ukpn-logo-mobile.jpg',
  imageDesktopUrl: 'images/g81/ukpn-logo-desktop.jpg',
  title: 'Aplication form',
  showLogo: true,
}

const mockDataWithLogoSetToFalse: FormHeaderProps = {
  imageMobileUrl: 'images/g81/ukpn-logo-mobile.jpg',
  imageDesktopUrl: 'images/g81/ukpn-logo-desktop.jpg',
  title: 'Aplication form',
  showLogo: false,
}

jest.mock('lodash/debounce', () => jest.fn)

describe('FormHeader test', () => {
  it('shall render FormHeader with original props', async () => {
    const { queryByRole, queryByText } = render(<FormHeader {...mockData} />)

    const image = queryByRole('img')
    const title = queryByText('Aplication form')
    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it('shall render FormHeader with showLogo set to false', async () => {
    const { queryByRole } = render(
      <FormHeader {...mockDataWithLogoSetToFalse} />
    )
    const image = queryByRole('img')
    expect(image).not.toBeInTheDocument()
  })

  it('shall render FormHeader with showLogo set to true and window resized to mobile view', async () => {
    const { queryByRole } = render(
      <FormHeader {...mockDataWithLogoSetToTrue} />
    )
    // check if image has correct width and height on desktop, as initial window inner width is 1024px
    const image = queryByRole('img')
    expect(image).toHaveAttribute('width', '138')
    expect(image).toHaveAttribute('height', '58')
    // resize window to 500px and check if image has correct width and height on mobile
    await act(async () => {
      global.innerWidth = 500
      global.dispatchEvent(new Event('resize'))
    })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('width', '102')
    expect(image).toHaveAttribute('height', '33')
  })
})
