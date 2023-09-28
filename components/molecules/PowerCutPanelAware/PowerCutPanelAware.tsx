import { useDictionaryItems } from '_context/dictionary-items'
import { usePowerCutMap } from '_context/power-cut-map'
import styles from './PowerCutPanelAware.module.scss'
import RichText from '_atoms/RichText/RichText'
import { Aware } from '_types/CMS/pages'

export interface PowerCutPanelAwareProps {
  cmsData?: Aware
}

const PowerCutPanelAware = ({ cmsData }: PowerCutPanelAwareProps) => {
  const dictionary = useDictionaryItems()
  const { mapState } = usePowerCutMap()
  const UKPNIncident = mapState.activeIncident?.ukpnIncident

  // TODO: Find out from backend how we get storm mode

  return (
    <div>
      <div className={styles.etrWrapper}>
        {cmsData?.description ? (
          <RichText className={styles.flushText} text={cmsData?.description} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default PowerCutPanelAware
