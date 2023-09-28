import { PowerCutMapProvider, usePowerCutMap } from '_context/power-cut-map'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { mockUnplannedIncident } from './mock-unplanned-incident'
import React, { ReactNode, useEffect } from 'react'
import { PowerCutPanel } from '_types/CMS/pages'
import { Story, Meta } from '@storybook/react'

import PowerCutPanelUnplanned, {
  PowerCutPanelUnplannedProps,
} from './PowerCutPanelUnplanned'

const mockDictionaryItems = {
  unplannedWorkCustomersAffected: '<p>Customers affected</p>',
  unplannedWorkThousandsAffected: '<p>Thousands affected</p>',
  unplannedWorkZeroAffected: '<p>Over 3</p>',
  unplannedWorkPostcodeAffected: '<p>Postcode affected</p>',
  unplannedWorkPostcodesAffected: '<p>Postcodes affected</p>',
  unplannedCustomerCalls: '<p>Customer calls received</p>',
}

const StateWrapper = ({ children }: { children: ReactNode }) => {
  const { setMapState } = usePowerCutMap()

  useEffect(() => {
    setMapState((prev) => ({
      ...prev,
      activeIncident: mockUnplannedIncident,
    }))
  }, [])

  return <>{children}</>
}

export default {
  title: 'Molecules/PowerCutPanelUnplanned',
  component: PowerCutPanelUnplanned,
} as Meta

const Template: Story<PowerCutPanelUnplannedProps> = ({ cmsData }) => (
  <PowerCutMapProvider>
    <DictionaryItemsProvider items={mockDictionaryItems}>
      <StateWrapper>
        <PowerCutPanelUnplanned incident={null} cmsData={cmsData} />
      </StateWrapper>
    </DictionaryItemsProvider>
  </PowerCutMapProvider>
)

export const Default = Template.bind({})
Default.args = {
  cmsData: {
    subtitle: `We're sorry for any disruption this may be causing you.`,
    eTRIntroduction: 'We estimate your power will be back on:',
    noETRFooter: `We are working to give you a more specific time for when your power will be back on. As soon as we get an update from our engineers we will display a time.`,
    eTRFooter: 'We may be able to get some customers on sooner.',
    stormReasonTitle: '<p>Why is there a power cut?</p>',
    stormReasonText: '<p>Reason for this unplanned power cut</p>',
    stormActionTitle: '<p>What are you doing to get my power back on?<p>',
    reasonTitle: '<p>Reason for this unplanned power cut</p>',
    informationNotice:
      'This information is updated in real-time and is the same information that you will receive if you call us.',
    hidePostcode: false,
    __typename: PowerCutPanel.UNPLANNED,
    isIndexed: false,
  },
}
