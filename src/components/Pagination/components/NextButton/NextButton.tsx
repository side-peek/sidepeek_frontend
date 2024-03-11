import { useContext } from "react"

import { Button } from "@chakra-ui/react"

import { moveButtonStyles } from "@components/Pagination/styles/moveButtonStyles"

import { PaginationContext } from "../../stores/contexts"

const NextButton = () => {
  const { handleNextPage } = useContext(PaginationContext)
  return (
    <Button
      {...moveButtonStyles}
      onClick={handleNextPage}>
      다음
    </Button>
  )
}

export default NextButton
