import { Button, Center, Spinner } from "@chakra-ui/react"

interface MoreButton {
  loadMore: () => void
  hasNext: boolean
  isLoading: boolean
}

const MoreButton = ({ loadMore, hasNext, isLoading }: MoreButton) => {
  return (
    <>
      {hasNext && (
        <Center marginTop="2rem">
          {isLoading ? (
            <Spinner
              thickness="0.3rem"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.100"
              size="xl"
            />
          ) : (
            <Button
              width="8rem"
              height="3rem"
              backgroundColor="blue.100"
              color="white"
              onClick={loadMore}>
              더보기
            </Button>
          )}
        </Center>
      )}
    </>
  )
}

export default MoreButton
