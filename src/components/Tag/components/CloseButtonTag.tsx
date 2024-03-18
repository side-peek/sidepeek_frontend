import { MouseEventHandler } from "react"
import { MdCancel } from "react-icons/md"

import { CommonTagProps } from "../types/commonTagProps"
import CommonTag from "./CommonTag"

interface CloseButtonTagProps extends Omit<CommonTagProps, "rightElement"> {
  onClickCloseButton: MouseEventHandler
}

const CloseButtonTag = ({
  leftElement,
  label,
  onClickCloseButton,
  ...props
}: CloseButtonTagProps) => {
  return (
    <CommonTag
      leftElement={leftElement}
      label={label}
      rightElement={
        <MdCancel
          size="15"
          onClick={onClickCloseButton}
        />
      }
      {...props}
    />
  )
}

export default CloseButtonTag
