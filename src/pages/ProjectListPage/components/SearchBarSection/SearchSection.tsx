import { useEffect, useRef } from "react"
import { IoMdSearch } from "react-icons/io"

import { Box, Button, Center, Icon, useMediaQuery } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

import { SearchListSectionProps } from "../SearchListSection/SearchListSection"

const SearchSection = ({ search }: SearchListSectionProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const $ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    $ref.current?.focus()
  }, [])

  console.log(search)
  return (
    <Box
      height="12rem"
      backgroundColor="blue.100">
      <Center
        position="absolute"
        left="50%"
        top="20rem"
        transform="translate(-50%,-50%)">
        <form onSubmit={() => console.log("enter")}>
          <Box
            backgroundColor="white"
            borderRadius="5rem"
            border="1px solid"
            borderColor="gray.500"
            width={isLargerThan768 ? "50rem" : "30rem"}>
            <CommonInput
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              type="search"
              placeholder="검색어를 입력하세요"
              inputWidth={isLargerThan768 ? "44.5rem" : "24.5rem"}
              height="7rem"
              fontSize="2xl"
              border="0"
            />
            <Button
              position="absolute"
              top="2.3rem"
              right="0"
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}>
              <Icon
                as={IoMdSearch}
                w="4.5rem"
                h="4.5rem"
                color="gray.500"
              />
            </Button>
          </Box>
        </form>
      </Center>
    </Box>
  )
}

export default SearchSection
