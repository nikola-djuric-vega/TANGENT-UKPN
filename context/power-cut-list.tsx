import { useContext, createContext, ReactNode, useState } from 'react'
import { ExtraPropertiesItem } from '_types/local/incidents'
import { IncidentDto } from '_types/local/incident-dto'

export interface PowerCutListState {
  incidentsDtoList: IncidentDto[]
  extraProperties: ExtraPropertiesItem[]
}

export interface PowerCutListContext {
  powerCutListState: PowerCutListState
  setPowerCutListState: React.Dispatch<React.SetStateAction<PowerCutListState>>
}

const PowerCutListContext = createContext<PowerCutListContext>({
  powerCutListState: {
    incidentsDtoList: [],
    extraProperties: [],
  },
  setPowerCutListState: () => {},
})

export interface PowerCutListProps {
  children: ReactNode
}

export const PowerCutListProvider = ({ children }: PowerCutListProps) => {
  const [powerCutListState, setPowerCutListState] = useState<PowerCutListState>(
    {
      incidentsDtoList: [],
      extraProperties: [],
    }
  )
  return (
    <PowerCutListContext.Provider
      value={{
        powerCutListState,
        setPowerCutListState,
      }}
    >
      {children}
    </PowerCutListContext.Provider>
  )
}

export const usePowerCutList = () => useContext(PowerCutListContext)
