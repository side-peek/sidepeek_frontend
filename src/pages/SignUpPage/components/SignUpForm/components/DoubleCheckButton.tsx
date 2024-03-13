import { useEffect } from "react"
import { IoMdCheckmarkCircle } from "react-icons/io"

import { Button, ButtonProps, Icon, Text, useToast } from "@chakra-ui/react"

import { errorToastOptions } from "@pages/SignUpPage/constants/toastOptions"

interface DoubleCheckButtonProps extends ButtonProps {
  isDuplicated?: boolean
  errorMessage: string
  successMessage: string
}

const DoubleCheckButton = ({
  isDuplicated,
  errorMessage,
  successMessage,
  ...props
}: DoubleCheckButtonProps) => {
  const toast = useToast(errorToastOptions)

  useEffect(() => {
    if (isDuplicated === true) {
      toast({
        status: "error",
        title: errorMessage,
      })
    } else if (isDuplicated === false) {
      toast({
        status: "success",
        title: successMessage,
      })
    }
  }, [isDuplicated])

  return (
    <Button
      width="9rem"
      height="5rem"
      variant="outline"
      borderRadius="0.8rem"
      {...props}>
      {isDuplicated === false ? (
        <Icon
          as={IoMdCheckmarkCircle}
          color="green"
          boxSize="2rem"
        />
      ) : (
        <Text>중복 확인</Text>
      )}
    </Button>
  )
}

export default DoubleCheckButton
