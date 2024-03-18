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

const SummaryControl = () => {
  const navigate = useNavigate()
  const handleEditProject = () => {
    navigate("/project/edit")
  }
  const handleDeleteProject = () => {}
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
      <PopoverContent w="100%">
        <PopoverArrow />
        <PopoverBody>
          <VStack>
            <Button onClick={handleEditProject}>수정하기</Button>
            <Button onClick={handleDeleteProject}>삭제하기</Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SummaryControl