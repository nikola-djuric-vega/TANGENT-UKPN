import { useContext, createContext, ReactNode } from 'react'
import { DictionaryItems } from 'types/local'

export const DictionaryItemsContext = createContext<DictionaryItems>({})

export interface DictionaryItemsProps {
  items: DictionaryItems
  children: ReactNode
}

export const DictionaryItemsProvider = ({
  items,
  children,
}: DictionaryItemsProps) => {
  return (
    <DictionaryItemsContext.Provider value={items}>
      {children}
    </DictionaryItemsContext.Provider>
  )
}

export const useDictionaryItems = () => useContext(DictionaryItemsContext)
