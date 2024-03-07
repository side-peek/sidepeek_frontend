import { ReactNode, createContext, useState } from "react"

interface PaginationContext {
  currentPage: number
  totalPages: number
  handlePrevPage: () => void
  handleNextPage: () => void
}

interface PaginationProviderProps {
  limit: number
  total: number
  children: ReactNode
}

export const PaginationContext = createContext<PaginationContext>({
  currentPage: 0,
  totalPages: 0,
  handlePrevPage: () => {},
  handleNextPage: () => {},
})

const PaginationProvider = ({
  limit,
  total,
  children,
}: PaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(total / limit)

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1)
    }
  }
  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((currentPage) => currentPage + 1)
    }
  }

  return (
    <PaginationContext.Provider
      value={{ currentPage, totalPages, handlePrevPage, handleNextPage }}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
