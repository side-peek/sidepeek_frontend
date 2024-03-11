import { useContext } from "react"

import { Button } from "@chakra-ui/react"

import { moveButtonStyles } from "@components/Pagination/styles/moveButtonStyles"

import { PaginationContext } from "../../stores/contexts"

const PrevButton = () => {
  const { handlePrevPage } = useContext(PaginationContext)
  return (
    <Button
      {...moveButtonStyles}
      onClick={handlePrevPage}>
      이전
    </Button>
  )
}

export default PrevButton
