import { useMemo, useState } from "react"

import { Button } from "@chakra-ui/react"

import useQueryString from "@hooks/useQueryString"

import { MAX_PAGES_COUNT } from "./constants/constants"
import { moveButtonStyles } from "./styles/moveButtonStyles"
import { setPageButtonStyles } from "./styles/pageButtonStyles"

interface PaginationRQProps {
  tab: string
  limit: number
  totalProjectsCount: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const PaginationRQ = ({
  tab,
  limit,
  totalProjectsCount,
  setPage,
}: PaginationRQProps) => {
  const { navigate, paramsValue: tempPageInfo } = useQueryString("page")
  const pageInfo =
    tempPageInfo !== null && isNaN(Number(tempPageInfo))
      ? 1
      : Number(tempPageInfo)

  const [currentPage, setCurrentPage] = useState(pageInfo)

  const handleSelectPage = (page: number) => {
    localStorage.setItem(`${tab}-page`, page.toString())
    setPage(page)
    setCurrentPage(page)
    navigate(`?tab=${tab}&page=${page}`)
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

  const totalPages = Math.ceil(totalProjectsCount / limit)

  const startPage =
    currentPage % MAX_PAGES_COUNT === 0
      ? currentPage - (MAX_PAGES_COUNT - 1)
      : Math.floor(currentPage / MAX_PAGES_COUNT) * MAX_PAGES_COUNT + 1

  const pages = useMemo(() => {
    return Array.from(
      { length: Math.min(MAX_PAGES_COUNT, totalPages - startPage + 1) },
      (_, idx) => startPage + idx,
    )
  }, [startPage, totalPages])

  return (
    <>
      <Button
        {...moveButtonStyles}
        onClick={handlePrevPage}>
        이전
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          {...setPageButtonStyles({ isSelected: page === currentPage })}
          onClick={() => handleSelectPage(page)}>
          {page}
        </Button>
      ))}
      <Button
        {...moveButtonStyles}
        onClick={handleNextPage}>
        다음
      </Button>
    </>
  )
}

export default PaginationRQ
