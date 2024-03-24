import { AbsoluteCenter, Box, Image } from "@chakra-ui/react"
import { Skill } from "api-models"

import CommonTag from "@components/Tag/components/CommonTag"

import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import SearchResultContainer from "../../styles/SearchResultContainer"
import StackSearchBox from "./StackSearchBox"

const Field = ({
  field,
  index,
  appendStack,
}: {
  field: { category: string; skill: Skill[] }
  index: number
  appendStack: (techStack: Skill, index: number) => void
}) => {
  return (
    <StackSearchBox
      key={index}
      render={({ techStacks }) => {
        return (
          <SearchResultContainer>
            {!techStacks.length && (
              <AbsoluteCenter>검색 결과가 존재하지 않습니다</AbsoluteCenter>
            )}
            {filterSelectedId(techStacks, field.skill).map((techStack) => {
              return (
                <Box
                  cursor="pointer"
                  onClick={() => {
                    appendStack(techStack, index)
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
            })}
          </SearchResultContainer>
        )
      }}></StackSearchBox>
  )
}

export default Field
