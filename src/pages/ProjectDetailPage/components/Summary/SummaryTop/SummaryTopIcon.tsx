import {
  Flex,
  IconButton,
  IconButtonProps,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"

import { usePostLikeMutation } from "../../../hooks/mutations/usePostLikeMutation"
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
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const isButton = props["aria-label"].toLowerCase().includes("button")
  const isLike = props["aria-label"].toLowerCase().includes("like")
  console.log(isLike)
  return (
    <Flex
      gap="0.7rem"
      alignItems="center"
      cursor={isButton ? "pointer" : ""}
      _hover={isButton ? { opacity: "0.5" } : {}}>
      {isLike ? (
        <IconButton
          onClick={() => {
            postLikeMutation.mutate({ projectId: Number(projectId) })
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
