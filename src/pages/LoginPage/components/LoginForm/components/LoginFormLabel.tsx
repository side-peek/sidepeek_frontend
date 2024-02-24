import { PropsWithChildren } from "react"
import { FieldError } from "react-hook-form"

import {
  Flex,
  FormErrorMessage,
  FormLabel,
  Spacer,
  Text,
} from "@chakra-ui/react"

interface LoginFormLabelProps extends PropsWithChildren {
  error?: FieldError
}

const LoginFormLabel = ({ children, error }: LoginFormLabelProps) => {
  return (
    <FormLabel>
      <Flex align="center">
        <Text
          px="0.8rem"
          fontSize="1.2rem"
          fontWeight="bold">
          {children}
        </Text>
        <Spacer />
        <FormErrorMessage>{error && error.message}</FormErrorMessage>
      </Flex>
    </FormLabel>
  )
}

export default LoginFormLabel
