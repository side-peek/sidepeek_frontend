import { Box, Button, Flex, Input } from "@chakra-ui/react"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"

import { useTechStacksFieldsArray } from "@pages/ProjectEditPage/hooks/useTechStacksFieldsArray"

import StackSearchBox from "./components/StackSearchBox"

const TechStacksFields = () => {
  const {
    fields,
    register,
    setCategory,
    appendNewFields,
    appendStack,
    selectedStacks,
  } = useTechStacksFieldsArray()

  return (
    <div>
      {fields.map((field, index) => {
        return (
          <Flex key={field.id}>
            <Input
              flex="2"
              variant="flushed"
              placeholder="분야를 입력해주세요"
              {...register(`techStacks.${index}.category` as const, {
                required: "스킬입력은 필수입니다",
              })}
              onChange={(e) => {
                setCategory(index, e.target.value)
              }}
            />
            <Flex
              flex="8"
              flexDir="column">
              <StackSearchBox
                onClickResultItem={(skill) => {
                  appendStack(index, skill)
                }}
              />
              <Box>
                {selectedStacks(index).map((skill) => {
                  return (
                    <CloseButtonTag
                      key={skill.name}
                      label={skill.name}
                      onClickCloseButton={() => {}}
                    />
                  )
                })}
              </Box>
            </Flex>
          </Flex>
        )
      })}
      <Button onClick={appendNewFields}>+ 기술스택 분류 추가하기</Button>
    </div>
  )
}

export default TechStacksFields
