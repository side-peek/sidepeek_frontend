import { ReactNode } from "react"

import { BoxProps, Flex } from "@chakra-ui/react"
import { Skill } from "api-models"

import SearchBox from "@components/Search/SearchMain"
import { useInput } from "@components/Search/hooks/useInput"
import { useTechStacks } from "@components/Search/hooks/useTechStacksSearch"

interface StackSearchSectionProps extends BoxProps {
  children?: ReactNode
  showAll?: boolean
  render: ({ techStacks }: { techStacks: Skill[] }) => JSX.Element
}

const StackSearchBox = ({
  children,
  render,
  showAll = true,
  ...props
}: StackSearchSectionProps) => {
  const [inputValue, onInput] = useInput("")
  const [techStacks] = useTechStacks(inputValue, showAll)

  return (
    <SearchBox {...props}>
      <Flex
        gap="0.5rem"
        flexWrap="wrap">
        <SearchBox.Input
          value={inputValue}
          onChange={onInput}
          placeholder="기술 스택을 검색해보세요"
        />
        {children}
        <SearchBox.Result
          flexDir="row"
          gap="0.5rem">
          {render({ techStacks })}
        </SearchBox.Result>
      </Flex>
    </SearchBox>
  )
}

export default StackSearchBox
