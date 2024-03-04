import { Center, HStack, Text, VStack } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Center
      bgColor="grey.200"
      height="footerHeight">
      <VStack gap="1rem">
        <HStack>
          <Text
            fontFamily="SCDream_Bold"
            fontSize="2.4rem"
            color="blue.100">
            SidePeek
          </Text>
          <Text
            fontFamily="SCDream_Bold"
            fontSize="3.3rem">
            👀
          </Text>
        </HStack>
        <Text
          fontFamily="SCDream_Regular"
          fontSize="1.5rem">
          Copyright © 2024.1 ~ 2024.3 - All right reserved by Team Yuk Gae
          Jjang
        </Text>
      </VStack>
    </Center>
  )
}

export default Footer
