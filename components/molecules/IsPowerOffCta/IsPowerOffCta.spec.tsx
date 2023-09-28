import { fireEvent, render } from '@testing-library/react'
import IsPowerOffCta from './IsPowerOffCta'
import { IsPowerOffCTAType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { PowerCut, PowerCutContext } from '_context/power-cut'
import { IconNames } from '_types/local'

jest.mock('next/router', () => ({
  useRouter: () => {
    return {
      push: jest.fn(),
    }
  },
}))

const mockState: PowerCut = {
  powerCutState: {
    isMenuOpen: false,
    isSearchOpen: false,
    wasMenuOpen: false,
    disableRPCButton: true,
  },
  setPowerCutState: () => {},
  fetchRpcToggle: async () => undefined,
}

const mockData: IsPowerOffCTAType = {
  __typename: ComponentsTypeName.IS_POWER_OFF_CTA,
  title: 'Is your power off?',
  icon: IconNames.ICO_POWER_CUT,
  body: '<p>Fill in this simple form to let us know.</p>',
  link: {
    name: 'Report power cut',
    type: LinkType.EXTERNAL,
    url: 'http://google.com',
  },
}

describe('IsPowerOffCta test', () => {
  it('shall render isPowerOffCta with content', () => {
    const { getByRole, getByText } = render(<IsPowerOffCta {...mockData} />)

    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(getByText('Is your power off?')).toBeInTheDocument()
    expect(
      getByText('Fill in this simple form to let us know.')
    ).toBeInTheDocument()
    expect(getByText('Is your power off?')).toBeInTheDocument()
  })

  it('shall render isPowerOffCta with null', () => {
    render(
      <PowerCutContext.Provider value={mockState}>
        <IsPowerOffCta {...mockData} />
      </PowerCutContext.Provider>
    )
  })
})
