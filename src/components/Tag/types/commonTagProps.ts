import { ReactNode } from "react"

import { FlexProps } from "@chakra-ui/react"

export interface CommonTagProps extends FlexProps {
  leftElement?: ReactNode
  label: ReactNode
  rightElement?: ReactNode
}
