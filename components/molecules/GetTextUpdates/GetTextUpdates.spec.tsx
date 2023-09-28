import { DictionaryItemsProvider } from '_context/dictionary-items'
import { fireEvent, render, cleanup } from '@testing-library/react'
import * as handleTextUpdates from '_utils/handle-text-updates'
import { transformString } from '_utils/tranform-string'
import GetTextUpdates from './GetTextUpdates'
import { Address } from '_types/local'

import {
  UnplannedIncidentData,
  powerCutDictionary,
} from '_organism/IncidentCard/IncidentCard.stories'

const { incident } = UnplannedIncidentData.incidentState
const mockAddress: Address = {
  mpan: '',
  uprn: 0,
  proNumber: 0,
  houseNo: '96',
  houseName: '',
  streetName: 'Agar Grove',
  county: 'London',
  country: 'United Kingdom',
  postCode: 'NW19TL',
  dno: 4,
  supplierName: '',
  supplierNumber: '',
  isInUkpnDno: true,
}

jest.mock('_utils/handle-text-updates', () => {
  return {
    __esModule: true,
    ...jest.requireActual('_utils/handle-text-updates'),
  }
})

describe('GetTextUpdates test', () => {
  afterEach(cleanup)

  it('shall render GetTextUpdates', async () => {
    const { getByRole, getByText } = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )

    const title = getByText(
      transformString(powerCutDictionary.textUpdatesPanelTitle)
    )
    const intro = getByText(
      transformString(powerCutDictionary.textUpdatesPanelIntro)
    )
    const submitButton = getByRole('button')
    const privacyLink = getByRole('link')
    const input = getByRole('textbox')

    expect(submitButton).toBeInTheDocument()
    expect(privacyLink).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(intro).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('shall not render checkbox if address is saved in local storage', () => {
    const { queryByRole } = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )

    const checkbox = queryByRole('checkbox')
    expect(checkbox).not.toBeInTheDocument()
  })

  it('shall render checkbox if address is saved in local storage', () => {
    window.localStorage.setItem('searchedAddress', JSON.stringify(mockAddress))
    const { getByRole } = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )

    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('shall not allow submission with incorrect phone number', async () => {
    const { getByRole, findByLabelText } = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )
    const submitButton = getByRole('button')
    const input = getByRole('textbox')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeDisabled()

    fireEvent.change(input, { target: { value: '0738397876' } })
    fireEvent.blur(input)

    const errorMessage = await findByLabelText('Form field error')
    expect(errorMessage).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  it('shall allow submission with correct phone number', async () => {
    const { getByRole, queryByLabelText } = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )
    const submitButton = getByRole('button')
    const input = getByRole('textbox')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeDisabled()

    fireEvent.change(input, { target: { value: '07383978764' } })
    fireEvent.blur(input)

    const errorMessage = await queryByLabelText('Form field error')
    expect(errorMessage).not.toBeInTheDocument()
    expect(submitButton).not.toBeDisabled()
  })

  it('shall show loading state', async () => {
    const { getByRole, findByRole, debug } = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )
    const submitButton = getByRole('button')
    const input = getByRole('textbox')

    expect(submitButton).toBeInTheDocument()

    fireEvent.change(input, { target: { value: '07383978764' } })
    fireEvent.blur(input)
    fireEvent.click(submitButton)

    const loader = await findByRole('progressbar')
    expect(loader).toBeInTheDocument()
  })

  it('shall show success response state', async () => {
    const { getByRole, findByText, } = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )
    const submitButton = getByRole('button')
    const input = getByRole('textbox')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeDisabled()

    fireEvent.change(input, { target: { value: '07383978764' } })
    fireEvent.blur(input)
    fireEvent.click(submitButton)

    jest.spyOn(handleTextUpdates, 'handleTextUpdates').mockImplementationOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: { success: true },
                status: 200,
                statusText: 'success',
                headers: {},
                config: {},
              }),
            1000
          )
        )
    )

    const successMessage = await findByText(
      transformString(powerCutDictionary.successGetTextUpdatesTitle),
      {},
      { timeout: 1100 }
    )
    expect(successMessage).toBeInTheDocument()
  })

  it('shall show error response state', async () => {
    const { getByRole, queryByText, findByText} = render(
      <DictionaryItemsProvider items={powerCutDictionary}>
        <GetTextUpdates incidentId={incident?.incidentReference as string} />
      </DictionaryItemsProvider>
    )
    const submitButton = getByRole('button')
    const input = getByRole('textbox')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeDisabled()

    fireEvent.change(input, { target: { value: '07383978764' } })
    fireEvent.blur(input)
    fireEvent.click(submitButton)

    jest.spyOn(handleTextUpdates, 'handleTextUpdates').mockRejectedValue('foo')

    const successMessage = await queryByText(
      transformString(powerCutDictionary.successGetTextUpdatesTitle),
    )
    const errorMessage = await findByText(
      transformString(powerCutDictionary.failureGetTextUpdatesTitle)
    )

    expect(successMessage).not.toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })
})
