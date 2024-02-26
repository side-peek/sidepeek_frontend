import { IconButton, IconButtonProps } from "@chakra-ui/react"

interface ProjectDetailSummaryRightIconProps extends IconButtonProps {
  direction: string
  onClick: () => void
}

const ProjectDetailSummaryRightIcon = ({
  direction,
  onClick,
  ...props
}: ProjectDetailSummaryRightIconProps) => {
  const directionStyle =
    direction === "left" ? { left: "-6%" } : { right: "-6%" }

  return (
    <IconButton
      top="44%"
      position="absolute"
      bgColor="#d9d9d9"
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

export default ProjectDetailSummaryRightIcon
