import PowerCutContactUs from '_molecules/PowerCutContactUs/PowerCutContactUs'
import PowerCutPanelLink from '_atoms/PowerCutPanelLink/PowerCutPanelLink'
import HelpAndAdvice from '_organism/HelpAndAdvice/HelpAndAdvice'
import SocialLinks from '_molecules/SocialLinks/SocialLinks'
import { PowerCutPanelComponent } from '_types/CMS/pages'
import { ComponentsTypeName } from '_types/CMS'
import isEqual from 'lodash/isEqual'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'

export interface renderPanelComponentProps {
  component: PowerCutPanelComponent
}

const RenderPanelComponent = ({ component }: renderPanelComponentProps) => {
  const render = () => {
    switch (component.__typename) {
      case ComponentsTypeName.HELP_AND_ADVICE:
        return <HelpAndAdvice {...component} key={uuidv4()} isPanel />

      case ComponentsTypeName.POWER_CUT_CONTACT_US:
        return (
          <PowerCutContactUs {...component} key={uuidv4()} forceMobileLayout />
        )

      case ComponentsTypeName.SOCIAL_LINKS:
        return <SocialLinks {...component} key={uuidv4()} />

      case ComponentsTypeName.PLAIN_LINK:
        return <PowerCutPanelLink {...component} key={uuidv4()} />

      default:
        return null
    }
  }

  return <>{render()}</>
}

export default React.memo(RenderPanelComponent, (prevProps, nextProps) =>
  isEqual(prevProps, nextProps)
)
