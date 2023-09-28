import ImageCarousel from './ImageCarousel'
import { render } from '@testing-library/react'
import { ImageCarouselType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'

const mockData: ImageCarouselType = {
  __typename: ComponentsTypeName.IMAGE_CAROUSEL,
  carosuelTitle: 'What are you doing to get my power back on?',
  carosuelSubtitle:
    '<p>We are working as quickly as is safely possible to get everyone’s power back on. We have extra engineers working, more employees ready to answer your calls and we’re contacting customers who need extra support when they have no power.</p>',
  carosuelImages: [
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
    {
      url: 'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png',
      umbracoHeight: '699',
      umbracoWidth: '945',
      name: 'Danger1x3',
    },
  ],
}
describe('ImageCarousel test', () => {
  it('shall render ImageCarousel with mock props on desktop view', () => {
    const { queryByText, getByText, getAllByRole } = render(
      <ImageCarousel {...mockData} />
    )

    const title = getByText('What are you doing to get my power back on?')
    const subTitle = queryByText(
      'We are working as quickly as is safely possible to get everyone’s power back on. We have extra engineers working, more employees ready to answer your calls and we’re contacting customers who need extra support when they have no power.'
    )
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    const images = getAllByRole('img')
    expect(images[0]).toHaveAttribute(
      'src',
      'https://media.umbraco.io/dev-uk-power-networks/0rhnixrc/affinity-water.png'
    )
  })

  it('shall render ImageCarousel with mock props on mobile view', () => {
    global.innerWidth = 300
    render(<ImageCarousel {...mockData} />)
  })
})
