import PowerCutPanelTextUpdatesFailure from './PowerCutPanelTextUpdatesFailure'
import { fireEvent, render } from '@testing-library/react'
import {
  PowerCutMapContext,
  PowerCutMapState,
  PowerCutMap,
} from '_context/power-cut-map'
import { DictionaryItems } from '_types/local'
import { DictionaryItemsContext } from '_context/dictionary-items'

const mockPowerMapData: PowerCutMap = {
  mapState: { isCanNotSubscribeCurrentIncident: true },
  setMapState: jest.fn() as React.Dispatch<
    React.SetStateAction<PowerCutMapState>
  >,
} as PowerCutMap

const mockDictionaryItems: DictionaryItems = {
  ['textUpdatesCurrentFailureTitle']: 'Mock Current Failure title',
  ['textUpdatesFutureFailureTitle']: 'Mock Failure title',
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('PowerCutPanelTextUpdatesFailure test', () => {
  it('shall render PowerCutPanelTextUpdatesFailure with isCanNotSubscribeCurrentIncident set to true', () => {
    mockPowerMapData.mapState.isCanNotSubscribeCurrentIncident = true
    const { debug, getByRole, queryByText } = render(
      <DictionaryItemsContext.Provider value={mockDictionaryItems}>
        <PowerCutMapContext.Provider value={mockPowerMapData}>
          <PowerCutPanelTextUpdatesFailure />
        </PowerCutMapContext.Provider>
      </DictionaryItemsContext.Provider>
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const text = queryByText('Mock Current Failure title')
    expect(text).toBeInTheDocument()
  })

  it('shall render PowerCutPanelTextUpdatesFailure with isCanNotSubscribeCurrentIncident set to false', () => {
    mockPowerMapData.mapState.isCanNotSubscribeCurrentIncident = false
    const { debug, getByRole, queryByText } = render(
      <DictionaryItemsContext.Provider value={mockDictionaryItems}>
        <PowerCutMapContext.Provider value={mockPowerMapData}>
          <PowerCutPanelTextUpdatesFailure />
        </PowerCutMapContext.Provider>
      </DictionaryItemsContext.Provider>
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(mockPowerMapData.setMapState).toHaveBeenCalledTimes(1)
    const text = queryByText('Mock Failure title')
    expect(text).toBeInTheDocument()
  })
})
