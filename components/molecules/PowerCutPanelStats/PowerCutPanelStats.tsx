import { usePowerCutMap } from '_context/power-cut-map'
import styles from './PowerCutPanelStats.module.scss'
import RichText from '_atoms/RichText/RichText'
import isNumber from 'lodash/isNumber'
import Icon from '_atoms/Icon/Icon'
import { IconNames } from '_types/local'

export interface PowerCutPanelStatsProps {
  customerText: string
  customerValue?: number | string
  postcodeText: string
  postcodeValue: number
  callsText?: string
  callsValue?: number
}

const PowerCutPanelStats = ({
  customerText,
  customerValue,
  postcodeText,
  postcodeValue,
  callsText,
  callsValue,
}: PowerCutPanelStatsProps) => {
  const { mapState, setMapState } = usePowerCutMap()

  const customerValueString = isNumber(customerValue)
    ? customerValue.toString()
    : customerValue

  const handlePostcodePress = () => {
    setMapState((prevState) => ({
      ...prevState,
      isPostcodePanelOpen: true,
    }))
  }

  return (
    <section
      className={styles.wrapper}
      data-has-calls={!!callsText && isNumber(callsValue)}
    >
      <div className={styles.stat}>
        <div className={styles.statIcon}>
          <Icon name={IconNames.FORTY_PX_PERSON} baseColour size="sm" />
        </div>
        <div className={styles.statValue}>
          <RichText text={customerValueString || ''} />
        </div>
        <div className={styles.statText}>
          <RichText text={customerText} />
        </div>
      </div>

      <div className={styles.stat}>
        <div className={styles.statIcon}>
          <Icon name={IconNames.FORTY_PX_LOCATION} baseColour size="sm" />
        </div>
        <div
          role="button"
          tabIndex={0}
          aria-haspopup={true}
          aria-expanded={mapState.isPostcodePanelOpen}
          className={styles.postcodeStat}
          onClick={handlePostcodePress}
          onKeyPress={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              handlePostcodePress()
            }
          }}
        >
          <div className={styles.statValue}>{postcodeValue}</div>
          <div className={styles.statText}>
            <RichText text={postcodeText} />
          </div>
        </div>
      </div>

      {!!callsText && isNumber(callsValue) && (
        <div className={styles.stat}>
          <div className={styles.statIcon}>
            <Icon name={IconNames.FORTY_PX_ADVICE} baseColour size="sm" />
          </div>
          <div className={styles.statValue}>{callsValue}</div>
          <div className={styles.statText}>
            <RichText text={callsText} />
          </div>
        </div>
      )}
    </section>
  )
}

export default PowerCutPanelStats
