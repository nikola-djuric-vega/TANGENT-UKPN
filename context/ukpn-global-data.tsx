import axios from 'axios'
import { useContext, createContext, ReactNode, useState } from 'react'
import { StormContainer, StormMode, UkpnGlobalData } from '_types/CMS/nodes'

export const UkpnGlobalDataContext = createContext<
  UkpnGlobalContexData | undefined
>(undefined)

export interface UkpnGlobalContexData
  extends Partial<UkpnGlobalData>,
    PowerSharingData {
  stormContainerData: {
    stormMode: StormMode
    stormTracker: boolean
  }
}

export interface PowerSharingData {
  powerSharingData?: boolean
  setPowerSharingData?: React.Dispatch<React.SetStateAction<boolean>>
  fetchPowerSharingData?: () => Promise<void>
  stormContainerData: StormContainer
  fetchStormContainerData: () => Promise<void>
}

export interface UkpnGlobalDataProps {
  items: UkpnGlobalData | undefined
  children: ReactNode
}

export const UkpnGlobalDataProvider = ({
  items,
  children,
}: UkpnGlobalDataProps) => {
  const [powerSharingData, setPowerSharingData] = useState<boolean>(false)
  const [stormContainerData, setStormContainerData] = useState<StormContainer>({
    stormMode: StormMode.NORMAL,
    stormTracker: false,
  })

  const fetchPowerSharingData = async () => {
    try {
      const { data } = await axios.get<boolean>('/api/fetch-power-sharing')
      setPowerSharingData(data)
    } catch (error) {
      setPowerSharingData(false)
    }
  }

  const fetchStormContainerData = async () => {
    try {
      const { data } = await axios.get<StormContainer>(
        '/api/fetch-storm-container'
      )
      setStormContainerData(data)
    } catch (error) {
      setStormContainerData({
        stormMode: StormMode.NORMAL,
        stormTracker: false,
      })
    }
  }

  return (
    <UkpnGlobalDataContext.Provider
      value={{
        ...items,
        powerSharingData,
        setPowerSharingData,
        fetchPowerSharingData,
        stormContainerData,
        fetchStormContainerData,
      }}
    >
      {children}
    </UkpnGlobalDataContext.Provider>
  )
}

export const useUkpnGlobalData = () => useContext(UkpnGlobalDataContext)
