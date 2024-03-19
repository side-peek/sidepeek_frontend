import { Heading, Spinner, Stack, Text } from "@chakra-ui/react"

interface ResultInfoProps {
  searchWord: string
  resultCount: number | null
  isLoading: boolean
}

const ResultInfo = ({
  searchWord,
  resultCount,
  isLoading,
}: ResultInfoProps) => {
  return (
    <Stack
      marginTop="3rem"
      alignItems="center">
      <Heading>'{searchWord}' 검색결과</Heading>
      <Text fontSize="2xl">
        {isLoading ? <Spinner color="blue.100" /> : resultCount}개의 프로젝트를
        발견하였습니다
      </Text>
    </Stack>
  )
}

export default ResultInfo
