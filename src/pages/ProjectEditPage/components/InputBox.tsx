/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  FieldError,
  UseFormRegisterReturn,
  useFormContext,
} from "react-hook-form"

import {
  BoxProps,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react"

interface TextInputProps extends BoxProps {
  label: string
  placeholder?: string
  footer?: string
  register: UseFormRegisterReturn
  fielderror?: FieldError
  type?: "input" | "textarea" | "date"
}

const InputBox = ({
  label,
  register,
  placeholder,
  footer,
  type = "input",
  fielderror,
  ...props
}: TextInputProps) => {
  console.log(useFormContext())
  return (
    <FormControl
      isInvalid={!!fielderror?.message}
      {...props}>
      <Flex
        flexDir="column"
        gap="10px">
        <FormLabel
          fontSize="1.3rem"
          fontWeight="600">
          {label}
        </FormLabel>
        {type === "input" ? (
          <Input
            height="3rem"
            fontSize="xl"
            isRequired={false}
            placeholder={placeholder}
            {...register}
          />
        ) : (
          <Textarea
            height="6rem"
            fontSize="xl"
            isRequired={false}
            placeholder={placeholder}
            {...register}
          />
        )}
        {footer && (
          <Text
            fontSize="sm"
            color="grey">
            {footer}
          </Text>
        )}
      </Flex>
      {fielderror && <Text>{fielderror.message}</Text>}
    </FormControl>
  )
}

export default InputBox
