import { PowerCutPanel, PowerCutPanelItem } from '_types/CMS/pages'
import { useDictionaryItems } from '_context/dictionary-items'
import { usePowerCutMap } from '_context/power-cut-map'
import { PowerCutType } from '_types/local/incidents'
import styles from './PowerCutPreviewBar.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import { Address, IconNames } from '_types/local'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import { useEffect, useState } from 'react'
import { toNormalised } from 'postcode'
import Icon from '_atoms/Icon/Icon'
import { DateTime } from 'luxon'

export interface PowerCutPreviewBarProps {
  panelData?: PowerCutPanelItem
}

const PowerCutPreviewBar = ({ panelData }: PowerCutPreviewBarProps) => {
  const { mapState, setMapState } = usePowerCutMap()
  const [searchedAddress, setSearchedAddress] = useState<Address | null>(null)

  const dictionary = useDictionaryItems()

  useEffect(() => {
    const address = localStorage.getItem('searchedAddress')

    if (address) {
      setSearchedAddress(JSON.parse(address))
    }
  }, [])

  const renderPanelDescription = () => {
    switch (panelData?.__typename) {
      case PowerCutPanel.PLANNED:
        return (
          <div className={styles.description}>
            <RichText text={dictionary.plannedWorkBackOn} />
          </div>
        )

      case PowerCutPanel.UNPLANNED:
        return (
          <div className={styles.description}>
            <RichText text={dictionary.estimatedPowerRestorationTime} />
          </div>
        )

      case PowerCutPanel.RESTORED:
        return (
          <div className={styles.description}>
            <RichText text={dictionary.powerBackOnAllCustomers} />
          </div>
        )

      case PowerCutPanel.MULTIPIN:
        return panelData?.previewDescription ? (
          <div className={styles.description}>
            <RichText text={panelData.previewDescription} />
          </div>
        ) : null

      default:
        break
    }
  }

  return (
    <>
      <Button
        appearance={ButtonAppearance.BLANK}
        className={styles.arrowButton}
        data-is-preview-open={
          mapState.isPreviewBarVisible && !mapState.isPanelVisible
        }
        onClick={() =>
          setMapState((prevState) => ({
            ...prevState,
            isPreviewBarVisible: false,
            isPanelVisible: true,
          }))
        }
      >
        <Icon name={IconNames.ICON_ARROW_SHORT} size="xs" />
      </Button>
      <div
        className={styles.preview}
        data-is-preview-open={
          mapState.isPreviewBarVisible && !mapState.isPanelVisible
        }
        onClick={() =>
          setMapState((prevState) => ({
            ...prevState,
            isPreviewBarVisible: false,
            isPanelVisible: true,
          }))
        }
      >
        <div className={styles.title}>
          {panelData?.title}{' '}
          {/* TODO: Add "aware" condition below, so postcode shows for not found and aware panels */}
          {searchedAddress &&
          searchedAddress.postCode &&
          !mapState.activeIncident?.powerCutType
            ? toNormalised(searchedAddress?.postCode)
            : 'your area'}
        </div>

        {renderPanelDescription()}

        {(mapState.activeIncident?.powerCutType ===
          PowerCutType.UNPLANNED_INCIDENT ||
          mapState.activeIncident?.powerCutType ===
            PowerCutType.PLANNED_INCIDENT) && (
          <div
            className={styles.time}
            data-type={mapState.activeIncident?.powerCutType}
          >
            {
              mapState.activeIncident
                .incidentTypeTBCEstimatedFriendlyDescription
            }
          </div>
        )}

        {mapState.activeIncident?.powerCutType ===
          PowerCutType.RESTORED_INCIDENT &&
          mapState.activeIncident.ukpnIncident?.restoredDateTime && (
            <div
              className={styles.time}
              data-type={mapState.activeIncident?.powerCutType}
            >
              {DateTime.fromISO(
                mapState.activeIncident.ukpnIncident?.restoredDateTime,
                {
                  setZone: true,
                }
              ).toFormat('HH:mm')}
            </div>
          )}
      </div>
    </>
  )
}

export default PowerCutPreviewBar
