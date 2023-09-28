import { useContext, createContext, ReactNode, useState } from 'react'
import axios from 'axios'

export interface PowerCutState {
  isMenuOpen: boolean
  isSearchOpen: boolean
  wasMenuOpen: boolean
  disableRPCButton: boolean
}

export interface PowerCut {
  powerCutState: PowerCutState
  setPowerCutState: React.Dispatch<React.SetStateAction<PowerCutState>>
  fetchRpcToggle: () => Promise<void>
}

export const PowerCutContext = createContext<PowerCut>({
  powerCutState: {
    isMenuOpen: false,
    isSearchOpen: false,
    wasMenuOpen: false,
    disableRPCButton: false,
  },
  setPowerCutState: () => {},
  fetchRpcToggle: async () => undefined,
})

export interface PowerCutProps {
  children: ReactNode
}

export const PowerCutProvider = ({ children }: PowerCutProps) => {
  const [powerCutState, setPowerCutState] = useState<PowerCutState>({
    isMenuOpen: false,
    isSearchOpen: false,
    wasMenuOpen: false,
    disableRPCButton: false,
  })

  const fetchRpcToggle = async () => {
    try {
      const { data } = await axios.get<boolean>('/api/fetch-rpc-toggle')

      setPowerCutState((prevState) => ({
        ...prevState,
        disableRPCButton: data,
      }))
    } catch (error) {
      setPowerCutState((prevState) => ({
        ...prevState,
        disableRPCButton: false,
      }))
    }
  }

  return (
    <PowerCutContext.Provider
      value={{
        powerCutState,
        setPowerCutState,
        fetchRpcToggle,
      }}
    >
      {children}
    </PowerCutContext.Provider>
  )
}

export const usePowerCut = () => useContext(PowerCutContext)
