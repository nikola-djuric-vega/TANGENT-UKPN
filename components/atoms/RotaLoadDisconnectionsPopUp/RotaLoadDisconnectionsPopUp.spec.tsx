import { LinkAppearance, ButtonColors, LinkType } from '_types/CMS'
import { GlobalChildrenItemsName } from '_types/CMS/nodes'
import { transformString } from '_utils'

import RotaLoadDisconnectionsPopUp, {
  RotaLoadDisconnectionsPopUpProps,
} from './RotaLoadDisconnectionsPopUp'

import {
  waitForElementToBeRemoved,
  fireEvent,
  cleanup,
  render,
} from '@testing-library/react'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const mockProps: RotaLoadDisconnectionsPopUpProps = {
  data: {
    powerSharingEnabled: true,
    powerSharingPopUpIcon: 'ico_list',
    powerSharingPopUpTitle: 'Power sharing rotation schedule',
    powerSharingPopUpMessage:
      '<p class="">Customers across the country may experience temporary power cuts this winter which are part of a national power sharing schedule led by National Grid. To find out if and when you’ll be impacted, please check the schedule for your area.</p>',
    powerSharingPopUpButtons: [
      {
        uRL: {
          name: 'Check my schedule',
          url: 'https://mcrs-uat-rld.tangentlabs.co.uk/',
          type: LinkType.EXTERNAL,
        },
        cTAType: ButtonColors.LIGHT,
        __typename: LinkAppearance.PRIMARY,
      },
      {
        uRL: {
          name: 'Return to homepage',
          url: '/ukpn/',
          type: LinkType.EXTERNAL,
        },
        cTAType: ButtonColors.DARK,
        __typename: LinkAppearance.SECONDARY,
      },
    ],
    __typename: GlobalChildrenItemsName.POWERSHARING,
  },
}

describe('Rota Load Disconnections PopUp component test', () => {
  afterAll(cleanup)
  it('should render heading and body text', async () => {
    const { findByText, findByLabelText, queryByRole } = render(
      <RotaLoadDisconnectionsPopUp {...mockProps} />
    )

    const heading = await findByText(
      mockProps.data?.powerSharingPopUpTitle as string,
      {},
      { timeout: 1500 }
    )
    const bodyText = await findByText(
      transformString(mockProps.data?.powerSharingPopUpMessage as string),
      {},
      { timeout: 1500 }
    )
    expect(heading).toBeInTheDocument()
    expect(bodyText).toBeInTheDocument()

    const checkMySchedule = await findByText(
      'Check my schedule',
      {},
      { timeout: 1500 }
    )
    expect(checkMySchedule).toBeInTheDocument()

    const returnToHomepage = await findByText(
      'Return to homepage',
      {},
      { timeout: 1500 }
    )
    expect(returnToHomepage).toBeInTheDocument()

    const closeButton = await findByLabelText('close')
    fireEvent.click(closeButton)

    await waitForElementToBeRemoved(() => queryByRole('dialog'))
    expect(queryByRole('dialog')).not.toBeInTheDocument()
  })
})
