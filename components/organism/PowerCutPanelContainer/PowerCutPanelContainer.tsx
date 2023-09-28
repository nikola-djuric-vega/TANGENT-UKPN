import PowerCutPanelTextUpdatesFailure from '_molecules/PowerCutPanelTextUpdatesFailure/PowerCutPanelTextUpdatesFailure'
import PowerCutPanelAffectedPostcodes from '_molecules/PowerCutPanelAffectedPostcodes/PowerCutPanelAffectedPostcodes'
import PowerCutPanelTrackMyPowerCut from '_molecules/PowerCutPanelTrackMyPowerCut/PowerCutPanelTrackMyPowerCut'
import PowerCutPanelTextUpdates from '_molecules/PowerCutPanelTextUpdates/PowerCutPanelTextUpdates'
import PowerCutPanelThankYou from '_molecules/PowerCutPanelThankYou/PowerCutPanelThankYou'
import PowerCutPanelContent from '_molecules/PowerCutPanelContent/PowerCutPanelContent'
import PowerCutPreviewBar from '_molecules/PowerCutPreviewBar/PowerCutPreviewBar'
import { getPanelNameFromUrl } from '_utils/get-data-from-panel-url'
import { MapPage as MapPageType } from '_types/CMS/pages'
import styles from './PowerCutPanelContainer.module.scss'
import { usePowerCutMap } from '_context/power-cut-map'
import { Breakpoints } from '_types/local/breakpoints'
import { PowerCutType } from '_types/local/incidents'
import React, { useEffect, useRef } from 'react'

interface MapPageProps {
  data: MapPageType
}

const PowerCutPanelContainer = ({ data }: MapPageProps) => {
  const { mapState } = usePowerCutMap()
  const containerRef = useRef<HTMLDivElement>(null)
  const activeIncidentCMSData = data.children.items.find(
    (panel) =>
      panel.__typename ===
      getPanelNameFromUrl(mapState.activeIncident?.panelContentUrl)
  )
  const overlayIncidentCMSData = data.children.items.find(
    (panel) =>
      panel.__typename ===
      getPanelNameFromUrl(mapState.overlayIncident?.panelContentUrl)
  )

  const panelData =
    mapState.activeIncident?.powerCutType === PowerCutType.MULTIPLE_INCIDENT
      ? overlayIncidentCMSData
      : activeIncidentCMSData

  useEffect(() => {
    if (
      mapState.isTextUpdatesPanelOpen &&
      containerRef.current &&
      window.innerWidth < Breakpoints.MD
    ) {
      containerRef.current.scrollTop = (21.5 / 100) * window.innerHeight
    }
  }, [mapState.isTextUpdatesPanelOpen])

  return (
    <>
      <section
        className={styles.powerCutPanelContainer}
        data-panel-active={
          mapState.isPanelVisible && !mapState.isPreviewBarVisible
        }
        data-is-preview-open={
          mapState.isPreviewBarVisible && !mapState.isPanelVisible
        }
        ref={containerRef}
      >
        <PowerCutPreviewBar panelData={activeIncidentCMSData} />

        <PowerCutPanelContent
          incident={mapState.activeIncident}
          cmsData={activeIncidentCMSData}
          isVisible={mapState.isPanelVisible}
        />

        {mapState.activeIncident?.powerCutType ===
          PowerCutType.MULTIPLE_INCIDENT && (
          <PowerCutPanelContent
            incident={mapState.overlayIncident}
            cmsData={overlayIncidentCMSData}
            isVisible={!!mapState.overlayIncident}
            isOverlay={true}
          />
        )}

        <PowerCutPanelAffectedPostcodes />

        {(mapState.activeIncident?.powerCutType ===
          PowerCutType.UNPLANNED_INCIDENT ||
          mapState.overlayIncident?.powerCutType ===
            PowerCutType.UNPLANNED_INCIDENT) && (
          <>
            <PowerCutPanelTextUpdates />
            <PowerCutPanelThankYou
              activeBy={mapState.isCurrentThankYouPanelOpen}
              panelData={panelData}
              isCurrent={true}
            />
            <PowerCutPanelThankYou
              activeBy={mapState.isFutureThankYouPanelOpen}
              panelData={panelData}
              isCurrent={false}
            />
            <PowerCutPanelTextUpdatesFailure />
            <PowerCutPanelTrackMyPowerCut
              activeIncidentsCmsData={activeIncidentCMSData}
            />
          </>
        )}
      </section>
    </>
  )
}

export default PowerCutPanelContainer
