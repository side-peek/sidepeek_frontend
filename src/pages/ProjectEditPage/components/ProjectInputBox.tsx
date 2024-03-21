import { ReactElement, cloneElement, isValidElement } from "react"
import { useFormContext } from "react-hook-form"

import { BoxProps, Flex, InputElementProps, Text } from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"

import { projectInputRegister } from "../constants/registerOptions"
import { ProjectFormValues } from "../types/ProjectFormValues"
import ErrorText from "./styles/ErrorText"

interface ProjectInputBoxProps extends BoxProps {
  name: keyof ProjectFormValues
  label: string
  footer?: string
  children?: ReactElement
  width?: string
}

const ProjectInputBox = ({
  name,
  label,
  footer,
  children,
  width,
}: ProjectInputBoxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProjectFormValues>()

  return (
    <Flex
      flexDir="column"
      gap="5px"
      width={width}>
      <label htmlFor={name}>
        <Text
          fontSize="md"
          as="b">
          {label}
        </Text>
      </label>
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => <ErrorText message={message} />}
      />
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
    </Flex>
  )
}

export default ProjectInputBox
