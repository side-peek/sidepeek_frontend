import { Link } from "react-router-dom"

import { Button, ButtonProps, Text } from "@chakra-ui/react"

const CreateProjectButton = (props: ButtonProps) => {
  return (
    <Button
      as={Link}
      to="/project/edit"
      {...props}>
      <Text
        flexGrow="1"
        textAlign="left">
        새 프로젝트
      </Text>
    </Button>
  )
}

export default CreateProjectButton
