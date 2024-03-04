import { Center } from "@chakra-ui/react"

const StyledProfileBarContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Center
      bg="default"
      w="36rem"
      mt="-10rem"
      border="1px solid"
      borderColor="grey.200"
      borderRadius="2rem">
      {children}
    </Center>
  )
}

export default StyledProfileBarContainer
