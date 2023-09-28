import WhatServiceInterimData from './mock-what-service-data'
import { render, fireEvent } from '@testing-library/react'
import WhatServiceInterim from './WhatServiceInterim'
import kebabCase from 'lodash/kebabCase'
import React from 'react'

import {
  WhatServiceInterimPanelType,
  Service,
} from '_types/CMS/nodes/components/UKPN'

describe('What Service Interim', () => {
  it('Render What Service Interim', () => {
    const { getByText, getAllByRole } = render(
      <WhatServiceInterim {...WhatServiceInterimData} />
    )
    const mockTabs =
      WhatServiceInterimData.tabs as WhatServiceInterimPanelType[]
    const title = getByText(WhatServiceInterimData.title as string)
    const services = getAllByRole('link')
    const tabs = getAllByRole('tab')

    expect(services).toHaveLength((mockTabs[0].services as Service[])?.length)
    expect(tabs).toHaveLength(mockTabs.length)
    expect(title).toBeInTheDocument()
  })

  it('changes slide on click', async () => {
    const { getAllByRole, getByRole } = render(
      <WhatServiceInterim {...WhatServiceInterimData} />
    )

    const mockTabs =
      WhatServiceInterimData.tabs as WhatServiceInterimPanelType[]
    const tabItemStart = getByRole('tabpanel')
    expect(tabItemStart).toHaveAttribute(
      'data-aria-labelledby',
      kebabCase(mockTabs[0].title as string)
    )
    const tab = getAllByRole('tab')[1]

    fireEvent.click(tab)
    const tabItem = getByRole('tabpanel')
    expect(tabItem).toHaveAttribute(
      'data-aria-labelledby',
      kebabCase(mockTabs[1].title as string)
    )
    expect(tab).toHaveAttribute('data-active', 'true')
  })
})
