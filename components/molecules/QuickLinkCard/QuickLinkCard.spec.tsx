import { render } from '@testing-library/react'
import QuickLinkCard from './QuickLinkCard'
import React from 'react'
import mockQuickLinkCard from './QuickLinkCard.mock'
import { IconNames } from '_types/local/icons'
import { LinkType } from '_types/CMS'
import { act } from 'react-dom/test-utils'

describe('QuickLinkCard component', () => {
  it('should not render items without a link', () => {
    const screen = render(
      <QuickLinkCard
        quickCardLinks={[
          {
            linkIcon: IconNames.ICON_HOME,
          },
        ]}
      />
    )
    const element = screen.queryAllByRole('link')

    expect(element.length).toEqual(0)
  })
})
