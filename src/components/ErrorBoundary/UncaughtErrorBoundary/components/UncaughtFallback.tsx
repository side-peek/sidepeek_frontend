import { useNavigate } from "react-router-dom"

import { Center, Icon, IconButton, Text, VStack } from "@chakra-ui/react"
import { GrPowerReset } from "@react-icons/all-files/gr/GrPowerReset"

interface UncaughtFallbackProps {
  error: Error
  onReset: () => void
}

const UncaughtFallback = ({ error, onReset }: UncaughtFallbackProps) => {
  const navigate = useNavigate()

  if (import.meta.env.DEV) {
    alert(error)
  }

  return (
    <Center
      width="100vw"
      height="100vh">
      <VStack gap="5rem">
        <Text
          fontFamily="SCDream_Bold"
          fontSize="8rem">
          😓 Uncaught Error
        </Text>
        <IconButton
          aria-label="reset"
          icon={
            <Icon
              as={GrPowerReset}
              w={20}
              h={20}
            />
          }
          onClick={() => {
            onReset()
            navigate("/")
          }}
        />
      </VStack>
    </Center>
  )
}

export default UncaughtFallback
