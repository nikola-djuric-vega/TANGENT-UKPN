import PulsingAnimation from '_atoms/PulsingAnimation/PulsingAnimation'
import { getPanelNameFromUrl } from '_utils/get-data-from-panel-url'
import { PowerCutPanel, PowerCutPanelItem } from '_types/CMS/pages'
import { formattedUpdateTime } from '_utils/formatted-update-time'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import styles from './PowerCutIncidentHeader.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import ShareIncidentCard from './ShareIncidentCard'
import { Incident } from '_types/local/incidents'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { StormMode } from '_types/CMS/nodes'
import { IconNames } from '_types/local'
import { useState } from 'react'
import GraphicLines, {
  LinesColor,
  LinesPosition,
} from '_atoms/GraphicLines/GraphicLines'

export interface PowerCutIncidentHeaderProps {
  cmsData: PowerCutPanelItem[] | null
  incident: Incident | null
}

const PowerCutIncidentHeader = ({
  cmsData,
  incident,
}: PowerCutIncidentHeaderProps) => {
  const globalData = useUkpnGlobalData()

  const [isSharePopupOpen, setIsSharePopupOpen] = useState<boolean>(false)
  const isStorm = globalData?.allSiteSettings?.stormMode === StormMode.STORM
  const isNotAware =
    getPanelNameFromUrl(incident?.panelContentUrl) === PowerCutPanel.NOT_AWARE

  let title = null

  if (!!cmsData) {
    title = cmsData.find(
      (panel) =>
        panel.__typename === getPanelNameFromUrl(incident?.panelContentUrl)
    )?.title
  }

  return (
    <ComponentLayout
      data-is-popup-open={isSharePopupOpen}
      innerClass={styles.pcIncidentHeader}
      removeBottomMargin={true}
      data-is-storm={isStorm}
    >
      <div className={styles.inner}>
        <div className={styles.adressLookupWrapper}>
          <AddressLookUpPowerCut
            placeholder="Enter a postcode here"
            id="incidentHeader"
          />
        </div>
        {!isNotAware && (
          <>
            <div className={styles.indicators}>
              <PulsingAnimation />
              <Button
                onClick={() => setIsSharePopupOpen(!isSharePopupOpen)}
                appearance={ButtonAppearance.DEFAULT}
                className={styles.shareButton}
                icon={IconNames.SHARE}
              >
                Share
              </Button>
              <ShareIncidentCard
                setIsSharePopupOpen={setIsSharePopupOpen}
                isSharePopupOpen={isSharePopupOpen}
              />
            </div>
            {!!title && (
              <Heading level={2} className={styles.title}>
                {title}
              </Heading>
            )}
            <div className={styles.incidentData}>
              <p className={styles.reference}>
                {`Reference: ${incident?.incidentReference}`}
              </p>
              <p className={styles.updateTime}>
                {`Reported: ${formattedUpdateTime(
                  incident?.ukpnIncident?.receivedDate
                )}`}
              </p>
            </div>
          </>
        )}
      </div>
      {!isNotAware && (
        <GraphicLines
          className={styles.bottomLine}
          position={LinesPosition.TOP}
          colour={LinesColor.WHITE}
          bottomLineLength={104}
          topLineLength={444}
        />
      )}
    </ComponentLayout>
  )
}

export default PowerCutIncidentHeader
