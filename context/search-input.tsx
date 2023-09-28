import { filterbyText } from '_utils/filter-by-text'
import { useRouter } from 'next/router'
import throttle from 'lodash/throttle'
import { DebouncedFunc } from 'lodash'
import {
  createContext,
  ChangeEvent,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react'

export interface SearchInputProps {
  children: ReactNode
}

export type updatePhrase = DebouncedFunc<
  (e: ChangeEvent<HTMLInputElement>) => void
>

export interface SearchInput {
  text?: string | string[]
  updatePhrase?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInputContext = createContext<SearchInput>({})

export const SearchInputProvider = ({ children }: SearchInputProps) => {
  const {
    query: { phrase, slug },
    ...router
  } = useRouter()
  const [text, setText] = useState<string | string[] | undefined>(phrase)

  useEffect(() => {
    setText(phrase)
  }, [phrase])

  const updateQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    filterbyText(e.target.value, router, slug)
  }

  return (
    <SearchInputContext.Provider
      value={{ text: text, updatePhrase: throttle(updateQuery, 1000) }}
    >
      {children}
    </SearchInputContext.Provider>
  )
}

export const useSearchInput = () => useContext(SearchInputContext)
