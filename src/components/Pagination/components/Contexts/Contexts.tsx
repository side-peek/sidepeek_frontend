import { ReactNode, createContext, useState } from "react"

interface PaginationContext {
  currentPage: number
  totalPages: number
  handleSelectPage: (page: number) => void
  handlePrevPage: () => void
  handleNextPage: () => void
}

interface PaginationProviderProps {
  limit: number
  total: number
  onPageChange: (page: number) => void
  children: ReactNode
}

export const PaginationContext = createContext<PaginationContext>({
  currentPage: 0,
  totalPages: 0,
  handleSelectPage: () => {},
  handlePrevPage: () => {},
  handleNextPage: () => {},
})

const PaginationProvider = ({
  limit,
  total,
  onPageChange,
  children,
}: PaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState(12)
  const totalPages = Math.ceil(total / limit)

  const handleSelectPage = (page: number) => {
    onPageChange(page)
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      handleSelectPage(currentPage - 1)
    }
  }
  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      handleSelectPage(currentPage + 1)
    }
  }

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        totalPages,
        handleSelectPage,
        handlePrevPage,
        handleNextPage,
      }}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
