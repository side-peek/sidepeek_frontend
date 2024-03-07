import { useContext } from "react"

import { Button } from "@chakra-ui/react"

import { PaginationContext } from "../Contexts/Contexts"

const NextButton = () => {
  const { handleNextPage } = useContext(PaginationContext)
  return <Button onClick={handleNextPage}>다음</Button>
}

export default NextButton
