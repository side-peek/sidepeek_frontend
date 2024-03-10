import { useContext, useMemo } from "react"

import { Button } from "@chakra-ui/react"

import { MAX_PAGES_COUNT } from "@components/Pagination/constants/constants"
import { setPageButtonStyles } from "@components/Pagination/styles/pageButtonStyles"

import { PaginationContext } from "../Contexts/Contexts"

const PageButtons = () => {
  const { totalPages, currentPage, handleSelectPage } =
    useContext(PaginationContext)

  const startPage =
    currentPage % MAX_PAGES_COUNT === 0
      ? currentPage - (MAX_PAGES_COUNT - 1)
      : Math.floor(currentPage / MAX_PAGES_COUNT) * MAX_PAGES_COUNT + 1

  const pages = useMemo(() => {
    console.log("재연산 test")
    return Array.from(
      { length: Math.min(MAX_PAGES_COUNT, totalPages - startPage + 1) },
      (_, idx) => startPage + idx,
    )
  }, [startPage, totalPages])

  return (
    <div>
      {pages.map((page) => (
        <Button
          key={page}
          {...setPageButtonStyles({ isSelected: page === currentPage })}
          onClick={() => handleSelectPage(page)}>
          {page}
        </Button>
      ))}
    </div>
  )
}

export default PageButtons
