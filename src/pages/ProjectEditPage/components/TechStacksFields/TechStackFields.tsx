import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"
import CloseButtonTag from "@components/Tag/components/CloseButtonTag"
import CommonTag from "@components/Tag/components/CommonTag"

import { useTechStacksMethods } from "@pages/ProjectEditPage/components/TechStacksFields/hooks/useTechStacksMethods"
import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import CloseButton from "../styles/CloseButton"
import FieldContainer from "../styles/FieldContainer"
import SearchResultContainer from "../styles/SearchResultContainer"
import StackSearchBox from "./components/StackSearchBox"

const TechStacksFields = () => {
  const {
    fields,
    appendNewFields,
    removeField,
    appendStack,
    selectedStacks,
    removeStack,
    register,
    errors,
    trigger,
  } = useTechStacksMethods()

  return (
    <Flex
      flexDir="column"
      gap="8px">
      {fields.map((field, index) => {
        register(`techStacks.${index}.data`, {
          validate: {
            isEmpty: (data) => {
              return (
                data?.length === 0 && "하나 이상의 기술 스택을 추가해주세요"
              )
            },
          },
        })

        return (
          <FieldContainer key={field.id}>
            <Box>
              <Input
                placeholder="기술스택 분야를 입력해주세요"
                {...register(`techStacks.${index}.category`, {
                  required: "분야를 입력해주세요",
                })}
              />
              <ErrorMessage
                name={`techStacks[${index}].category`}
                errors={errors}
                render={({ message }) => {
                  return (
                    <Text
                      as="b"
                      color="red.200">
                      {message}
                    </Text>
                  )
                }}
              />
            </Box>

            <Box>
              {errors?.techStacks && errors.techStacks[index]?.data && (
                <ErrorMessage
                  name={`techStacks.${index}.data`}
                  errors={errors}
                  render={({ message }) => {
                    return (
                      <Text
                        as="b"
                        color="red.200">
                        {message}
                      </Text>
                    )
                  }}
                />
              )}
              <StackSearchBox
                render={({ techStacks }) => {
                  return (
                    <SearchResultContainer>
                      {!techStacks.length && (
                        <AbsoluteCenter>
                          검색 결과가 존재하지 않습니다
                        </AbsoluteCenter>
                      )}
                      {filterSelectedId(techStacks, selectedStacks(index)).map(
                        (techStack) => {
                          return (
                            <Box
                              cursor="pointer"
                              onClick={() => {
                                appendStack(index, techStack)
                                trigger(`techStacks.${index}.data`, {
                                  shouldFocus: true,
                                })
                              }}
                              key={techStack.name}>
                              <CommonTag
                                leftElement={
                                  <Image
                                    src={techStack.iconImageUrl}
                                    boxSize="10"
                                  />
                                }
                                label={techStack.name}
                                border="none"
                              />
                            </Box>
                          )
                        },
                      )}
                    </SearchResultContainer>
                  )
                }}
              />
            </Box>
            <Box
              flexWrap="nowrap"
              marginLeft="5px">
              {selectedStacks(index).map((stack) => (
                <CloseButtonTag
                  key={stack.name}
                  label={stack.name}
                  onClickCloseButton={() => removeStack(index, stack)}
                />
              ))}
            </Box>
            {index >= 1 && <CloseButton onClick={() => removeField(index)} />}
          </FieldContainer>
        )
      })}
      <Button onClick={appendNewFields}>기술스택 추가</Button>
    </Flex>
  )
}
export default TechStacksFields
