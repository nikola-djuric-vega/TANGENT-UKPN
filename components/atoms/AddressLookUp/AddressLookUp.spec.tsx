import AddressLookup, { AddressLookUpProps } from './AddressLookUp'
import { mockDataAddressLookup } from './mock-data-test'
import axios from 'axios'

import {
  waitForElementToBeRemoved,
  fireEvent,
  cleanup,
  waitFor,
  render,
} from '@testing-library/react'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockProps: AddressLookUpProps = {
  placeholder: 'Search an address',
  id: 'test-address-lookup',
}

describe('Address lookup component test', () => {
  afterEach(cleanup)

  beforeAll(() => {
    mockedAxios.create.mockImplementation(() => mockedAxios)
    mockedAxios.get.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(mockDataAddressLookup), 1000)
        )
    )
  })

  it('should render initial search input', async () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <AddressLookup {...mockProps} />
    )
    const input = getByPlaceholderText(mockProps.placeholder)
    const button = getByLabelText('search')
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should open pop up by clicking input', async () => {
    const { getByPlaceholderText, findByRole } = render(
      <AddressLookup {...mockProps} />
    )
    const input = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(input)
    const popUp = await findByRole('dialog')
    await waitFor(() => {
      expect(popUp).toBeInTheDocument()
    })
  })

  it('should open pop up by clicking button', async () => {
    const { getByLabelText, findByRole } = render(
      <AddressLookup {...mockProps} />
    )
    const button = getByLabelText('search')
    fireEvent.click(button)
    const popUp = await findByRole('dialog')

    expect(popUp).toBeInTheDocument()
  })

  it('should close pop up by clicking close button', async () => {
    const { getByLabelText, findByLabelText, queryByRole } = render(
      <AddressLookup {...mockProps} />
    )
    const button = getByLabelText('search')
    fireEvent.click(button)
    const closeButton = await findByLabelText('close')
    fireEvent.click(closeButton)

    await waitForElementToBeRemoved(() => queryByRole('dialog'))
    expect(queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows all items in pop up ', async () => {
    const {
      findByPlaceholderText,
      getByPlaceholderText,
      findAllByLabelText,
      findByLabelText,
    } = render(<AddressLookup {...mockProps} />)
    const input = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(input)

    const mainSearch = await findByPlaceholderText('Enter a postcode here')
    // const showMapButton = await findByLabelText('find location')
    const searchButtons = await findAllByLabelText('search')
    const closeButton = await findByLabelText('close')

    // expect(showMapButton).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    expect(mainSearch).toBeInTheDocument()
    expect(searchButtons).toHaveLength(2)
    expect(input).toBeInTheDocument()
  })

  it('should show error if incorrect postcode is used', async () => {
    const invalidPostcode = 'A'
    const { findByPlaceholderText, getByPlaceholderText, findByLabelText } =
      render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)
    const mainSearch = (await findByPlaceholderText(
      'Enter a postcode here'
    )) as HTMLInputElement

    fireEvent.change(mainSearch, { target: { value: invalidPostcode } })
    expect(mainSearch.value).toBe(invalidPostcode)
    const errorMessage = await findByLabelText(
      'Address error',
      {},
      { timeout: 1500 }
    )
    expect(errorMessage).toBeInTheDocument()
  })

  it('should shows loading state', async () => {
    const { findByPlaceholderText, getByPlaceholderText, findByRole } = render(
      <AddressLookup {...mockProps} />
    )

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)
    const mainSearch = (await findByPlaceholderText(
      'Enter a postcode here'
    )) as HTMLInputElement

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    expect(mainSearch.value).toBe(mockDataAddressLookup.validPostcode)
    const loader = await findByRole('progressbar', {}, { timeout: 1500 })
    expect(loader).toBeInTheDocument()
  })

  it('should shows results', async () => {
    const {
      findByPlaceholderText,
      getByPlaceholderText,
      findAllByRole,
      findByRole,
    } = render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)
    const mainSearch = (await findByPlaceholderText(
      'Enter a postcode here'
    )) as HTMLInputElement

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    const addresses = await findAllByRole('option', {}, { timeout: 2600 })
    const addressesContainer = await findByRole('list', {}, { timeout: 2600 })

    expect(addresses).toHaveLength(mockDataAddressLookup.data.addresses.length)
    expect(addressesContainer).toBeInTheDocument()
    expect(mockedAxios.get).toBeCalled()
  })

  it('should show DNO message', async () => {
    const {
      findByPlaceholderText,
      getByPlaceholderText,
      findByLabelText,
      findAllByRole,
    } = render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)
    const mainSearch = (await findByPlaceholderText(
      'Enter a postcode here'
    )) as HTMLInputElement

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    const addresses = await findAllByRole('option', {}, { timeout: 2600 })
    fireEvent.click(addresses[0])
    const dno = await findByLabelText('dno')
    expect(dno).toBeInTheDocument()
  })

  it('should close the pop-up on interaction', async () => {
    const {
      findByPlaceholderText,
      getByPlaceholderText,
      findAllByRole,
      queryByRole,
    } = render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)
    const mainSearch = (await findByPlaceholderText(
      'Enter a postcode here'
    )) as HTMLInputElement

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    const addresses = await findAllByRole('option', {}, { timeout: 2600 })
    fireEvent.click(addresses[1])
    await waitForElementToBeRemoved(() => queryByRole('dialog'))
  })

  it('should show recent searches', async () => {
    const { getByPlaceholderText, findAllByRole } = render(
      <AddressLookup {...mockProps} />
    )

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)

    const recentSearches = await findAllByRole('option')
    expect(recentSearches).toHaveLength(1)
  })

  it('should go back to initial state if user clicks on the arrow', async () => {
    const { getByPlaceholderText, findByLabelText, findByPlaceholderText } =
      render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)

    const mainSearch = (await findByPlaceholderText(
      'Enter a postcode here'
    )) as HTMLInputElement

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    const backArrow = await findByLabelText('back', {}, { timeout: 2600 })
    expect(backArrow).toBeInTheDocument()
    fireEvent.click(backArrow)
    expect(backArrow).not.toBeInTheDocument()
  })

  it('should reset state by pressing the button inside input', async () => {
    const {
      findByPlaceholderText,
      getByPlaceholderText,
      findByLabelText,
      findByRole,
    } = render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)

    const mainSearch = (await findByPlaceholderText(
      'Enter a postcode here'
    )) as HTMLInputElement

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    const resetSearch = await findByLabelText(
      'reset search',
      {},
      { timeout: 2600 }
    )
    const addressesContainer = await findByRole('list', {}, { timeout: 2600 })
    fireEvent.click(resetSearch)
    expect(mainSearch).toHaveValue('')
    expect(addressesContainer).not.toBeInTheDocument()
  })

  // it('should go back to initial state if user clicks on the arrow from the map', async () => {
  //   const { getByPlaceholderText, findByLabelText } = render(
  //     <AddressLookup {...mockProps} />
  //   )

  //   const initInput = getByPlaceholderText(mockProps.placeholder)
  //   fireEvent.focus(initInput)

  //   // const showMapButton = await findByLabelText('find location')
  //   fireEvent.click(showMapButton)
  //   const backArrow = await findByLabelText('back')
  //   fireEvent.click(backArrow)
  //   expect(backArrow).not.toBeInTheDocument()
  // })
})
