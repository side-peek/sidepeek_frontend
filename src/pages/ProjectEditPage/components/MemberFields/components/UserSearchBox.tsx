import { Suspense } from "react"

import { Box, BoxProps, Center, Spinner } from "@chakra-ui/react"
import { UserSummary } from "api-models"
import { useOutsideClick } from "src/components/Search/hooks/useOutsideClick"

import SearchBox from "@components/Search/SearchMain"
import { useInput } from "@components/Search/hooks/useInput"

import UserListFetcher from "./UserListFetcher"

interface UserSearchBoxProps extends Omit<BoxProps, "onClick" | "ref"> {
  onClick: (data: UserSummary) => void
}

const UserSearchBox = ({ onClick, ...props }: UserSearchBoxProps) => {
  const [inputValue, onInput] = useInput("")
  const [ref, isFocused] = useOutsideClick()

  return (
    <SearchBox
      ref={ref}
      pos="relative"
      flexDir="column"
      width="20rem"
      {...props}>
      <SearchBox.Input
        value={inputValue}
        onChange={onInput}
        placeholder="닉네임을 검색해보세요"
        variant="flushed"
      />
      <Suspense
        fallback={
          <Center>
            <Spinner />
          </Center>
        }>
        <UserListFetcher
          value={inputValue}
          render={(data) => {
            return (
              <SearchBox.Result isFocused={isFocused}>
                {data?.map((userSummary) => (
                  <Box
                    key={userSummary.id}
                    onClick={() => onClick(userSummary)}>
                    #{userSummary.nickname}
                  </Box>
                ))}
              </SearchBox.Result>
            )
          }}></UserListFetcher>
      </Suspense>
    </SearchBox>
  )
}

export default UserSearchBox
