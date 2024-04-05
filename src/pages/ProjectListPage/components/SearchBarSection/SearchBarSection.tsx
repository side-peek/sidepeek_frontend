import { useEffect, useRef, useState } from "react"

import { Box, Button, Center, Icon, useMediaQuery } from "@chakra-ui/react"
import { IoMdSearch } from "@react-icons/all-files/io/IoMdSearch"

import CommonInput from "@components/Input/CommonInput"

interface SearchBarSectionProps {
  search: string
  onSubmit: (keyword: string) => void
}

const SearchBarSection = ({ search, onSubmit }: SearchBarSectionProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const $ref = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState<string>(search)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputValue) {
      alert("검색어를 입력하세요")
    }

    onSubmit(inputValue)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    $ref.current?.focus()
  }, [])

  return (
    <Box
      height="12rem"
      mb="5rem"
      backgroundColor="blue.100">
      <Center
        position="absolute"
        left="50%"
        top="20rem"
        transform="translate(-50%,-50%)">
        <form onSubmit={handleSubmit}>
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
              marginLeft="1rem"
              value={inputValue}
              onChange={handleChange}
            />
            <Button
              type="submit"
              position="absolute"
              top="2.3rem"
              right="1rem"
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

export default SearchBarSection
