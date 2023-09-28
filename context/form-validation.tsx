import { useContext, createContext, ReactNode } from 'react'
import { FormPage } from '_types/CMS'

export interface FormValidationItems {
  pages: FormPage[]
  activePage: number
  mandatorySection: string
  setValidation: React.Dispatch<React.SetStateAction<any>>
}

const FormValidation = createContext<FormValidationItems>({
  pages: [],
  activePage: 0,
  mandatorySection: '',
  setValidation: () => {},
})

export interface FormValidationProps {
  items: any
  children: ReactNode
}

export const FormValidationProvider = ({
  items,
  children,
}: FormValidationProps) => {
  return (
    <FormValidation.Provider value={items}>{children}</FormValidation.Provider>
  )
}

export const useFormValidation = () => useContext(FormValidation)
