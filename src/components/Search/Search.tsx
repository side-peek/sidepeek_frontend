import { Box } from "@chakra-ui/react"
import axios from "axios"

import SearchInput from "./components/SearchForm"
import SearchList from "./components/SearchList"
import { useSearchList } from "./hooks/useSearchList"

const DUMMY_SEARCHLIST = ["react.js", "Rust", "R", "Rollup"]

const Search = () => {
  //TODO : 검색 시 useQuery를 이용한 API 연동 로직 추가
  const fakeApi = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    return DUMMY_SEARCHLIST
  }

  const { data, onSearch, keyword } = useSearchList("", fakeApi)

  return (
    <>
      <Box w="100px">
        <SearchInput
          value={keyword}
          onChange={onSearch}
        />

        {data && <SearchList searchList={data} />}
      </Box>
    </>
  )
}

export default Search
