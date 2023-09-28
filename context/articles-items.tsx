import { useContext, createContext, ReactNode } from 'react'
import { ArticleItemsAPI } from 'types/local'

export const ArticlesItemsContext = createContext<ArticleItemsAPI>({
  data: [],
  pageCount: 0,
  documentsCount: 0,
})

export interface ArticlesItemsProps {
  items: ArticleItemsAPI
  children: ReactNode
}

export const ArticlesProvider = ({ items, children }: ArticlesItemsProps) => {
  return (
    <ArticlesItemsContext.Provider value={items}>
      {children}
    </ArticlesItemsContext.Provider>
  )
}

export const useArticleItems = () => useContext(ArticlesItemsContext)
