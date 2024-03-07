import { useContext } from "react"

import { Button } from "@chakra-ui/react"

import { PaginationContext } from "../Contexts/Contexts"

const PageButtons = () => {
  const { totalPages, currentPage } = useContext(PaginationContext)
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1)

  return (
    <div>
      {pages.map((page) => (
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
