import { IoMdSearch } from "react-icons/io"

import { Box, Center, Icon } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

const SearchSection = () => {
  return (
    <Box
      height="12rem"
      backgroundColor="blue.100">
      <Center
        position="absolute"
        left="50%"
        top="20rem"
        transform="translate(-50%,-50%)">
        <CommonInput
          placeholder="검색어를 입력하세요"
          borderRadius="5rem"
          inputWidth="50rem"
          height="7rem"
          fontSize="2xl"
          onChange={() => console.log("change")}
          backgroundColor="white">
          <Icon
            cursor="pointer"
            as={IoMdSearch}
            w="5rem"
            h="5rem"
            position="absolute"
            top="1rem"
            right="1rem"
          />
        </CommonInput>
      </Center>
    </Box>
  )
}

export default SearchSection
