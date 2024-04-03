import { useNavigate } from "react-router-dom"

import { Button, Icon } from "@chakra-ui/react"
import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack"

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button
      position="absolute"
      top="0"
      left="0"
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
