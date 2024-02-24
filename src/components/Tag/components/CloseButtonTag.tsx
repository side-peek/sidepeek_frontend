import { MouseEventHandler } from "react"

import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react"

import { CustomTagProps } from "../types/customTag"

interface CloseButtonTagProps extends Omit<CustomTagProps, "onClickLabel"> {
  onClickCloseButton: MouseEventHandler
}

const CloseButtonTag = ({
  label,
  variant = "outline",
  colorScheme,
  onClickCloseButton,
}: CloseButtonTagProps) => {
  return (
    <>
      <Tag
        size="lg"
        variant={variant}
        colorScheme={colorScheme}
        padding="0.75rem">
        <TagLabel>{label}</TagLabel>
        <TagCloseButton
          onClick={(e) => {
            e.stopPropagation()
            onClickCloseButton(e)
          }}
        />
      </Tag>
    </>
  )
}

export default CloseButtonTag
