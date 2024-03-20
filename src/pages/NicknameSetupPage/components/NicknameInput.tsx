import InputController from "@components/InputController/InputController"

import InputWithDoubleCheck from "@pages/SignUpPage/components/SignUpForm/components/InputWithDoubleCheck"
import { nicknameOptions } from "@pages/SignUpPage/constants/registerOptions"

const NicknameInput = () => {
  return (
    <InputController
      fieldName="nickname"
      label="닉네임"
      registerOptions={nicknameOptions}>
      {(renderProps) => (
        <InputWithDoubleCheck
          renderProps={renderProps}
          fieldName="nickname"
        />
      )}
    </InputController>
  )
}

export default NicknameInput
