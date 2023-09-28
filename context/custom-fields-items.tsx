import { useContext, createContext, ReactNode } from 'react'
import { CmsPage } from '_types/CMS'
export interface CustomFieldsItems {
  [key: string]: CmsPage
}

const CustomFieldsItemsContext = createContext<CustomFieldsItems | undefined>(
  {}
)

export interface CustomFieldsItemsProps {
  items?: CustomFieldsItems
  children: ReactNode
}

export const CustomFieldsItemsProvider = ({
  items,
  children,
}: CustomFieldsItemsProps) => {
  return (
    <CustomFieldsItemsContext.Provider value={items}>
      {children}
    </CustomFieldsItemsContext.Provider>
  )
}

export const useCustomFieldsItems = () => useContext(CustomFieldsItemsContext)
