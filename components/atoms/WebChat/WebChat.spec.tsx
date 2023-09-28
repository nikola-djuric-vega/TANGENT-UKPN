import { GlobalChildrenItemsName, StormMode } from '_types/CMS/nodes'
import {
  UkpnGlobalContexData,
  UkpnGlobalDataContext,
} from '_context/ukpn-global-data'
import { render } from '@testing-library/react'
import { LinkType } from '_types/CMS'
import WebChat from './WebChat'
import React from 'react'

const mockUkpnGlobalData: UkpnGlobalContexData = {
  stormContainerData: {
    stormMode: StormMode.STORM,
    stormTracker: false,
  },
  fetchStormContainerData: async () => {},
  allSiteSettings: {
    enableNewWebChat: true,
    threePostcodesSearchPanelToggle: false,
    reportPowerCutLink: {
      __typename: 'mock_type',
      name: 'Mock Link',
      type: LinkType.EXTERNAL,
      url: 'mock/powercut/url',
    },
    twoCallsPanelToggle: false,
    click4AssistanceId: 'MockC4AI',
    MainNavigation: {
      __typename: GlobalChildrenItemsName.MAINNAVIGATION,
      children: {
        items: [
          {
            name: 'Mock Power Cuts',
            navigationMenu: [{ title: 'Mock Navigation Menu' }],
          },
        ],
      },
    },
  },
}

describe('WebChat Test', () => {
  it('should render WebChat with Click4AssistanceId', () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <WebChat />
      </UkpnGlobalDataContext.Provider>
    )
  })

  it('should render Webchat with no script', () => {
    render(<WebChat />)
  })
})
