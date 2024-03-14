import {
  Flex,
  IconButton,
  IconButtonProps,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

interface SummaryTopIconProps extends Omit<IconButtonProps, "onClick"> {
  count?: number
  ownerId?: number
  onClick?: (isOwner: boolean) => void
}

const SummaryTopIcon = ({
  count,
  onClick,
  ownerId,
  ...props
}: SummaryTopIconProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const isButton = props["aria-label"].toLowerCase().includes("button")
  const isLike = props["aria-label"].toLowerCase().includes("like")
  const userId = useUserInfoData()
  const isOwner = ownerId === userId

  const handleClick = () => {
    if (isButton && onClick) {
      onClick(isOwner)
    }
  }

  return (
    <Flex
      gap="0.7rem"
      alignItems="center"
      cursor={isButton ? "pointer" : ""}
      _hover={isButton ? { opacity: "0.5" } : {}}
      onClick={handleClick}>
      {isLike ? <IconButton {...props} /> : <IconButton {...props} />}
      <Text fontSize={isLargerThan1200 ? "xl" : "md"}>{count}</Text>
    </Flex>
  )
}
export default SummaryTopIcon
