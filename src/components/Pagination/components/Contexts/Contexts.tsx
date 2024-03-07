import { ReactNode, createContext } from "react"

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
  const currentPage = 1
  const totalPages = Math.ceil(total / limit)

  const handlePrevPage = () => {
    console.log("이전 버튼 클릭")
  }
  const handleNextPage = () => {
    console.log("다음 버튼 클릭")
  }

  return (
    <PaginationContext.Provider
      value={{ currentPage, totalPages, handlePrevPage, handleNextPage }}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
