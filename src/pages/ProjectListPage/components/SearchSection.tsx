import { IoMdSearch } from "react-icons/io"

import { Box, Button, Center, Icon, useMediaQuery } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

const SearchSection = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

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
          inputWidth={isLargerThan768 ? "50rem" : "30rem"}
          height="7rem"
          fontSize="2xl"
          onSubmit={() => console.log("enter")}
          backgroundColor="white">
          <Button>
            <Icon
              type="submit"
              cursor="pointer"
              as={IoMdSearch}
              w="5rem"
              h="5rem"
              position="absolute"
              top="1rem"
              right="1rem"
            />
          </Button>
        </CommonInput>
      </Center>
    </Box>
  )
}

export default SearchSection
