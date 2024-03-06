import { useFieldArray, useFormContext } from "react-hook-form"

import { Box, Button, Flex, Input } from "@chakra-ui/react"

import { ProjectFormValues } from "../../types/ProjectFormValues"
import StackSearchBox from "./components/StackSearchBox"

const TechStacksFields = () => {
  const { control, register, setValue, getValues, watch } =
    useFormContext<ProjectFormValues>()

  const { append, fields } = useFieldArray<ProjectFormValues>({
    control,
    name: "techStacks",
  })

  const appendNewField = () => {
    append({ category: "", data: [] })
  }

  return (
    <div>
      {fields.map((field, index) => {
        return (
          <Flex key={field.id}>
            <Input
              variant="flushed"
              placeholder="분야를 입력해주세요"
              {...register(`techStacks.${index}.category` as const, {
                required: "스킬입력은 필수입니다",
              })}
              onChange={(e) => {
                setValue(`techStacks.${index}.category`, e.target.value)
              }}
            />
            <StackSearchBox
              onClickResultItem={(skill) => {
                const selectedStack = getValues(`techStacks.${index}.data`)
                setValue(`techStacks.${index}.data`, [...selectedStack, skill])
              }}
            />
            <Box>
              {watch(`techStacks.${index}.data`).map((selectedSkill) => {
                return <div key={selectedSkill.id}>{selectedSkill.name}</div>
              })}
            </Box>
          </Flex>
        )
      })}
      <Button onClick={appendNewField}>+ 기술스택 분류 추가하기</Button>
    </div>
  )
}

export default TechStacksFields
