import { PowerCutUnsubscribeTextUpdates as PowerCutUnsubscribeTextUpdatesType } from '_types/CMS/pages'
import PowerCutUnsubscribeTextUpdates from './PowerCutUnsubscribeTextUpdates'
import { LinkType, PageTypeNames } from '_types/CMS'
import { render } from '@testing-library/react'
import { IconNames } from '_types/local'

const mockData: PowerCutUnsubscribeTextUpdatesType = {
  unsubscribeForTextUpdatesTitle: 'Get future text message updates',
  unsubscribeForTextUpdatesIcon: IconNames.EIGHTY_PX_MOBILE,
  unsubscribeForTextUpdatesGdpr: 'Privacy',
  children: {
    items: [
      {
        __typename: PageTypeNames.CONFIRMATION_SUCCESS,
        type: LinkType.CONTENT,
        name: 'SuccessPage',
        url: '/success-page',
      },
      {
        __typename: PageTypeNames.CONFIRMATION_FAILURE,
        type: LinkType.CONTENT,
        name: 'FailurePage',
        url: '/failure-page',
      },
    ],
  },
  __typename: PageTypeNames.POWER_CUT_UNSUBSCRIBE_TEXT_UPDATES,
  name: '',
  url: '',
  id: '',
  contentTypeAlias: '',
}

describe('PowerCutUnsubscribeTextUpdates test', () => {
  it('shall render PowerCutUnsubscribeTextUpdates', () => {
    const { queryByText } = render(
      <PowerCutUnsubscribeTextUpdates {...mockData} />
    )

    const title = queryByText('Get future text message updates')
    const gdpr = queryByText('Privacy')
    const unsubscribeBtn = queryByText('Unsubscribe')

    expect(title).toBeInTheDocument()
    expect(gdpr).toBeInTheDocument()
    expect(unsubscribeBtn).toBeInTheDocument()
  })
})

// todo - mock axios
