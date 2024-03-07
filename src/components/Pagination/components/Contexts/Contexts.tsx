import { ReactNode, createContext } from "react"

interface PaginationContext {
  currentPage: number
  totalPages: number
}

interface PaginationProviderProps {
  limit: number
  total: number
  children: ReactNode
}

export const PaginationContext = createContext<PaginationContext>({
  currentPage: 0,
  totalPages: 0,
})

const PaginationProvider = ({
  limit,
  total,
  children,
}: PaginationProviderProps) => {
  const currentPage = 1
  const totalPages = Math.ceil(total / limit)

  return (
    <PaginationContext.Provider value={{ currentPage, totalPages }}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
