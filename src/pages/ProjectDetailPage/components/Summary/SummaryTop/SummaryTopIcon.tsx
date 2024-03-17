import {
  Flex,
  IconButton,
  IconButtonProps,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"

import { useDeleteLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteLikeMutation"
import { usePostLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostLikeMutation"

import { ProjectIdProps, withProjectId } from "../../Hoc/withProjectId"

interface SummaryTopIconProps extends IconButtonProps, ProjectIdProps {
  count?: number
}

const SummaryTopIcon = ({
  count,
  projectId,
  ...props
}: SummaryTopIconProps) => {
  const { postLikeMutation } = usePostLikeMutation()
  const { deleteLikeMutation } = useDeleteLikeMutation()

  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const isButton = props["aria-label"].toLowerCase().includes("button")
  const isLike = props["aria-label"].toLowerCase().includes("like")
  return (
    <Flex
      gap="0.7rem"
      alignItems="center"
      cursor={isButton ? "pointer" : ""}
      _hover={isButton ? { opacity: "0.5" } : {}}>
      {isLike ? (
        <IconButton
          onClick={() => {
            postLikeMutation({ projectId: Number(projectId) })
            deleteLikeMutation({ likeId: 12 })
          }}
          {...props}
        />
      ) : (
        <IconButton {...props} />
      )}
      <Text fontSize={isLargerThan1200 ? "xl" : "md"}>{count}</Text>
    </Flex>
  )
}
export default withProjectId(SummaryTopIcon)
