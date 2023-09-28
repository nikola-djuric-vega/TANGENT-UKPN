import PowerCutPanelUnplanned from '_molecules/PowerCutPanelUnplanned/PowerCutPanelUnplanned'
import PowerCutPanelMultiple from '_molecules/PowerCutPanelMultiple/PowerCutPanelMultiple'
import PowerCutPanelRestored from '_molecules/PowerCutPanelRestored/PowerCutPanelRestored'
import PowerCutPanelPlanned from '_molecules/PowerCutPanelPlanned/PowerCutPanelPlanned'
import PowerCutPanelAware from '_molecules/PowerCutPanelAware/PowerCutPanelAware'
import { PowerCutPanel, PowerCutPanelItem } from '_types/CMS/pages'
import { Incident } from '_types/local/incidents'

const renderPanelSection = (
  incident: Incident | null,
  cmsData?: PowerCutPanelItem
) => {
  switch (cmsData?.__typename) {
    case PowerCutPanel.MULTIPIN:
      return <PowerCutPanelMultiple cmsData={cmsData} />

    case PowerCutPanel.PLANNED:
      return <PowerCutPanelPlanned incident={incident} />

    case PowerCutPanel.RESTORED:
      return <PowerCutPanelRestored incident={incident} />

    case PowerCutPanel.UNPLANNED:
      return <PowerCutPanelUnplanned incident={incident} cmsData={cmsData} />

    case PowerCutPanel.AWARE:
      return <PowerCutPanelAware cmsData={cmsData} />

    default:
      return null
  }
}

export default renderPanelSection
