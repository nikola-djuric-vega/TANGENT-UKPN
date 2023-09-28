import styles from './PowerCutPanelTextUpdatesFailure.module.scss'
import { useDictionaryItems } from '_context/dictionary-items'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

const PowerCutPanelTextUpdatesFailure = () => {
  const { mapState, setMapState } = usePowerCutMap()
  const dictionary = useDictionaryItems()

  return (
    <div
      className={styles.panel}
      data-active={
        mapState.isCanNotSubscribeCurrentIncident ||
        mapState.isCanNotSubscribeFutureIncident
      }
    >
      <Button
        data-top
        appearance={ButtonAppearance.BLANK}
        className={styles.closeButton}
        onClick={() =>
          setMapState((prevState) => ({
            ...prevState,
            isCanNotSubscribeCurrentIncident: false,
            isCanNotSubscribeFutureIncident: false,
            isTextUpdatesPanelOpen: false,
          }))
        }
      >
        <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
      </Button>

      <div>
        <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>
            <Icon name={IconNames.TEXT_UPDATES} size="full" />
          </div>
          <RichText
            className={styles.textUpdatesTitle}
            text={
              mapState.isCanNotSubscribeCurrentIncident
                ? dictionary.textUpdatesCurrentFailureTitle
                : dictionary.textUpdatesFutureFailureTitle
            }
          />
          <div>
            <RichText
              text={
                mapState.isCanNotSubscribeCurrentIncident
                  ? dictionary.textUpdatesCurrentFailure
                  : dictionary.textUpdatesFutureFailure
              }
              className={styles.textUpdatesFailure}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PowerCutPanelTextUpdatesFailure
