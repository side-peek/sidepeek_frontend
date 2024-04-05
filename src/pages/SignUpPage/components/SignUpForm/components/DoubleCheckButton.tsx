import { useEffect } from "react"

import { Button, ButtonProps, Icon, Text, useToast } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "@react-icons/all-files/io/IoMdCheckmarkCircle"

import { DOUBLE_CHECK_MESSAGE } from "@pages/SignUpPage/constants/toastMessages"
import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"
import { useDoubleCheck } from "@pages/SignUpPage/hooks/useDoubleCheck"
import { DoubleCheckFiledNames } from "@pages/SignUpPage/types/doubleCheckFieldNames"

interface DoubleCheckButtonProps extends ButtonProps {
  fieldName: DoubleCheckFiledNames
}

const DoubleCheckButton = ({ fieldName, ...props }: DoubleCheckButtonProps) => {
  const toast = useToast(toastOptions)

  const {
    checkMutation: { data: response, isPending },
    handleDoubleCheck,
  } = useDoubleCheck(fieldName)

  useEffect(() => {
    if (response?.isDuplicated === true) {
      toast({
        status: "error",
        title: DOUBLE_CHECK_MESSAGE[fieldName].ERROR,
      })
    } else if (response?.isDuplicated === false) {
      toast({
        status: "success",
        title: DOUBLE_CHECK_MESSAGE[fieldName].SUCCESS,
      })
    }
  }, [fieldName, response, toast])

  return (
    <Button
      width="9rem"
      height="5rem"
      variant="outline"
      borderRadius="0.8rem"
      isLoading={isPending}
      onClick={handleDoubleCheck}
      {...props}>
      {response?.isDuplicated === false ? (
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
