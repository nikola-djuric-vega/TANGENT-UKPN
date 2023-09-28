import { PowerCutMapProvider, usePowerCutMap } from '_context/power-cut-map'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { mockPlannedIncident } from './mock-planned-incident'
import PowerCutPanelPlanned from './PowerCutPanelPlanned'
import React, { ReactNode, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'

const mockDictionaryItems = {
  plannedWorkIntroduction: '<p>Power will be</p>',
  plannedWorkSwitchedOff: '<p>Switched off</p>',
  plannedWorkUnknownTime: '<p>Unknown time</p>',
  plannedWorkBackOn: '<p>Back on between</p>',
  plannedWorkCustomersAffected: '<p>Customers affected</p>',
  plannedWorkThousandsAffected: '<p>Thousands affected</p>',
  plannedWorkZeroAffected: '<p>No customers affected</p>',
  plannedWorkPostcodeAffected: '<p>Postcode affected</p>',
  plannedWorkPostcodesAffected: '<p>Postcodes affected</p>',
  reasonForThisPlannedWorkHeader: '<p>Why do we carry out planned work?</p>',
}

const StateWrapper = ({ children }: { children: ReactNode }) => {
  const { setMapState } = usePowerCutMap()

  useEffect(() => {
    setMapState((prev) => ({
      ...prev,
      activeIncident: mockPlannedIncident,
    }))
  }, [])

  return <>{children}</>
}

export default {
  title: 'Molecules/PowerCutPanelPlanned',
  component: PowerCutPanelPlanned,
} as Meta

const Template: Story = (args) => (
  <PowerCutMapProvider>
    <DictionaryItemsProvider items={mockDictionaryItems}>
      <StateWrapper>
        <PowerCutPanelPlanned incident={null} />
      </StateWrapper>
    </DictionaryItemsProvider>
  </PowerCutMapProvider>
)

export const Default = Template.bind({})
