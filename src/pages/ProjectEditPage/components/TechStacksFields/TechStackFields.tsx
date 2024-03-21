import { useState } from "react"
import { useWatch } from "react-hook-form"

import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Image,
  Input,
} from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"
import CloseButtonTag from "@components/Tag/components/CloseButtonTag"
import CommonTag from "@components/Tag/components/CommonTag"

import { useTechStacksMethods } from "@pages/ProjectEditPage/components/TechStacksFields/hooks/useTechStacksMethods"
import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import CloseButton from "../styles/CloseButton"
import ErrorText from "../styles/ErrorText"
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
    control,
  } = useTechStacksMethods()

  const [max, setMax] = useState(0)
  const MAX_FIELDS_NUMBER = 4
  const MIN_FIELDS_NUMBER = 1

  const watchFields = useWatch({ name: "techStacks", control })

  const controlledStacks = fields.map((field, index) => {
    return {
      ...field,
      ...watchFields[index],
    }
  })

  return (
    <Flex
      flexDir="column"
      gap="8px">
      {controlledStacks?.map((field, index) => {
        register(`techStacks.${index}.data`, {
          validate: (data) => data?.length !== 0 || "하나 이상 선택해주세요",
        })
        return (
          <FieldContainer
            key={field.id}
            gap="5px">
            <Box flex="1">
              <Input
                placeholder="기술스택 분야를 입력해주세요"
                {...register(`techStacks.${index}.category`, {
                  required: "분야 입력은 필수입니다",
                })}
              />
              <ErrorMessage
                name={`techStacks[${index}].category` as const}
                errors={errors}
                render={({ message }) => {
                  return <ErrorText message={message} />
                }}
              />
            </Box>

            <Box flex="1">
              <ErrorMessage
                name={`techStacks.${index}.data` as const}
                errors={errors}
                render={({ message }) => {
                  return <ErrorText message={message} />
                }}
              />
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
              gap="3px"
              flex="6"
              flexWrap="nowrap">
              {selectedStacks(index)?.map((stack) => (
                <CloseButtonTag
                  key={stack.name}
                  label={stack.name}
                  onClickCloseButton={() => removeStack(index, stack)}
                />
              ))}
            </Box>
            {index >= MIN_FIELDS_NUMBER && (
              <CloseButton
                h="auto"
                onClick={() => {
                  setMax(max - 1)
                  removeField(index)
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
            appendNewFields()
          }}>
          기술스택 추가
        </Button>
      )}
    </Flex>
  )
}
export default TechStacksFields
