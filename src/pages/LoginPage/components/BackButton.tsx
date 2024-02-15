import { useNavigate } from "react-router-dom"

import { Button, Image } from "@chakra-ui/react"

import BackSpaceSVG from "@assets/svgs/keyboard_backspace.svg"

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
      <Image
        src={BackSpaceSVG}
        alt="backspace"
      />
    </Button>
  )
}

export default BackButton
