import { MdCancel } from "react-icons/md"

import { CommonTagProps } from "../types/commonTagProps"
import CommonTag from "./CommonTag"

interface CloseButtonTagProps extends Omit<CommonTagProps, "rightElement"> {}

const CloseButtonTag = ({
  leftElement,
  label,
  ...props
}: CloseButtonTagProps) => {
  return (
    <CommonTag
      leftElement={leftElement}
      label={label}
      rightElement={<MdCancel size="15" />}
      {...props}
    />
  )
}

export default CloseButtonTag
