import { Controller } from "react-hook-form"
import { MdClose } from "react-icons/md"

import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Image,
  Input,
} from "@chakra-ui/react"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"
import CommonTag from "@components/Tag/components/CommonTag"

import { useTechStacksMethods } from "@pages/ProjectEditPage/components/TechStacksFields/hooks/useTechStacksMethods"
import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import FieldContainer from "../styles/FieldContainer"
import SearchResultContainer from "../styles/SearchResultContainer"
import StackSearchBox from "./components/StackSearchBox"

const TechStacksFields = () => {
  const {
    fields,
    control,
    appendNewFields,
    removeField,
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
                render={({ field }) => (
                  <Input
                    placeholder="기술스택 분야를 입력해주세요"
                    {...field}
                  />
                )}
              />
            </Box>

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
                            onClick={() => appendStack(index, techStack)}
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
            <Box
              cursor="pointer"
              pos="absolute"
              top="5px"
              left="5px"
              onClick={() => removeField(index)}>
              <MdClose size="20" />
            </Box>
          </FieldContainer>
        )
      })}
      <Button onClick={appendNewFields}>기술스택 추가</Button>
    </Flex>
  )
}
export default TechStacksFields
