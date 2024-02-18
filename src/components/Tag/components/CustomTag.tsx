import { Tag, TagLabel } from "@chakra-ui/react"

import { CustomTagProps } from "../types/customTag"

const CustomTag = ({
  label,
  variant = "outline",
  colorScheme,
  onClickLabel,
}: CustomTagProps) => {
  return (
    <>
      <Tag
        cursor="pointer"
        size="lg"
        variant={variant}
        colorScheme={colorScheme}
        onClick={onClickLabel}
        padding="0.75rem">
        <TagLabel>{label}</TagLabel>
      </Tag>
    </>
  )
}

export default CustomTag