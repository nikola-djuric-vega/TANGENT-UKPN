import { useContext, createContext, ReactNode } from 'react'
import { Form, FormFieldIndicationType } from '_types/CMS'

const AssetItemsContext = createContext<Form>({
  _id: '',
  name: '',
  disableDefaultStylesheet: false,
  fieldIndicationType: FormFieldIndicationType.NO_INDICATOR,
  hideFieldValidation: false,
  showValidationSummary: false,
  pages: [],
  _links: {
    self: {
      href: '',
    },
  },
})

export interface AssetRepeaterItemsProps {
  items: Form
  children: ReactNode
}

export const AssetRepeaterItemsProvider = ({
  items,
  children,
}: AssetRepeaterItemsProps) => {
  return (
    <AssetItemsContext.Provider value={items}>
      {children}
    </AssetItemsContext.Provider>
  )
}

export const useAssetRepeaterItems = () => useContext(AssetItemsContext)
