import { Center, Spinner } from "@chakra-ui/react"

const FullScreenSpinner = () => {
  return (
    <Center
      width="100vw"
      height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        width="8rem"
        height="8rem"
      />
    </Center>
  )
}

export default FullScreenSpinner
