import { List, ListItem } from "@chakra-ui/react"

import SearchBar from "./components/SearchBar"
import SearchLayout from "./components/SearchLayout"
import { useInput } from "./hooks/useInput"
import { useOutsideClick } from "./hooks/useOutsideClick"
import { useSkillSearch } from "./hooks/useSearch"

const SearchContainer = () => {
  const [inputValue, onInput] = useInput("")
  const searchList = useSkillSearch(inputValue)

  const [targetRef, isFocused] = useOutsideClick<HTMLDivElement>()

  return (
    <SearchLayout
      width="200px"
      ref={targetRef}>
      <SearchBar
        inputValue={inputValue}
        onInput={onInput}
      />
      {isFocused && (
        <List>
          {searchList?.map((skill) => {
            return <ListItem key={skill.id}>{skill.name}</ListItem>
          })}
          <ListItem>{inputValue}</ListItem>
        </List>
      )}
    </SearchLayout>
  )
}

export default SearchContainer
//onClickItem props로 전달하기
