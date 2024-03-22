import { Suspense } from "react"

import {
  Avatar,
  Box,
  BoxProps,
  Center,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react"
import { UserSummary } from "api-models"
import { useOutsideClick } from "src/components/Search/hooks/useOutsideClick"

import SearchBox from "@components/Search/SearchMain"
import { useInput } from "@components/Search/hooks/useInput"

import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import SearchResultContainer from "../../styles/SearchResultContainer"
import UserListFetcher from "./UserListFetcher"

interface UserSearchBoxProps extends Omit<BoxProps, "onClick" | "ref"> {
  onClick: (data: UserSummary) => void
  selectedMembers: UserSummary[]
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
      isSocialLogin: null,
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
        onChange={onInput}
        placeholder="닉네임을 검색해보세요"
        variant="outline"
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
              <SearchResultContainer>
                {inputValue && (
                  <Box onClick={() => handleClickNonUser(inputValue)}>
                    {inputValue} 추가하기
                  </Box>
                )}
                {filterSelectedId(data, selectedMembers)?.map(
                  ({ id, nickname, profileImageUrl, isSocialLogin }, idx) => (
                    <Flex
                      key={idx}
                      border="none"
                      padding="5px"
                      gap="10px"
                      onClick={() =>
                        onClick({
                          id,
                          nickname,
                          profileImageUrl,
                          isSocialLogin,
                        })
                      }>
                      <Avatar
                        src={profileImageUrl || ""}
                        boxSize="10"
                        borderRadius="full"
                        objectFit="cover"
                      />
                      <Text>{nickname}</Text>
                    </Flex>
                  ),
                )}
              </SearchResultContainer>
            </SearchBox.Result>
          )}
        />
      </Suspense>
    </SearchBox>
  )
}

export default UserSearchBox
