import { useContext, createContext, ReactNode } from 'react'
import { CmsPage } from '_types/CMS'

export interface DocumentsState {
  documents: CmsPage[]
  isLoading: boolean
  total: number
  pages?: number
}

const DocumentsItemsContext = createContext<DocumentsContextItems>({
  documentsState: { documents: [], isLoading: false, total: 0 },
  setDocuments: () => {},
})

export interface DocumentsContextItems {
  documentsState: DocumentsState
  setDocuments: React.Dispatch<React.SetStateAction<DocumentsState>>
}

export interface DocumentsItemsProps {
  items: DocumentsContextItems
  children: ReactNode
}

export const DocumentsItemsProvider = ({
  items,
  children,
}: DocumentsItemsProps) => {
  return (
    <DocumentsItemsContext.Provider value={items}>
      {children}
    </DocumentsItemsContext.Provider>
  )
}

export const useDocumentsItems = () => useContext(DocumentsItemsContext)
