import ConfirmationPage from './ConfirmationPage'
import { render } from '@testing-library/react'
import { ConfirmationSuccess } from '_types/CMS/pages'
import { LinkType, PageTypeNames } from '_types/CMS'
import { IconNames } from '_types/local'

const mockData: ConfirmationSuccess = {
  __typename: PageTypeNames.CONFIRMATION_SUCCESS,
  title: 'Register for text updates success',
  icon: IconNames.EIGHTY_PX_MOBILE,
  copy: '<p>Thanks for signing up for text updates, we’ll text you shortly.</p>',
  cTA: {
    type: LinkType.CONTENT,
    name: 'Map',
    url: '/ukpn/power-cut/map/',
  },
  name: 'test name',
  url: 'http://google.com',
  id: '123',
  contentTypeAlias: '',
}
describe('ConfirmationPage test ', () => {
  it('shall render ConfirmationPage with mock props', () => {
    const { getByText } = render(<ConfirmationPage {...mockData} />)
    const title = getByText('Register for text updates success')
    const copy = getByText(
      'Thanks for signing up for text updates, we’ll text you shortly.'
    )
    const cta = getByText('Map')
    expect(title).toBeInTheDocument()
    expect(copy).toBeInTheDocument()
    expect(cta).toBeInTheDocument()
  })
})
