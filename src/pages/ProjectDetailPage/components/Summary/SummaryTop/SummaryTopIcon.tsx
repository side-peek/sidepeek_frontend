import {
  Flex,
  IconButton,
  IconButtonProps,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"

interface SummaryTopIconProps extends Omit<IconButtonProps, "onClick"> {
  count?: number
  likeId?: number | null
  onClick?: (likeId: number | null) => void
}

const SummaryTopIcon = ({
  count,
  onClick,
  likeId,
  ...props
}: SummaryTopIconProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const isButton = props["aria-label"].toLowerCase().includes("button")
  const isLike = props["aria-label"].toLowerCase().includes("like")

  const handleClick = () => {
    if (isButton && onClick) {
      if (likeId === undefined) {
        return
      }
      onClick(likeId)
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
