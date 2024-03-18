import { Box, Button, Flex } from "@chakra-ui/react"
import { Skill } from "api-models"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"
import { FieldProps } from "@components/TechStack/hooks/useTechStack"

import { filterSelectedStack } from "@pages/ProjectEditPage/utils/filterSelectedStack"

import StackSearchBox from "../../pages/ProjectEditPage/components/TechStacksFields/components/StackSearchBox"

//useTechStack hook을 사용하여 제어 컴포넌트처럼 사용
const TechStackSection = ({
  fieldValue,
  onAppendField,
  onAppendStack,
  onDeleteField,
  onDeleteStack,
  children,
}: FieldProps<Skill>) => {
  return (
    <>
      {fieldValue?.map((field, index) => {
        const selectedData = field.data
        return (
          <Flex key={field.id || index}>
            {children}
            <StackSearchBox
              onClick={() => onDeleteField(index)}
              render={({ techStacks }) => {
                return (
                  <Box>
                    {filterSelectedStack(techStacks, selectedData).map(
                      (techStack) => {
                        return (
                          <Box
                            cursor="pointer"
                            onClick={() => onAppendStack(techStack, index)}
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
              {selectedData?.map((stack) => (
                <CloseButtonTag
                  key={stack.name}
                  label={stack.name}
                  onClickCloseButton={() => onDeleteStack(stack, index)}
                />
              ))}
            </Box>
          </Flex>
        )
      })}
      <Button onClick={() => onAppendField()}>기술스택 추가</Button>
    </>
  )
}
export default TechStackSection
