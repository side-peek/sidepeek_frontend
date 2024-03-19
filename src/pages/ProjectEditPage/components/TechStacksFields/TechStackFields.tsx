import { Controller } from "react-hook-form"

import { Box, Button, Flex, Input } from "@chakra-ui/react"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"

import { useTechStacksMethods } from "@pages/ProjectEditPage/components/TechStacksFields/hooks/useTechStacksMethods"
import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import FieldContainer from "../FieldContainer"
import StackSearchBox from "./components/StackSearchBox"

const TechStacksFields = () => {
  const {
    fields,
    control,
    appendNewFields,
    appendStack,
    selectedStacks,
    removeStack,
  } = useTechStacksMethods()

  return (
    <Flex
      flexDir="column"
      gap="8px">
      {fields.map((field, index) => {
        return (
          <FieldContainer key={field.id}>
            <Box>
              <Controller
                name={`techStacks.${index}.category`}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input {...field} />}
              />
            </Box>
            <StackSearchBox
              render={({ techStacks }) => {
                return (
                  <Box>
                    {filterSelectedId(techStacks, selectedStacks(index)).map(
                      (techStack) => {
                        return (
                          <Box
                            cursor="pointer"
                            onClick={() => appendStack(index, techStack)}
                            key={techStack.name}>
                            {techStack.name}
                          </Box>
                        )
                      },
                    )}
                  </Box>
                )
              }}
            />
            <Box flexWrap="nowrap">
              {selectedStacks(index).map((stack) => (
                <CloseButtonTag
                  key={stack.name}
                  label={stack.name}
                  onClickCloseButton={() => removeStack(index, stack)}
                />
              ))}
            </Box>
          </FieldContainer>
        )
      })}
      <Button onClick={appendNewFields}>기술스택 추가</Button>
    </Flex>
  )
}
export default TechStacksFields
