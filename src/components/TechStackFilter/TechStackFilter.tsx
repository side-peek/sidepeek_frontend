import { Box, Flex, Image } from "@chakra-ui/react"
import { Skill } from "api-models"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"
import CommonTag from "@components/Tag/components/CommonTag"

import StackSearchBox from "@pages/ProjectEditPage/components/TechStacksFields/components/StackSearchBox"
import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

interface TechStackFilterProps {
  selectedStacks: Skill[]
  onAppendStack: (techStack: Skill) => void
  onDeleteStack: (techStack: Skill) => void
}

const TechStackFilter = ({
  selectedStacks,
  onAppendStack,
  onDeleteStack,
}: TechStackFilterProps) => {
  return (
    <Flex marginTop="3rem">
      <Box
        flex="0 0 30rem"
        border="1px solid"
        borderColor="grey.200">
        <StackSearchBox
          showAll={false}
          inputProps={{ borderBottom: "1px solid", borderColor: "gray.200" }}
          render={({ techStacks }) => {
            return (
              <Box
                paddingTop="1rem"
                height="10rem"
                overflow="auto">
                {filterSelectedId(techStacks, selectedStacks).map(
                  (techStack) => {
                    return (
                      <CommonTag
                        m="0.25rem"
                        leftElement={
                          <Image
                            src={techStack.iconImageUrl}
                            boxSize={8}
                          />
                        }
                        label={techStack.name}
                        onClick={() => onAppendStack(techStack)}
                        key={techStack.name}
                      />
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
        border="1px solid"
        borderColor="grey.200">
        {selectedStacks.map((stack) => (
          <CloseButtonTag
            m="0.3rem"
            key={stack.name}
            label={stack.name}
            leftElement={
              <Image
                src={stack.iconImageUrl}
                boxSize={8}
              />
            }
            onClickCloseButton={() => onDeleteStack(stack)}
          />
        ))}
      </Box>
    </Flex>
  )
}

export default TechStackFilter
