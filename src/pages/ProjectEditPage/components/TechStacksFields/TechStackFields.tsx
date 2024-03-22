import { useState } from "react"

import { Box, Button, Flex, Input } from "@chakra-ui/react"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"

import { useTechStackStore } from "@stores/useTechStackStore"

import CloseButton from "../styles/CloseButton"
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
  const [max, setMax] = useState(0)
  const [MAX_FIELDS_NUMBER, MIN_FIELDS_NUMBER] = [4, 1]

  return (
    <Flex
      flexDir="column"
      gap="8px">
      {fields?.map((field, index) => {
        return (
          <FieldContainer
            key={index}
            gap="5px">
            <Box flex="1">
              <Input
                placeholder="기술스택 분야를 입력해주세요"
                width="20rem"
                required={true}
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
