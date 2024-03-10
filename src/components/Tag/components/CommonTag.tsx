import { Box } from "@chakra-ui/react"

import { CommonTagProps } from "../types/commonTagProps"

const CommonTag = ({
  leftElement,
  label,
  rightElement,
  ...props
}: CommonTagProps) => {
  return (
    <Box
      as="button"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      border="1.5px solid"
      borderRadius="1rem"
      borderColor="grey.400"
      gap="0.5rem"
      padding="0.5rem"
      {...props}>
      {leftElement && leftElement}
      {label}
      {rightElement && rightElement}
    </Box>
  )
}

export default CommonTag
