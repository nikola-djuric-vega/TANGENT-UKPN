import React, { ReactNode, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import PowerCutPanelRestored from './PowerCutPanelRestored'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { PowerCutMapProvider, usePowerCutMap } from '_context/power-cut-map'
import { mockRestoredIncident } from './mock-restored-incident'

const mockDictionaryItems = {
  powerBackOnAllCustomers: '<p>We restored a power cut in your area at:</p>',
  restoredTimeUnspecified: '<p>Unspecified</p>',
  restoredPowerStillOff: '<p>Are you still without power?</p>',
  restoredReportIt: '<p>Report a power cut</p>',
  restoredInformationAboutPowerCut: '<p>Information about the power cut</p>',
  restoredWorkCustomersAffected: '<p>Customers affected</p>',
  restoredWorkThousandsAffected: '<p>Over 5000</p>',
  restoredWorkZeroAffected: '<p>Over 3</p>',
  restoredWorkPostcodeAffected: '<p>Postcode affected</p>',
  restoredWorkPostcodesAffected: '<p>PostcodesAffected</p>',
  restoredCustomerCalls: '<p>Customer calls received</p>',
  restoredReasonForThePowerCut: '<p>Reason for the power cut</p>',
  restoredPowerCutReportedAt: '<p>This power cut was reported at</p>',
  restoredOn: '<p>on</p>',
}

const StateWrapper = ({ children }: { children: ReactNode }) => {
  const { setMapState } = usePowerCutMap()

  useEffect(() => {
    setMapState((prev) => ({
      ...prev,
      activeIncident: mockRestoredIncident,
    }))
  }, [])

  return <>{children}</>
}

export default {
  title: 'Molecules/PowerCutPanelRestored',
  component: PowerCutPanelRestored,
} as Meta

const Template: Story = (args) => (
  <PowerCutMapProvider>
    <DictionaryItemsProvider items={mockDictionaryItems}>
      <StateWrapper>
        <PowerCutPanelRestored incident={null} />
      </StateWrapper>
    </DictionaryItemsProvider>
  </PowerCutMapProvider>
)

export const Default = Template.bind({})
