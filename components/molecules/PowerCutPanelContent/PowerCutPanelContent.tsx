import PowerCutPanelHeader from '_molecules/PowerCutPanelHeader/PowerCutPanelHeader'
import RenderPanelComponent from '_hoc/RenderPanelComponents/RenderPanelComponents'
import renderPanelSection from '_hoc/RenderPanelSection/RenderPanelSection'
import { getPanelNameFromUrl } from '_utils/get-data-from-panel-url'
import { PowerCutPanel, PowerCutPanelItem } from '_types/CMS/pages'
import { Incident, PowerCutType } from '_types/local/incidents'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { usePowerCutMap } from '_context/power-cut-map'
import styles from './PowerCutPanelContent.module.scss'
import { PostcodeService, transformUrl } from '_utils'
import Button from '_atoms/Button&Link/Button/Button'
import { usePowerCut } from '_context/power-cut'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import queryString from 'query-string'
import Icon from '_atoms/Icon/Icon'
import { useEffect } from 'react'

import {
  replaceUrlWithPostcode,
  replaceUrlWithId,
} from '_organism/MapPage/map-utils'

export interface PowerCutPanelContent {
  incident: Incident | null
  cmsData?: PowerCutPanelItem
  isVisible: boolean
  isOverlay?: boolean
}

const PowerCutPanelContent = ({
  incident,
  cmsData,
  isVisible,
  isOverlay,
}: PowerCutPanelContent) => {
  const { mapState, setMapState } = usePowerCutMap()
  const { powerCutState, fetchRpcToggle } = usePowerCut()
  const globalData = useUkpnGlobalData()
  const router = useRouter()

  const powerCutLinkUrl =
    globalData?.allSiteSettings?.reportPowerCutLink.url || '/'

  useEffect(() => {
    if (
      incident &&
      getPanelNameFromUrl(incident?.panelContentUrl) === PowerCutPanel.NOT_AWARE
    ) {
      fetchRpcToggle()
    }
  }, [incident])

  const handleBack = () => {
    const queryParams = queryString.parse(location.search)
    const showTracker = queryParams.showTracker === 'true'

    mapState.activeIncident?.powerCutType === PowerCutType.MULTIPLE_INCIDENT
      ? replaceUrlWithPostcode(router, mapState.activeIncident?.postcode)
      : replaceUrlWithId(
          router,
          mapState.activeIncident?.incidentReference,
          showTracker
        )

    setMapState((prevState) => ({
      ...prevState,
      overlayIncident: null,
    }))
  }

  const title =
    getPanelNameFromUrl(incident?.panelContentUrl) === PowerCutPanel.NOT_AWARE
      ? `${
          cmsData?.title +
            ' ' +
            PostcodeService.getPostcodeFromUrl(incident?.panelContentUrl) ||
          'Power cut not found'
        }`
      : `${cmsData?.title || 'Power cut not found'}`

  return (
    <div
      className={styles.content}
      data-is-content-open={isVisible}
      data-is-overlay={isOverlay}
    >
      {isOverlay && (
        <Button
          appearance={ButtonAppearance.DEFAULT}
          onClick={handleBack}
          className={styles.back}
        >
          <Icon name={IconNames.ICON_CHEVRON_RIGHT} size="xxs" flip={true} />
          <span>Back</span>
        </Button>
      )}

      <PowerCutPanelHeader incident={incident} title={title} />
      {renderPanelSection(incident, cmsData)}

      {getPanelNameFromUrl(incident?.panelContentUrl) ===
        PowerCutPanel.NOT_AWARE &&
        !powerCutState.disableRPCButton && (
          <div className={styles.ctas}>
            <Button
              className={styles.button}
              appearance={ButtonAppearance.PRIMARY}
              type="button"
              onClick={() => router.push(transformUrl(powerCutLinkUrl))}
            >
              Report a power cut here
            </Button>
          </div>
        )}

      {!!cmsData && 'components' in cmsData && (
        <div className={styles.componentsWrapper}>
          {cmsData.components?.map((component, i) => (
            <RenderPanelComponent component={component} key={i} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PowerCutPanelContent
