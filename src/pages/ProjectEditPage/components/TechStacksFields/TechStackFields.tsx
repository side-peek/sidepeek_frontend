import { useEffect, useRef, useState } from "react"

import { Box, Button, Flex, Input } from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"
import CloseButtonTag from "@components/Tag/components/CloseButtonTag"

import { projectInputRegister } from "@pages/ProjectEditPage/constants/registerOptions"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import { useTechStackStore } from "@stores/useTechStackStore"

import CloseButton from "../styles/CloseButton"
import ErrorText from "../styles/ErrorText"
import FieldContainer from "../styles/FieldContainer"
import Field from "./components/Field"

const TechStacksFields = () => {
  const {
    fields,
    appendField,
    appendStack,
    deleteField,
    deleteStack,
    changeCategory,
  } = useTechStackStore()

  const {
    formState: { errors },
    register,
  } = useProjectFormContext()

  const ref = useRef<HTMLDivElement>(null)

  const [max, setMax] = useState(0)
  const [MAX_FIELDS_NUMBER, MIN_FIELDS_NUMBER] = [4, 1]

  useEffect(() => {
    register("techStacks", projectInputRegister["techStacks"])
  }, [register])

  useEffect(() => {
    if (errors.techStacks) {
      ref.current?.focus()
    }
  }, [errors.techStacks])

  return (
    <Flex
      flexDir="column"
      gap="8px">
      <ErrorMessage
        name="techStacks"
        errors={errors}
        render={({ message }) => <ErrorText message={message}></ErrorText>}
      />
      {fields?.map((field, index) => {
        return (
          <FieldContainer
            key={index}
            gap="5px"
            ref={ref}
            tabIndex={-1}>
            <Box flex="1">
              <Input
                placeholder="기술스택 분야를 입력해주세요"
                width="20rem"
                value={field.category || ""}
                onChange={(e) => changeCategory(e.target.value, index)}
              />
            </Box>
            <Box flex="1">
              <Field
                field={field}
                index={index}
                appendStack={appendStack}
              />
            </Box>

            <Box
              gap="3px"
              flex="6"
              flexWrap="nowrap">
              {field.skill?.map((stack) => (
                <CloseButtonTag
                  key={stack.name}
                  label={stack.name}
                  onClickCloseButton={() => deleteStack(stack, index)}
                />
              ))}
            </Box>
            {index >= MIN_FIELDS_NUMBER && (
              <CloseButton
                onClick={() => {
                  setMax(max - 1)
                  deleteField(index)
                }}
              />
            )}
          </FieldContainer>
        )
      })}
      {max < MAX_FIELDS_NUMBER && (
        <Button
          border="2px solid"
          borderColor="blue.200"
          onClick={() => {
            setMax(max + 1)
            appendField()
          }}>
          기술스택 추가
        </Button>
      )}
    </Flex>
  )
}
export default TechStacksFields
