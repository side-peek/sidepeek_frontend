import { useNavigate } from "react-router-dom"

import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react"
import { CiMenuKebab } from "@react-icons/all-files/ci/CiMenuKebab"

import { ProjectIdProps, withProjectId } from "../../Hoc/withProjectId"

const ControlButtonStyles = {
  p: "1rem",
  flex: "50%",
  _hover: { opacity: "0.5", backgroundColor: "grey.200" },
  fontSize: "lg",
}

interface SummaryPopOverProps extends ProjectIdProps {
  handleOpenDeleteModal: () => void
}

const SummaryPopOver = ({
  handleOpenDeleteModal,
  projectId,
}: SummaryPopOverProps) => {
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
          fontSize="3xl"
        />
      </PopoverTrigger>
      <PopoverContent
        w="100%"
        h="10rem">
        <PopoverArrow />
        <PopoverBody
          h="100%"
          p="0">
          <Stack h="100%">
            <Button
              onClick={handleEditProject}
              {...ControlButtonStyles}>
              수정하기
            </Button>
            <Button
              onClick={handleOpenDeleteModal}
              {...ControlButtonStyles}>
              삭제하기
            </Button>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default withProjectId(SummaryPopOver)
