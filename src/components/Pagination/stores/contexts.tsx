import { createContext, useState } from "react"

import {
  PaginationContextType,
  PaginationProviderProps,
} from "@components/Pagination/types/types"

export const PaginationContext = createContext<PaginationContextType>({
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
  const [currentPage, setCurrentPage] = useState(1)
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
