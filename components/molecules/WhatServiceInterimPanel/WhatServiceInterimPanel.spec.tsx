import WhatServiceInterimData from '_organism/WhatServiceInterim/mock-what-service-data'
import WhatServicePanel from './WhatServiceInterimPanel'
import { render } from '@testing-library/react'
import { Media } from '_types/CMS'
import React from 'react'

import {
  WhatServiceInterimPanelType,
  Service,
} from '_types/CMS/nodes/components/UKPN'

describe('WhatServicePanel Test', () => {
  it('should render WhatServicePanel component with passed props', () => {
    const tab = (
      WhatServiceInterimData.tabs as WhatServiceInterimPanelType[]
    )[0]
    const services = tab.services as Service[]
    const { getAllByRole, getByAltText, getByText } = render(
      <WhatServicePanel {...tab} />
    )
    const listItem = getAllByRole('listitem')
    const links = getAllByRole('link')

    services.map((item) => {
      const title = getByText(item.title as string)
      const subtitle = getByText(item.subtitle as string)
      const image = getByAltText((item.image as Media).name)

      expect(subtitle).toBeInTheDocument()
      expect(image).toBeInTheDocument()
      expect(title).toBeInTheDocument()
    })

    expect(listItem).toHaveLength(services.length)
    expect(links).toHaveLength(services.length)
  })
})
