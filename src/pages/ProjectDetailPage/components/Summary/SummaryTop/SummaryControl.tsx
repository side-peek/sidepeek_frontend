import { CiMenuKebab } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react"

interface SummaryControlProps {
  onOpen: () => void
}

const SummaryControl = ({ onOpen }: SummaryControlProps) => {
  const navigate = useNavigate()

  const handleEditProject = () => {
    navigate("/project/edit")
  }

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          mr="-1rem"
          icon={<CiMenuKebab />}
          aria-label="control"
          fontSize="3rem"
        />
      </PopoverTrigger>
      <PopoverContent
        w="100%"
        height="10rem">
        <PopoverArrow />
        <PopoverBody
          h="100%"
          p="0">
          <VStack
            justifyContent="space-between"
            h="100%"
            w="100%">
            <Button
              p="1rem"
              flex="50%"
              onClick={handleEditProject}
              _hover={{ opacity: 0.5, bg: "grey.200" }}
              fontSize="lg">
              수정하기
            </Button>
            <Button
              p="1rem"
              flex="50%"
              onClick={onOpen}
              _hover={{ opacity: 0.5, bg: "grey.200" }}
              fontSize="lg">
              삭제하기
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SummaryControl
