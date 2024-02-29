import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

import { Button, Icon } from "@chakra-ui/react"

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button
      position="absolute"
      top="3%"
      left="3%"
      w="3rem"
      h="2rem"
      p="0"
      background="transparent"
      onClick={() => navigate(-1)}>
      <Icon
        as={IoIosArrowRoundBack}
        width="4rem"
        height="4rem"
      />
    </Button>
  )
}

export default BackButton
