import { useContext, createContext, ReactNode } from 'react'
import { FormItemsType } from '_types/CMS'

export const FormItemsContext = createContext<FormItemsType>({
  completedPages: [],
  isSmart: false,
  activePage: 0,
  pages: [],
})

export interface FormItemsProps {
  items: FormItemsType
  children: ReactNode
}

export const FormItemsProvider = ({ items, children }: FormItemsProps) => {
  return (
    <FormItemsContext.Provider value={items}>
      {children}
    </FormItemsContext.Provider>
  )
}

export const useFormItems = () => useContext(FormItemsContext)
