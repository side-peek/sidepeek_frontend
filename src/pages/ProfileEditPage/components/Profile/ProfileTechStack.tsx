import { useState } from "react"
import { Controller } from "react-hook-form"

import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import { TechStack } from "api-models"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"

import { useExample } from "@pages/ProfileEditPage/hooks/useExample"
import { ProfileInfo } from "@pages/ProfileEditPage/types/types"
import StackSearchBox from "@pages/ProjectEditPage/components/TechStacksFields/components/StackSearchBox"
import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import ProfileCurrentTechStack from "./ProfileCurrentTechStack"

interface ProfileTechStackProps {
  techStacks: TechStack[]
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
}
const ProfileTechStack = ({
  techStacks,
  setProfileInfo,
}: ProfileTechStackProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  const [role, setRole] = useState("")

  const {
    fields,
    control,
    appendNewFields,
    appendStack,
    selectedStacks,
    removeStack,
    setCategory,
  } = useExample()

  return (
    <Box w="100%">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold"
        margin="1.5rem 0 1.5rem 1rem">
        기술스택
      </Text>
      <ProfileCurrentTechStack techStacks={techStacks} />
      {fields.map((field, index) => {
        return (
          <Flex
            key={field.id}
            direction={isLargerThan500 ? "row" : "column"}
            mb={isLargerThan500 ? "3rem" : "1.5rem"}>
            <Box
              flex={isLargerThan500 ? "0 0 25rem" : "0 0 3.5rem"}
              pr={isLargerThan500 ? "2rem" : "0rem"}>
              <Controller
                name={`techStacks.${index}.category`}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="직군을 입력해주세요"
                    onChange={(e) => {
                      const newCategory = e.target.value
                      setCategory(index, newCategory)
                      setRole(newCategory)
                    }}
                  />
                )}
              />
            </Box>
            <Box
              flex="0 0 30rem"
              borderLeft={isLargerThan500 ? "1px solid" : ""}
              borderTop={isLargerThan500 ? "" : "1px solid"}
              borderColor="grey.200"
              px={isLargerThan500 ? "2rem" : "0rem"}
              py={isLargerThan500 ? "0rem" : "1rem"}>
              <StackSearchBox
                render={({ techStacks }) => {
                  return (
                    <Box>
                      {filterSelectedId(techStacks, selectedStacks(index)).map(
                        (techStack) => {
                          return (
                            <Box
                              ml="1rem"
                              mb="0.3rem"
                              fontSize="1.2rem"
                              cursor="pointer"
                              _hover={{ fontWeight: "bold" }}
                              onClick={() => {
                                appendStack(index, techStack)
                                console.log(role, techStack.id)
                                setProfileInfo((profileInfo) => {
                                  const newTeckStack = {
                                    skillId: techStack.id,
                                    category: role,
                                  }
                                  return {
                                    ...profileInfo,
                                    techStacks: [
                                      ...profileInfo.techStacks,
                                      newTeckStack,
                                    ],
                                  }
                                })
                              }}
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
            </Box>

            <Box
              flexWrap="nowrap"
              flex="1 1 auto"
              borderLeft={isLargerThan500 ? "1px solid" : ""}
              borderTop={isLargerThan500 ? "" : "1px solid"}
              borderColor="grey.200"
              pl={isLargerThan500 ? "2rem" : 0}
              pt={isLargerThan500 ? "0" : "1rem"}>
              {selectedStacks(index).map((stack) => (
                <CloseButtonTag
                  key={stack.name}
                  label={stack.name}
                  onClickCloseButton={() => removeStack(index, stack)}
                />
              ))}
            </Box>
          </Flex>
        )
      })}
      <Center>
        <Button
          w="99%"
          h="3.2rem"
          border="1px solid"
          borderColor="grey.300"
          borderRadius="1rem"
          margin="auto auto"
          onClick={appendNewFields}>
          + 기술스택 추가
        </Button>
      </Center>
    </Box>
  )
}

export default ProfileTechStack
