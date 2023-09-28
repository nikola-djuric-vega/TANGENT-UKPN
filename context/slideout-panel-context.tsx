import { createContext, ReactNode, useContext, useState } from 'react'

export interface SlideOutPanelProps {
  children: ReactNode
}

export interface SlideOutPanelItems {
  slideOutPanelContent: string
  setSlideOutPanelContent?: React.Dispatch<React.SetStateAction<string>>
}

export const SlideOutPanelContext = createContext<SlideOutPanelItems>({
  slideOutPanelContent: '',
})

export const SlideOutPanelProvider = ({ children }: SlideOutPanelProps) => {
  const [slideOutPanelContent, setSlideOutPanelContent] = useState<string>('')

  return (
    <SlideOutPanelContext.Provider
      value={{
        slideOutPanelContent,
        setSlideOutPanelContent,
      }}
    >
      {children}
    </SlideOutPanelContext.Provider>
  )
}

export const SlideOutPanelItems = () => useContext(SlideOutPanelContext)
