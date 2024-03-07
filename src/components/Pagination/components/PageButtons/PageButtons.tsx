import { useContext, useMemo } from "react"

import { Button } from "@chakra-ui/react"

import { PaginationContext } from "../Contexts/Contexts"

const PageButtons = () => {
  const { totalPages, currentPage } = useContext(PaginationContext)

  const startPage =
    currentPage % 10 === 0
      ? currentPage - 9
      : Math.floor(currentPage / 10) * 10 + 1

  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: Math.min(10, totalPages - startPage + 1) },
      (_, idx) => startPage + idx,
    )
  }, [startPage, totalPages])

  console.log(startPage)
  console.log(pageNumbers)
  console.log(currentPage)
  // 12 나누기 10 = 1
  // 1 * 10
  return (
    <div>
      {pageNumbers.map((page) => (
        <Button
          color={page === currentPage ? "red" : "black"}
          key={page}>
          {page}
        </Button>
      ))}
    </div>
  )
}

export default PageButtons
