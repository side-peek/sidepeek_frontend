import { useContext } from "react"

import { Button } from "@chakra-ui/react"

import { PaginationContext } from "../Contexts/Contexts"

const PrevButton = () => {
  const { handlePrevPage } = useContext(PaginationContext)
  return <Button onClick={handlePrevPage}>이전</Button>
}

export default PrevButton
