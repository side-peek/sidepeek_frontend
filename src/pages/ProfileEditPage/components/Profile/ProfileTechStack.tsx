import { useState } from "react"
import { Controller } from "react-hook-form"

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"

import { useExample } from "@pages/ProfileEditPage/hooks/useExample"
import { ProfileInfo } from "@pages/ProfileEditPage/types/types"
import StackSearchBox from "@pages/ProjectEditPage/components/TechStacksFields/components/StackSearchBox"
import { filterSelectedStack } from "@pages/ProjectEditPage/utils/filterSelectedStack"

interface ProfileTechStackProps {
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
}
const ProfileTechStack = ({ setProfileInfo }: ProfileTechStackProps) => {
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
    <Box
      w="100%"
      pb="2rem">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold"
        margin="1.5rem 0 1.5rem 1rem">
        기술스택
      </Text>
      {fields.map((field, index) => {
        return (
          <Flex key={field.id}>
            <Box>
              <Controller
                name={`techStacks.${index}.category`}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    onChange={(e) => {
                      const newCategory = e.target.value
                      setCategory(index, newCategory)
                      setRole(newCategory)
                    }}
                  />
                )}
              />
            </Box>
            <StackSearchBox
              render={({ techStacks }) => {
                return (
                  <Box>
                    {filterSelectedStack(techStacks, selectedStacks(index)).map(
                      (techStack) => {
                        return (
                          <Box
                            cursor="pointer"
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
            <Box flexWrap="nowrap">
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
      <Button onClick={appendNewFields}>기술스택 추가</Button>
    </Box>
  )
}

export default ProfileTechStack
