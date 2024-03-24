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

import { ProjectIdProps, withProjectId } from "../../Hoc/withProjectId"

const ControlButtonStyles = {
  p: "1rem",
  flex: "50%",
  _hover: { opacity: "0.5", backgroundColor: "grey.200" },
  fontSize: "lg",
}

interface SummaryControlProps extends ProjectIdProps {
  onOpen: () => void
}

const SummaryControl = ({ onOpen, projectId }: SummaryControlProps) => {
  const navigate = useNavigate()

  const handleEditProject = () => {
    navigate(`/project/edit?projectId=${Number(projectId)}`)
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
              onClick={handleEditProject}
              {...ControlButtonStyles}>
              수정하기
            </Button>
            <Button
              onClick={onOpen}
              {...ControlButtonStyles}>
              삭제하기
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default withProjectId(SummaryControl)
