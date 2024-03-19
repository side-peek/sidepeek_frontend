import { Suspense } from "react"

import { Box, BoxProps, Center, Spinner } from "@chakra-ui/react"
import { UserSummary } from "api-models"
import { useOutsideClick } from "src/components/Search/hooks/useOutsideClick"

import SearchBox from "@components/Search/SearchMain"
import { useInput } from "@components/Search/hooks/useInput"

import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import UserListFetcher from "./UserListFetcher"

interface UserSearchBoxProps extends Omit<BoxProps, "onClick" | "ref"> {
  onClick: (data: Omit<UserSummary, "isSocialLogin">) => void
  selectedMembers: Omit<UserSummary, "isSocialLogin">[]
}

const UserSearchBox = ({
  onClick,
  selectedMembers = [],
  ...props
}: UserSearchBoxProps) => {
  const [inputValue, onInput] = useInput("")
  const [ref, isFocused] = useOutsideClick()

  const handleClickNonUser = (value: string) => {
    if (!value.trim().length) {
      return
    }
    onClick({
      id: null,
      nickname: value,
      profileImageUrl: "",
    })
  }

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
          render={(data) => (
            <SearchBox.Result isFocused={isFocused}>
              {filterSelectedId(data, selectedMembers)?.map(
                ({ id, nickname, profileImageUrl }) => (
                  <Box
                    key={id}
                    fontWeight={700}
                    onClick={() => onClick({ id, nickname, profileImageUrl })}>
                    #{nickname}
                  </Box>
                ),
              )}
              {inputValue && (
                <Box onClick={() => handleClickNonUser(inputValue)}>
                  {inputValue} 추가하기
                </Box>
              )}
            </SearchBox.Result>
          )}
        />
      </Suspense>
    </SearchBox>
  )
}

export default UserSearchBox
