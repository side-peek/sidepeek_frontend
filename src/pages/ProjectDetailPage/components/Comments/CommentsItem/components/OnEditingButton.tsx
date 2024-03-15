import { FaRegCheckCircle } from "react-icons/fa"
import { MdCancel } from "react-icons/md"

import { IconButton, useMediaQuery } from "@chakra-ui/react"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

const OnEditingButton = () => {
  const { handleOffEdit, handleSubmit, onSubmitEdit } = useCommentContext()
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  if (!handleSubmit) {
    return
  }

  return (
    <>
      <IconButton
        type="submit"
        aria-label="submit"
        icon={<FaRegCheckCircle />}
        onClick={handleSubmit(onSubmitEdit)}
        fontSize={isLargerThan768 ? "2xl" : "lg"}
      />
      <IconButton
        aria-label="cancel"
        icon={<MdCancel />}
        onClick={handleOffEdit}
        fontSize={isLargerThan768 ? "2xl" : "lg"}
      />
    </>
  )
}
export default OnEditingButton
