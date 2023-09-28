import { ContactCardData, StormPrepareData } from './StormLandingBanner.stories'
import { fireEvent, render, waitFor } from '@testing-library/react'
import {
  UkpnGlobalContexData,
  UkpnGlobalDataContext,
} from '_context/ukpn-global-data'
import { transformString } from '_utils/tranform-string'
import StormLandingBanner from './StormLandingBanner'
import { trimName } from '_utils/trim-name'
import { LinkType } from '_types/CMS'
import {
  GlobalChildrenItemsName,
  StormMode,
  UkpnGlobalData,
} from '_types/CMS/nodes'

const mockUkpnGlobalData: UkpnGlobalContexData = {
  stormContainerData: {
    stormMode: StormMode.STORM,
    stormTracker: false,
  },
  fetchStormContainerData: async () => {},
  allSiteSettings: {
    enableNewWebChat: false,
    threePostcodesSearchPanelToggle: false,
    reportPowerCutLink: {
      __typename: 'mock_type',
      name: 'Mock Link',
      type: LinkType.EXTERNAL,
      url: 'mock/powercut/url',
    },
    twoCallsPanelToggle: false,
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
    GlobalHeader: {
      __typename: GlobalChildrenItemsName.HEADER,
      secondaryNavigationLinks: [
        {
          name: 'Mock Secondary Navigation Link 1',
          type: LinkType.EXTERNAL,
          url: 'mock.sec/nav/url',
        },
      ],
    },
  },
}

const mockUkpnGlobalDataNoStorm: UkpnGlobalContexData = {
  stormContainerData: {
    stormMode: StormMode.NORMAL,
    stormTracker: false,
  },
  fetchStormContainerData: async () => {},
  allSiteSettings: {
    stormMode: StormMode.NORMAL,
    enableNewWebChat: false,
    threePostcodesSearchPanelToggle: false,
    reportPowerCutLink: {
      __typename: 'mock_type',
      name: 'Mock Link',
      type: LinkType.EXTERNAL,
      url: 'mock/powercut/url',
    },
    twoCallsPanelToggle: false,
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
    GlobalHeader: {
      __typename: GlobalChildrenItemsName.HEADER,
      secondaryNavigationLinks: [
        {
          name: 'Mock Secondary Navigation Link 1',
          type: LinkType.EXTERNAL,
          url: 'mock.sec/nav/url',
        },
      ],
    },
  },
}

describe('StormLandingBanner test', () => {
  it('shall render StormLandingBanner with mock data, storm mode ON on desktop', async () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <StormLandingBanner {...StormPrepareData} />
      </UkpnGlobalDataContext.Provider>
    )
    // TODO
  })
})

describe('Storm Landing Banner test', () => {
  it('STORM, mobile view shall have read more - read less buttons and toggle them', async () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <StormLandingBanner {...StormPrepareData} />
      </UkpnGlobalDataContext.Provider>
    )

    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    const readMoreButton = screen.getByRole('button', {
      name: 'Read more',
    })
    expect(readMoreButton).toBeInTheDocument()
    await waitFor(() => {
      fireEvent.click(readMoreButton)
    })

    const readLessButton = screen.getByRole('button', {
      name: 'Read less',
    })
    await waitFor(() => {
      expect(readLessButton).toBeInTheDocument()
      fireEvent.click(readLessButton)
    })

    await waitFor(() => {
      expect(readMoreButton).toBeInTheDocument()
    })
  })

  it('STORM, desktop view shall have read more - read less buttons and toggle them', async () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <StormLandingBanner {...StormPrepareData} />
      </UkpnGlobalDataContext.Provider>
    )
    global.innerWidth = 1124
    global.dispatchEvent(new Event('resize'))

    const readMoreButton = screen.getByRole('button', {
      name: 'Read more',
    })
    expect(readMoreButton).toBeInTheDocument()
    await waitFor(() => {
      fireEvent.click(readMoreButton)
    })

    const readLessButton = screen.getByRole('button', {
      name: 'Read less',
    })
    await waitFor(() => {
      expect(readLessButton).toBeInTheDocument()
      fireEvent.click(readLessButton)
    })

    await waitFor(() => {
      expect(readMoreButton).toBeInTheDocument()
    })
  })
})

describe('StormLandingBanner test', () => {
  it('NO STORM, desktop view ', async () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalDataNoStorm}>
        <StormLandingBanner {...StormPrepareData} />
      </UkpnGlobalDataContext.Provider>
    )

    const title = screen.getByText(`${StormPrepareData.title}`)
    const summary = screen.getByText(
      /We are currently monitoring the weather closely and are in regular contact with the Met/i
    )
    const powerOffTitle = screen.getByText(`${StormPrepareData.powerOffTitle}`)
    const powerOffSubtitle = screen.getByText(
      `${StormPrepareData.powerOffSubtitle}`
    )
    const link1 = screen.getByText(
      `${StormPrepareData.links?.[0].linkURL?.name}`
    )
    const link2 = screen.getByText(
      `${StormPrepareData.links?.[1].linkURL?.name}`
    )

    expect(title).toBeInTheDocument()
    expect(summary).toBeInTheDocument()
    expect(powerOffTitle).toBeInTheDocument()
    expect(powerOffSubtitle).toBeInTheDocument()
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
  })
})

describe('StormLandingBanner test', () => {
  it('NO STORM, mobile view ', async () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalDataNoStorm}>
        <StormLandingBanner {...StormPrepareData} />
      </UkpnGlobalDataContext.Provider>
    )
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    const title = screen.getByText(`${StormPrepareData.title}`)
    const summary = screen.getByText(
      /We are currently monitoring the weather closely and are in regular contact with the Met/i
    )
    const powerOffTitle = screen.getByText(`${StormPrepareData.powerOffTitle}`)
    const powerOffSubtitle = screen.getByText(
      `${StormPrepareData.powerOffSubtitle}`
    )
    const link1 = screen.getByText(
      `${StormPrepareData.links?.[0].linkURL?.name}`
    )
    const link2 = screen.getByText(
      `${StormPrepareData.links?.[1].linkURL?.name}`
    )

    expect(title).toBeInTheDocument()
    expect(summary).toBeInTheDocument()
    expect(powerOffTitle).toBeInTheDocument()
    expect(powerOffSubtitle).toBeInTheDocument()
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
  })
})

describe('StormLandingBanner test', () => {
  it('STORM, Contact Card variation with content', () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <StormLandingBanner {...ContactCardData} />
      </UkpnGlobalDataContext.Provider>
    )

    const author = screen.getByText(
      trimName(`${ContactCardData.contactCard?.[0]?.author?.authorName}`)
    )
    const cardTitle = screen.getByText(
      `${ContactCardData.contactCard?.[0]?.cardTitle}`
    )

    const cardSubtitle = screen.getByText(
      transformString(`${ContactCardData.contactCard?.[0]?.cardSubtitle}`)
    )

    const cardLink = screen.getByText(
      `${ContactCardData.contactCardLink?.name}`
    )

    expect(author).toBeInTheDocument()
    expect(cardTitle).toBeInTheDocument()
    expect(cardSubtitle).toBeInTheDocument()
    expect(cardLink).toBeInTheDocument()
  })
})
