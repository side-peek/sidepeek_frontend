import { ReactElement, cloneElement, isValidElement } from "react"
import { useFormContext } from "react-hook-form"

import { Box, BoxProps, InputElementProps, Text } from "@chakra-ui/react"

import { projectInputRegister } from "../constants/registerOptions"
import { ProjectFormValues } from "../types/ProjectFormValues"

interface TextInputProps extends BoxProps {
  name: keyof ProjectFormValues
  label: string
  footer?: string
  children?: ReactElement
}

const ProjectInputBox = ({ name, label, footer, children }: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProjectFormValues>()

  return (
    <Box>
      <label htmlFor={name}>
        <Text
          fontSize="md"
          as="b">
          {label}
        </Text>
      </label>
      {errors[name] && <Text>{errors[name]?.message}</Text>}

      {isValidElement(children) &&
        cloneElement(children as ReactElement<InputElementProps>, {
          id: name,
          ...register(name, projectInputRegister[name]),
        })}

      {footer && (
        <Text
          fontSize="sm"
          color="grey">
          {footer}
        </Text>
      )}
    </Box>
  )
}

export default ProjectInputBox
