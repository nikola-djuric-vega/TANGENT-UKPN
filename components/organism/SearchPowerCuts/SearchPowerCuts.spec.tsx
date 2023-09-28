import { SearchPowerCutsData } from './SearchPowerCuts.stories'
import { render } from '@testing-library/react'
import SearchPowerCuts from './SearchPowerCuts'
import React from 'react'

describe('SearchPowerCuts', () => {
  it('Render SearchPowerCuts', async () => {
    const { getByText, getByAltText, getByRole, getAllByRole } = render(
      <SearchPowerCuts {...SearchPowerCutsData} />
    )

    const header = getByText(
      SearchPowerCutsData.searchPowerCutsHeader as string
    )
    const title = getByText(SearchPowerCutsData.searchPowerCutsTitle as string)
    const lookup = getByRole('combobox')
    const links = getAllByRole('link')
    const image = getByAltText(
      SearchPowerCutsData.searchPowerCutsImage?.name as string
    )

    expect(header).toBeInTheDocument()
    expect(lookup).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(links).toHaveLength(4)
  })
})
