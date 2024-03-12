import { IconButton, IconButtonProps } from "@chakra-ui/react"

interface SummaryRightIconProps extends IconButtonProps {
  direction: string
  onClick: () => void
}

const SummaryRightIcon = ({
  direction,
  onClick,
  ...props
}: SummaryRightIconProps) => {
  const directionStyle =
    direction === "left" ? { left: "-6%" } : { right: "-6%" }

  return (
    <IconButton
      top="44%"
      position="absolute"
      bgColor="grey.300"
      height="5rem"
      width="5rem"
      borderRadius="50%"
      zIndex="5"
      onClick={onClick}
      {...directionStyle}
      {...props}
    />
  )
}

export default SummaryRightIcon
