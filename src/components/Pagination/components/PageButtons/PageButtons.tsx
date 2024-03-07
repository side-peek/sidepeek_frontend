import { useContext, useMemo } from "react"

import { Button } from "@chakra-ui/react"

import { pageButtonStyles } from "@components/Pagination/styles/pageButtonStyles"

import { PaginationContext } from "../Contexts/Contexts"

const PageButtons = () => {
  const { totalPages, currentPage, handleSelectPage } =
    useContext(PaginationContext)

  const startPage =
    currentPage % 10 === 0
      ? currentPage - 9
      : Math.floor(currentPage / 10) * 10 + 1

  const pages = useMemo(() => {
    console.log("재연산 test")
    return Array.from(
      { length: Math.min(10, totalPages - startPage + 1) },
      (_, idx) => startPage + idx,
    )
  }, [startPage, totalPages])

  return (
    <div>
      {pages.map((page) => (
        <Button
          key={page}
          {...pageButtonStyles(page, currentPage)}
          onClick={() => handleSelectPage(page)}>
          {page}
        </Button>
      ))}
    </div>
  )
}

export default PageButtons
