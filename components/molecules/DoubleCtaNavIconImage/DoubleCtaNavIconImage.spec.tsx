import { DoubleCtaNavIconImageType } from '_types/CMS/nodes/components/UKPN'
import DoubleCtaNavIconImage from './DoubleCtaNavIconImage'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { render } from '@testing-library/react'
import { IconNames } from '_types/local'
import React from 'react'

const imagesAndLinks: DoubleCtaNavIconImageType = {
  __typename: ComponentsTypeName.NAV_ICON_ITEM,
  leftImage: {
    url: 'https://i.picsum.photos/id/26/200/200.jpg?hmac=A1fbIskzMWVQs1JuyIsJXYGuCgqVwevLXT4YaIJM3Rk',
    name: 'left image',
  },
  leftButtonLink: {
    url: 'http://google.com',
    name: 'Find out more',
    type: LinkType.EXTERNAL,
  },
  rightButtonLink: {
    url: 'http://google.com',
    name: 'Find out more',
    type: LinkType.EXTERNAL,
  },
  rightImage: {
    url: 'https://i.picsum.photos/id/340/200/300.jpg?hmac=JIWzQMzudGQJ5ZI2GIRg4NTwRI4fwA8k8xcnMvEmwcQ',
    name: 'left image',
  },
  doubleCtaWithImgTitle: 'Our Pledge',
  doubleCtaWithImgSubTitle:
    'Our campaign aims to support safe working, promote safe behaviours and encourage the sharing of information and knowledge and highlight the real risks of coming into contact with electricity.',
}

const rightImageOnly: DoubleCtaNavIconImageType = {
  __typename: ComponentsTypeName.NAV_ICON_ITEM,
  rightImage: {
    url: 'https://i.picsum.photos/id/340/200/300.jpg?hmac=JIWzQMzudGQJ5ZI2GIRg4NTwRI4fwA8k8xcnMvEmwcQ',
    name: 'left image',
  },
}

const leftImageOnly: DoubleCtaNavIconImageType = {
  __typename: ComponentsTypeName.NAV_ICON_ITEM,
  leftImage: {
    url: 'https://i.picsum.photos/id/26/200/200.jpg?hmac=A1fbIskzMWVQs1JuyIsJXYGuCgqVwevLXT4YaIJM3Rk',
    name: 'left image',
  },
}

const iconsOnly: DoubleCtaNavIconImageType = {
  __typename: ComponentsTypeName.NAV_ICON_ITEM,
  leftIcon: IconNames.ICON_POWER_CABLES,
  rightIcon: IconNames.ICON_POWER_CABLES,
}

const iconsAndsLinks: DoubleCtaNavIconImageType = {
  __typename: ComponentsTypeName.NAV_ICON_ITEM,
  leftIcon: IconNames.ICON_POWER_CABLES,
  rightIcon: IconNames.ICON_POWER_CABLES,
  leftButtonLink: {
    url: 'http://google.com',
    name: 'Find out more',
    type: LinkType.EXTERNAL,
  },
  rightButtonLink: {
    url: 'http://google.com',
    name: 'Find out more',
    type: LinkType.EXTERNAL,
  },
}

const linksTitleText: DoubleCtaNavIconImageType = {
  __typename: ComponentsTypeName.NAV_ICON_ITEM,
  leftButtonLink: {
    url: 'http://google.com',
    name: 'left button',
    type: LinkType.EXTERNAL,
  },
  rightButtonLink: {
    url: 'http://google.com',
    name: 'right button',
    type: LinkType.EXTERNAL,
  },
  leftTitle: 'left title',
  rightTitle: 'right title',
  leftText: 'left text',
  rightText: 'right text',
}

describe('DoubleCtaNavIconImage test', () => {
  it('should render DoubleCtaNavIconImage component with images and links', () => {
    const { getAllByRole } = render(
      <DoubleCtaNavIconImage {...imagesAndLinks} />
    )
    const image = getAllByRole('img')
    expect(image.length).toBe(2)
    expect(image[0]).toHaveAttribute(
      'src',
      'https://i.picsum.photos/id/26/200/200.jpg?hmac=A1fbIskzMWVQs1JuyIsJXYGuCgqVwevLXT4YaIJM3Rk'
    )
    expect(image[1]).toHaveAttribute(
      'src',
      'https://i.picsum.photos/id/340/200/300.jpg?hmac=JIWzQMzudGQJ5ZI2GIRg4NTwRI4fwA8k8xcnMvEmwcQ'
    )
    const links = getAllByRole('link')
    expect(links.length).toBe(4)
    expect(links[0]).toHaveAttribute('href', 'http://google.com')
    expect(links[1]).toHaveAttribute('href', 'http://google.com')
    expect(links[2]).toHaveAttribute('href', 'http://google.com')
    expect(links[3]).toHaveAttribute('href', 'http://google.com')
  })

  it('should render DoubleCtaNavIconImage component with right image only', () => {
    const { getByRole } = render(<DoubleCtaNavIconImage {...rightImageOnly} />)
    const image = getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'https://i.picsum.photos/id/340/200/300.jpg?hmac=JIWzQMzudGQJ5ZI2GIRg4NTwRI4fwA8k8xcnMvEmwcQ'
    )
  })

  it('should render DoubleCtaNavIconImage component with left image only', () => {
    const { getByRole } = render(<DoubleCtaNavIconImage {...leftImageOnly} />)
    const image = getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'https://i.picsum.photos/id/26/200/200.jpg?hmac=A1fbIskzMWVQs1JuyIsJXYGuCgqVwevLXT4YaIJM3Rk'
    )
  })

  it('should render DoubleCtaNavIconImage component with icons only', () => {
    const { getByTestId } = render(<DoubleCtaNavIconImage {...iconsOnly} />)
    const svgLeftItem = getByTestId('leftIcon')
    const svgRightItem = getByTestId('rightIcon')
    expect(svgLeftItem).toBeInTheDocument()
    expect(svgRightItem).toBeInTheDocument()
  })

  it('should render DoubleCtaNavIconImage component with icons and links', () => {
    const { getAllByRole } = render(
      <DoubleCtaNavIconImage {...iconsAndsLinks} />
    )
    const links = getAllByRole('link')
    expect(links.length).toBe(4)
    expect(links[0]).toHaveAttribute('href', 'http://google.com')
    expect(links[1]).toHaveAttribute('href', 'http://google.com')
    expect(links[2]).toHaveAttribute('href', 'http://google.com')
    expect(links[3]).toHaveAttribute('href', 'http://google.com')
  })

  it('should render DoubleCtaNavIconImage component with links, title and text', () => {
    const { getByText } = render(<DoubleCtaNavIconImage {...linksTitleText} />)
    const leftButton = getByText('left button')
    const rightButton = getByText('right button')
    const leftTitle = getByText('left title')
    const rightTitle = getByText('right title')
    const leftText = getByText('left text')
    const rightText = getByText('right text')
    expect(leftButton).toBeInTheDocument()
    expect(rightButton).toBeInTheDocument()
    expect(leftTitle).toBeInTheDocument()
    expect(rightTitle).toBeInTheDocument()
    expect(leftText).toBeInTheDocument()
    expect(rightText).toBeInTheDocument()
  })

  it('should render DoubleCtaNavIconImage component with title and subtitle', () => {
    const { getByText } = render(<DoubleCtaNavIconImage {...imagesAndLinks} />)

    const title = getByText(`${imagesAndLinks.doubleCtaWithImgTitle}`)
    const subtitle = getByText(`${imagesAndLinks.doubleCtaWithImgSubTitle}`)

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
