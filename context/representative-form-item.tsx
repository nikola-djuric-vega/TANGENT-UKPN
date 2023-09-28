import { useContext, createContext, ReactNode } from 'react'
import { Form, FormFieldIndicationType } from '_types/CMS'

const RepresentativeFormItemsContext = createContext<Form>({
  _id: '',
  name: '',
  disableDefaultStylesheet: false,
  fieldIndicationType: FormFieldIndicationType.NO_INDICATOR,
  hideFieldValidation: false,
  showValidationSummary: false,
  pages: [],
  _links: {
    self: {
      href: ''
    }
  }
})

export interface RepresentativeFormItemsProps {
  items: Form
  children: ReactNode
}

export const RepresentativeFormItemsProvider = ({
  items,
  children,
}: RepresentativeFormItemsProps) => {
  return (
    <RepresentativeFormItemsContext.Provider value={items}>
      {children}
    </RepresentativeFormItemsContext.Provider>
  )
}

export const useRepresentativeFormItems = () => useContext(RepresentativeFormItemsContext)
