import { Button, Center } from "@chakra-ui/react"

interface MoreButton {
  loadMore: () => void
  hasNext: boolean
}

const MoreButton = ({ loadMore, hasNext }: MoreButton) => {
  return (
    <>
      {hasNext && (
        <Center marginTop="2rem">
          <Button
            width="8rem"
            height="3rem"
            backgroundColor="blue.100"
            color="white"
            onClick={loadMore}>
            더보기
          </Button>
        </Center>
      )}
    </>
  )
}

export default MoreButton
