import { Flex, Input, InputProps } from "@chakra-ui/react"

import { DoubleCheckFiledNames } from "@pages/SignUpPage/types/DoubleCheckFieldNames"

import DoubleCheckButton from "./DoubleCheckButton"

interface InputWithDoubleCheckProps {
  renderProps: InputProps
  fieldName: DoubleCheckFiledNames
}

const InputWithDoubleCheck = ({
  renderProps,
  fieldName,
}: InputWithDoubleCheckProps) => {
  return (
    <Flex alignItems="center">
      <Input {...renderProps} />
      <DoubleCheckButton fieldName={fieldName} />
    </Flex>
  )
}

export default InputWithDoubleCheck
