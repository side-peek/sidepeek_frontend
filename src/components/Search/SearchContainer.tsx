import { useState } from "react"

import { List, ListItem } from "@chakra-ui/react"
import { Skill } from "api-models"

import SearchBar from "./components/SearchBar"
import SearchFetcher from "./components/SearchFetcher"
import SearchLayout from "./components/SearchLayout"
import { useInput } from "./hooks/useInput"
import { useOutsideClick } from "./hooks/useOutsideClick"
import { SearchContext } from "./stores/SearchContext/SearchContext"

const SearchContainer = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, onInput] = useInput("")
  const [searchList, setSearchList] = useState<Skill[]>([])

  const targetRef = useOutsideClick<HTMLDivElement>(() => setIsFocused(false))

  return (
    <SearchContext.Provider
      value={{
        isFocused,
        setIsFocused,
        inputValue,
        onInput,
        searchList,
        setSearchList,
      }}>
      <SearchLayout
        width="200px"
        ref={targetRef}>
        <SearchBar placeholder="찾고싶은 기술을 입력해주세요" />
        <SearchFetcher>
          {isFocused && (
            <List>
              {searchList?.map((skill) => {
                return <ListItem key={skill.id}>{skill.name}</ListItem>
              })}
              <ListItem>{inputValue}</ListItem>
            </List>
          )}
        </SearchFetcher>
      </SearchLayout>
    </SearchContext.Provider>
  )
}

export default SearchContainer
