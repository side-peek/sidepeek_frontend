import { ReactNode } from "react"

import { Flex } from "@chakra-ui/react"
import { Skill } from "api-models"

import SearchBox from "@components/Search/SearchMain"
import { useInput } from "@components/Search/hooks/useInput"
import { useTechStacks } from "@components/Search/hooks/useTechStacksSearch"
import CommonTag from "@components/Tag/components/CommonTag"

interface StackSearchSectionProps {
  children?: ReactNode
  onClickResultItem: (data: Skill) => void
}

const StackSearchBox = ({
  children,
  onClickResultItem,
}: StackSearchSectionProps) => {
  const [inputValue, onInput] = useInput("")
  const [techStacks, filterResult] = useTechStacks(inputValue)

  const labelClickHandler = (techStack: Skill) => {
    filterResult(techStack)
    onClickResultItem(techStack)
  }

  return (
    <SearchBox>
      <Flex
        gap="5px"
        flexWrap="wrap">
        <SearchBox.Input
          value={inputValue}
          onChange={onInput}
          placeholder="기술 스택을 검색해보세요"
        />
        {children}
        <SearchBox.Result
          flexDir="row"
          gap="5px">
          {techStacks?.map((techStack) => {
            return (
              <CommonTag
                onClick={() => {
                  labelClickHandler(techStack)
                }}
                label={techStack.name}
                key={techStack.name}
              />
            )
          })}
        </SearchBox.Result>
      </Flex>
    </SearchBox>
  )
}

export default StackSearchBox
