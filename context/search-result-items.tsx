import { UkpnSearchResult } from '_types/CMS/nodes/ukpnsearchresults'
import { useContext, createContext, ReactNode } from 'react'

export interface UkpnSearchResultsState {
  documents: UkpnSearchResult[]
  total: number
  pages?: number
}

const UkpnSearchResultsContext = createContext<UkpnSearchResultsContext>({
  ukpnSearchResultsState: { documents: [], total: 0 },
  setUkpnSearchResults: () => {},
})

export interface UkpnSearchResultsContext {
  ukpnSearchResultsState: UkpnSearchResultsState
  setUkpnSearchResults: React.Dispatch<
    React.SetStateAction<UkpnSearchResultsState>
  >
}

export interface UkpnSearchResultsProps {
  items: UkpnSearchResultsContext
  children: ReactNode
}

export const UkpnSearchResultsProvider = ({
  items,
  children,
}: UkpnSearchResultsProps) => {
  return (
    <UkpnSearchResultsContext.Provider value={items}>
      {children}
    </UkpnSearchResultsContext.Provider>
  )
}

export const useUkpnSearchResults = () => useContext(UkpnSearchResultsContext)
