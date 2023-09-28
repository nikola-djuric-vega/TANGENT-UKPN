import { useContext, createContext, ReactNode, useState } from 'react'

export interface HelpAndContactState {
  currentContentHeight: number
  currentTabsHeight: number
  setHeight: (height: number) => void
  setTabsHeight: (height: number) => void
}

const HelpAndContactContext = createContext<HelpAndContactState>({
  currentContentHeight: 0,
  setHeight: () => {},
  currentTabsHeight: 0,
  setTabsHeight: () => {},
})

export interface HelpAndContactProps {
  children: ReactNode
}

export const HelpAndContactProvider = ({ children }: HelpAndContactProps) => {
  const [currentContentHeight, setCurrentContentHeight] = useState<number>(0)
  const setHeight = (height: number) => {
    setCurrentContentHeight(height)
  }
  const [currentTabsHeight, setCurrentTabsHeight] = useState<number>(0)
  const setTabsHeight = (height: number) => {
    setCurrentTabsHeight(height)
  }
  return (
    <HelpAndContactContext.Provider
      value={{
        currentContentHeight,
        setHeight,
        currentTabsHeight,
        setTabsHeight,
      }}
    >
      {children}
    </HelpAndContactContext.Provider>
  )
}

export const useHelpAndContact = () => useContext(HelpAndContactContext)
