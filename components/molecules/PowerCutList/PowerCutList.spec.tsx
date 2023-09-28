import { DictionaryItemsProvider } from '_context/dictionary-items'
import { act, fireEvent, render } from '@testing-library/react'
import { PowerCutListMockData } from './PowerCutListMockData'
import { dictionaryItems } from './mock-dictionary-items'
import PowerCutList from './PowerCutList'
import React from 'react'

jest.mock('lodash/debounce', () => jest.fn)
window.HTMLElement.prototype.scrollIntoView = jest.fn()

describe('Power Cut List test', () => {
  it('should render the Power Cut List, open and close filter panel by clicking "Show" button on filter panel', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    // Open filter panel
    const filterButton = screen.getByRole('button', { name: 'Filter' })
    expect(filterButton).toBeInTheDocument()
    fireEvent.click(filterButton)

    // Body to have "modal-open" class once filter panel is opened
    const body = document.querySelector('body')
    expect(body).toHaveClass('modal-open')

    // Click show results - close filter panel and remove "modal-open" class from body
    const showButton = screen.getByRole('button', { name: 'Show' })
    expect(showButton).toBeInTheDocument()
    fireEvent.click(showButton)
    expect(body).not.toHaveClass('modal-open')
  })

  it('should render the Power Cut List, open filter panel, then react to key downs or clicking outside the panel', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    // Open filter panel, add "modal-open" class to body
    const filterButton = screen.getByRole('button', { name: 'Filter' })
    fireEvent.click(filterButton)
    const body = document.querySelector('body')
    expect(body).toHaveClass('modal-open')

    // Do nothing when clicking any key but "Esc", for example "spacebar" - keep the "modal-open" class
    fireEvent.keyDown(document, { key: 'spacebar' })
    expect(body).toHaveClass('modal-open')

    // Close filter panel when clicking ESC - remove "modal-open" class
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(body).not.toHaveClass('modal-open')

    // Open filter panel and click outside the filter panel - add & remove "modal-open" class
    fireEvent.click(filterButton)
    expect(body).toHaveClass('modal-open')

    fireEvent.mouseDown(document.body)
    expect(body).not.toHaveClass('modal-open')
  })

  it('should render the Power Cut List, navigate pages', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const previousPage = screen.getByTestId('previous')
    const nextPage = screen.getByTestId('next')
    expect(previousPage).toBeInTheDocument()
    expect(nextPage).toBeInTheDocument()
    expect(previousPage).toBeDisabled()
    expect(nextPage).not.toBeDisabled()

    // navigate to next page via arrow buttons
    fireEvent.click(nextPage)
    expect(previousPage).not.toBeDisabled()

    // navigate to previous page via arrow buttons
    fireEvent.click(previousPage)
    expect(previousPage).toBeDisabled()

    // navigate to next page via pagination controls
    const nextPageButton = screen.getByLabelText('Next page')
    expect(nextPageButton).toBeInTheDocument()
    fireEvent.click(nextPageButton)
    expect(previousPage).not.toBeDisabled()

    // navigate to previous page via pagination controls
    const previousPageButton = screen.getByLabelText('Previous page')
    expect(previousPageButton).toBeInTheDocument()
    fireEvent.click(previousPageButton)
    expect(previousPage).toBeDisabled()
  })

  it('should render the Power Cut List, click sort by buttons "Time reported" & "Customers affected"', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    // Open filter panel
    const filterButton = screen.getByRole('button', { name: 'Filter' })
    const sortByCAButton = screen.getByRole('button', {
      name: 'Customers affected',
    })
    const sortByTimeButton = screen.getByRole('button', {
      name: 'Time reported',
    })
    expect(sortByTimeButton).toBeInTheDocument()
    expect(sortByCAButton).toBeInTheDocument()
    expect(filterButton).toBeInTheDocument()

    // Sort by ascending/descending "Time reported"
    fireEvent.click(sortByTimeButton)
    fireEvent.click(sortByTimeButton)

    // Sort by ascending/descending "Customers affected"
    fireEvent.click(sortByCAButton)
    fireEvent.click(sortByCAButton)
  })

  it('should render the Power Cut List, open filter panel, open custom select and change sort option', async () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    // Open filter panel
    const filterButton = screen.getByRole('button', { name: 'Filter' })
    const showButton = screen.getByRole('button', { name: 'Show' })
    expect(filterButton).toBeInTheDocument()
    fireEvent.click(filterButton)

    // Select sort option via custom select
    const selector = screen.getByLabelText('Sort by selector')
    expect(selector).toBeInTheDocument()

    // Check if default value is Date (Latest first)
    expect(screen.queryByText('Date (Latest first)')).toBeInTheDocument()

    expect(
      screen.queryByText('Customers affected (Descending)')
    ).not.toBeInTheDocument()

    // Select "Customers affected (Descending)" sort  option
    await act(async () => {
      fireEvent.keyDown(selector, { key: 'ArrowDown' })
    })

    const CADOption = screen.getByText('Customers affected (Descending)')
    fireEvent.click(CADOption)
    fireEvent.click(showButton)
    expect(
      screen.getByText('Customers affected (Descending)')
    ).toBeInTheDocument()
    expect(screen.queryByText('Date (Latest first)')).not.toBeInTheDocument()
  })

  it('should render Power Cut List, filter by postcode', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const input = screen.getByPlaceholderText('Search by postcode')
    expect(input).toBeInTheDocument()

    // Sort by Postcode without selected filter
    fireEvent.keyDown(input, { key: 'h' })
    fireEvent.keyDown(input, { key: 'w' })
    fireEvent.change(input, { target: { value: 'hw' } })
    expect(input).toHaveValue('hw')

    // Filter by "Power Cut" type and search by postcode
    const PCButton = screen.getByTestId('Power cut')
    expect(PCButton).toBeInTheDocument()
    fireEvent.click(PCButton)

    fireEvent.keyDown(input, { key: 'h' })
    fireEvent.keyDown(input, { key: 'w' })
    expect(input).toHaveValue('hw')
  })

  it('should render the Power Cut List with no incidents and display the message', () => {
    const screen = render(
      <DictionaryItemsProvider items={dictionaryItems}>
        <PowerCutList incidents={[]} extraProperties={[]} />
      </DictionaryItemsProvider>
    )
    const message = screen.getByText(
      `We're not aware of any power cuts in your area`
    )
    expect(message).toBeInTheDocument()
  })

  it('should render the Power Cut List, open filter panel, select filter, then click "Clear all" button to reset back to "All" filter as a default.', () => {
    global.innerWidth = 500
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterButton = screen.getByRole('button', { name: 'Filter' })
    const All = screen.getByLabelText('All')
    const Restored = screen.getByLabelText('Restored')
    const PowerCut = screen.getByLabelText('Power cut')
    const ClearAllButton = screen.getByRole('button', { name: 'Clear all' })

    expect(All).toBeInTheDocument()
    expect(Restored).toBeInTheDocument()
    expect(PowerCut).toBeInTheDocument()

    fireEvent.click(filterButton)
    expect(All).toBeChecked()
    expect(Restored).not.toBeChecked()
    expect(PowerCut).not.toBeChecked()

    fireEvent.click(Restored)
    fireEvent.click(PowerCut)
    expect(All).not.toBeChecked()
    expect(Restored).toBeChecked()
    expect(PowerCut).toBeChecked()

    fireEvent.click(ClearAllButton)
    expect(All).toBeChecked()
    expect(Restored).not.toBeChecked()
    expect(PowerCut).not.toBeChecked()
  })

  it('should render the Power Cut List, select couple filters, then select "All" filter which deselects previous buttons', () => {
    global.innerWidth = 1450
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const PCFilterButton = screen.getByTestId('Power cut')
    const RestoredButton = screen.getByTestId('Restored')
    const AllButton = screen.getByTestId('All')
    expect(PCFilterButton).toBeInTheDocument()
    expect(AllButton).toBeInTheDocument()
    expect(RestoredButton).toBeInTheDocument()

    expect(AllButton).toHaveAttribute('data-selected', 'true')
    expect(PCFilterButton).toHaveAttribute('data-selected', 'false')
    expect(RestoredButton).toHaveAttribute('data-selected', 'false')

    fireEvent.click(PCFilterButton)
    fireEvent.click(RestoredButton)
    expect(AllButton).toHaveAttribute('data-selected', 'false')
    expect(PCFilterButton).toHaveAttribute('data-selected', 'true')
    expect(RestoredButton).toHaveAttribute('data-selected', 'true')

    fireEvent.click(AllButton)
    expect(AllButton).toHaveAttribute('data-selected', 'true')
    expect(PCFilterButton).toHaveAttribute('data-selected', 'false')
    expect(RestoredButton).toHaveAttribute('data-selected', 'false')
  })

  it('should render the Power Cut List in mobile view, open sort panel and select "Date (Oldest first)" option', () => {
    global.innerWidth = 500
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    fireEvent.click(filterPanelButton)
    const showButton = screen.getByRole('button', { name: 'Show' })

    // Open sort panel
    const sortPanelButton = screen.getByTestId('sortPanel')
    expect(sortPanelButton).toBeInTheDocument()
    fireEvent.click(sortPanelButton)

    // Set sort filter to "Oldest first" - with no filter selected
    const oldestFirst = screen.getByRole('input', {
      name: 'Date (Oldest first)',
    })
    expect(oldestFirst).toBeInTheDocument()
    expect(oldestFirst).not.toBeChecked()
    fireEvent.click(oldestFirst)
    fireEvent.click(showButton)
    expect(oldestFirst).toBeChecked()
  })

  it('should render the Power Cut List in mobile view, open sort panel and select "Date (Latest first)" option', () => {
    global.innerWidth = 500
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    fireEvent.click(filterPanelButton)
    const showButton = screen.getByRole('button', { name: 'Show' })
    const oldestFirst = screen.getByRole('input', {
      name: 'Date (Oldest first)',
    })
    // Open sort panel
    const sortPanelButton = screen.getByTestId('sortPanel')
    expect(sortPanelButton).toBeInTheDocument()
    fireEvent.click(sortPanelButton)

    // Set sort filter to "Oldest first" - with no filter selected
    const latestFirst = screen.getByRole('input', {
      name: 'Date (Latest first)',
    })
    expect(latestFirst).toBeInTheDocument()
    expect(latestFirst).toBeChecked()

    // Select "Date (Oldest first)" option, since the "Date (Latest first)" is default value
    fireEvent.click(oldestFirst)
    // Select "Date (Latest first)" option
    fireEvent.click(latestFirst)
    // Click Show button
    fireEvent.click(showButton)
    expect(latestFirst).toBeChecked()
  })

  it('should render the Power Cut List in mobile view, open sort panel and select "Customers affected (Ascending)" option', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    const sortPanelButton = screen.getByTestId('sortPanel')
    // Open filter panel
    fireEvent.click(filterPanelButton)
    // Open sort panel
    fireEvent.click(sortPanelButton)

    // Set sort filter to "Customers affected" - with no filter selected
    const custAffecAscending = screen.getByRole('input', {
      name: 'Customers affected (Ascending)',
    })
    expect(custAffecAscending).toBeInTheDocument()
    expect(custAffecAscending).not.toBeChecked()
    // Select "Customers affected (Ascending)" option
    fireEvent.click(custAffecAscending)
    expect(custAffecAscending).toBeChecked()
  })

  it('should render the Power Cut List in mobile view, open sort panel and select "Customers affected (Descending)" option', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    const sortPanelButton = screen.getByTestId('sortPanel')
    // Open filter panel
    fireEvent.click(filterPanelButton)
    // Open sort panel
    fireEvent.click(sortPanelButton)

    // Sort by "Customers Affected Descending"
    fireEvent.click(sortPanelButton)
    const CADOption = screen.getByLabelText('Customers affected (Descending)')
    fireEvent.click(CADOption)
    expect(CADOption).toBeChecked()
  })

  it('should render the Power Cut List in mobile view, filter by "Planned work" and sort by "Oldest first"', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    const oldestFirst = screen.getByRole('input', {
      name: 'Date (Oldest first)',
    })
    const custAffecAscending = screen.getByRole('input', {
      name: 'Customers affected (Ascending)',
    })
    fireEvent.click(filterPanelButton)
    const showButton = screen.getByRole('button', { name: 'Show' })

    // Open sort panel
    const sortPanelButton = screen.getByTestId('sortPanel')
    expect(sortPanelButton).toBeInTheDocument()
    fireEvent.click(sortPanelButton)

    // Filter by "Planned work" and sort by "Oldest first"
    const PWOption = screen.getByLabelText('Planned work')
    expect(PWOption).toBeInTheDocument()
    fireEvent.click(PWOption)
    fireEvent.click(oldestFirst)
    fireEvent.click(showButton)
    expect(PWOption).toBeChecked()
    expect(oldestFirst).toBeChecked()
  })

  it('should render the Power Cut List in mobile view, filter by "Restored" and sort by "Customers Affected (Ascending)"', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const PWOption = screen.getByLabelText('Planned work')
    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    const oldestFirst = screen.getByRole('input', {
      name: 'Date (Oldest first)',
    })
    const custAffecAscending = screen.getByRole('input', {
      name: 'Customers affected (Ascending)',
    })
    fireEvent.click(filterPanelButton)
    const showButton = screen.getByRole('button', { name: 'Show' })

    // Open sort panel
    const sortPanelButton = screen.getByTestId('sortPanel')
    expect(sortPanelButton).toBeInTheDocument()
    fireEvent.click(sortPanelButton)
    // Filter by "Restored" and sort by "Customers Affected (Ascending)"
    const RestoredOption = screen.getByLabelText('Restored')
    expect(RestoredOption).toBeInTheDocument()
    fireEvent.click(RestoredOption)
    fireEvent.click(custAffecAscending)
    fireEvent.click(showButton)
    expect(RestoredOption).toBeChecked()
    expect(custAffecAscending).toBeChecked()
  })

  it('should render the Power Cut List in mobile view, filter by "Planned work" and then filter by "All"', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const PWOption = screen.getByLabelText('Planned work')
    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })

    fireEvent.click(filterPanelButton)
    const RestoredOption = screen.getByLabelText('Restored')

    // Filter by "Planned work" and then filter by "All"
    const AllOption = screen.getByLabelText('All')
    expect(AllOption).toBeInTheDocument()

    // Select PWOption - deselect it as it was selected above
    fireEvent.click(PWOption)
    expect(PWOption).toBeChecked()
    fireEvent.click(AllOption)
    expect(AllOption).toBeChecked()
    expect(PWOption).not.toBeChecked()
    expect(RestoredOption).not.toBeChecked()
  })

  it('should render the Power Cut List in mobile view, open filter panel, open sort panel, close sort panel via Close(x) button', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    const sortPanelButton = screen.getByTestId('sortPanel')
    const body = document.querySelector('body')
    // Close sort panel
    fireEvent.click(filterPanelButton)
    fireEvent.click(sortPanelButton)
    expect(body).toHaveClass('modal-open')

    const closeSortPanelButton = screen.getByTestId('closeSortPanel')
    expect(closeSortPanelButton).toBeInTheDocument()
    fireEvent.click(closeSortPanelButton)
    expect(body).toHaveClass('modal-open')
  })

  it('should render the Power Cut List in mobile view, open filter panel, select select and deselect the same filter, i.e. "Planned work"', () => {
    const screen = render(<PowerCutList {...PowerCutListMockData} />)

    const filterPanelButton = screen.getByRole('button', { name: 'Filter' })
    const sortPanelButton = screen.getByTestId('sortPanel')
    expect(filterPanelButton).toBeInTheDocument()
    expect(sortPanelButton).toBeInTheDocument()
    fireEvent.click(filterPanelButton)
    fireEvent.click(sortPanelButton)

    const PlannedWorkOption = screen.getByLabelText('Planned work')
    expect(PlannedWorkOption).toBeInTheDocument()

    fireEvent.click(PlannedWorkOption)
    expect(PlannedWorkOption).toBeChecked()
    fireEvent.click(PlannedWorkOption)
    expect(PlannedWorkOption).not.toBeChecked()
  })
})
