import { UkpnGlobalDataContext } from '_context/ukpn-global-data'
import { render, fireEvent } from '@testing-library/react'
import { mockUkpnGlobalData } from './UkpnHeader.stories'
import { StormMode } from '_types/CMS/nodes'
import UkpnHeader from './UkpnHeader'
import React from 'react'

describe('UkpnHeader Test', () => {
  it('should render the Header with Storm mode', () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <UkpnHeader isStormModePage={true} />
      </UkpnGlobalDataContext.Provider>
    )

    //Search
    const elementSearch = screen.getByText('Search')
    expect(elementSearch).toBeInTheDocument()
    fireEvent.click(elementSearch)

    //Menu
    const elementMenu = screen.getByText('Menu')
    expect(elementMenu).toBeInTheDocument()

    //Close
    const elementClose = screen.getAllByText('Close')
    expect(elementClose[0]).toBeInTheDocument()
    fireEvent.click(elementClose[0])

    //Back
    const elementSubmenuClose = screen.getByText('Back')
    expect(elementSubmenuClose).toBeInTheDocument()
    fireEvent.click(elementSubmenuClose)

    fireEvent.scroll(window, { target: { scrollY: 10 } })

    render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <UkpnHeader isStormModePage={true} />
      </UkpnGlobalDataContext.Provider>
    )
    fireEvent.scroll(window, { target: { scrollY: 50 } })
    fireEvent.mouseDown(document.body)
  })

  it('should toggle menu item on click', () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <UkpnHeader isStormModePage={true} />
      </UkpnGlobalDataContext.Provider>
    )

    // Navigation
    const elementPCMenu = screen.getByText(
      `${mockUkpnGlobalData?.allSiteSettings?.MainNavigation?.children.items?.[0]?.name}`
    )

    // Open new menu item
    fireEvent.click(elementPCMenu)

    const subMenu = screen.getByTestId('submenu')
    expect(subMenu).toBeInTheDocument()

    // Close same menu item
    fireEvent.click(elementPCMenu)
  })

  it('should render the Header with NO Storm mode', () => {
    mockUkpnGlobalData.stormContainerData.stormMode = StormMode.NORMAL
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <UkpnHeader isStormModePage={false} />
      </UkpnGlobalDataContext.Provider>
    )

    // Menu
    const elementMenu = screen.getAllByRole('button', { name: 'Menu' })
    expect(elementMenu[0]).toBeInTheDocument()
    fireEvent.click(elementMenu[0])

    const Electricity = screen.getByText('Electricity')
    expect(Electricity).toBeInTheDocument()
    fireEvent.click(Electricity)

    const subMenuItem = screen.getAllByText('Install something new')
    expect(subMenuItem[0]).toBeInTheDocument()

    // Open submenu item
    fireEvent.click(subMenuItem[0])

    // Close submenu item
    fireEvent.click(subMenuItem[0])
  })
})
