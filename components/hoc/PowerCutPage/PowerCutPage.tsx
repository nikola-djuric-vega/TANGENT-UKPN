import { usePowerCut } from '_context/power-cut'
import PowerCutHeader from '_molecules/PowerCutHeader/PowerCutHeader'
import PowerCutMenu from '_molecules/PowerCutMenu/PowerCutMenu'
import styles from './PowerCutPage.module.scss'
import { ReactNode, useEffect } from 'react'
import PowerCutAddressModal from '_molecules/PowerCutAddressModal/PowerCutAddressModal'
import { usePowerCutMap } from '_context/power-cut-map'

interface PowerCutListProps {
  hasSearch?: boolean
  isNotMap?: boolean
  children: ReactNode
}

export const PowerCutPageContainer = ({
  isNotMap = false,
  children,
  hasSearch,
}: PowerCutListProps) => {
  const { powerCutState } = usePowerCut()
  const { mapState, setMapState } = usePowerCutMap()

  useEffect(() => {
    if (!isNotMap) {
      const mapHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--map-height', `${window.innerHeight}px`)
      }
      window.addEventListener('resize', mapHeight)
      mapHeight()

      return () => {
        window.removeEventListener('resize', mapHeight)
      }
    }
  }, [])

  useEffect(() => {
    setMapState((prevState) => ({
      ...prevState,
      isAddressModalVisible: false,
    }))
  }, [])
  return (
    <div className={styles.powerCutPage} data-is-not-map={isNotMap}>
      <div
        data-is-menu-open={powerCutState.isMenuOpen}
        data-is-modal-open={mapState.isAddressModalVisible}
        className={styles.container}
      >
        <PowerCutHeader hasSearch={hasSearch} />
        {!!mapState.isAddressModalVisible && <PowerCutAddressModal />}
        {children}
      </div>

      <PowerCutMenu />
    </div>
  )
}
