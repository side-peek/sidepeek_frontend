export interface PaginationContextType {
  currentPage: number
  totalPages: number
  handleSelectPage: (page: number) => void
  handlePrevPage: () => void
  handleNextPage: () => void
}

export interface PaginationProviderProps {
  limit: number
  total: number
  onPageChange: (page: number) => void
  children: React.ReactNode
}
