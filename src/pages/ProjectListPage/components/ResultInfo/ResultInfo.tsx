import { Heading, Stack, Text } from "@chakra-ui/react"

interface ResultInfoProps {
  searchWord: string
  resultCount: number | null
}

const ResultInfo = ({ searchWord, resultCount }: ResultInfoProps) => {
  return (
    <Stack
      marginTop="3rem"
      alignItems="center">
      <Heading>'{searchWord}' 검색결과</Heading>
      <Text fontSize="2xl">{resultCount}개의 프로젝트를 발견하였습니다</Text>
    </Stack>
  )
}

export default ResultInfo
