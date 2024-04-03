import { IconButton, useMediaQuery } from "@chakra-ui/react"
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle"
import { MdCancel } from "@react-icons/all-files/md/MdCancel"

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
        _hover={{ opacity: 0.5 }}
        fontSize={isLargerThan768 ? "2xl" : "lg"}
      />
      <IconButton
        aria-label="cancel"
        icon={<MdCancel />}
        onClick={handleOffEdit}
        _hover={{ opacity: 0.5 }}
        fontSize={isLargerThan768 ? "2xl" : "lg"}
      />
    </>
  )
}
export default OnEditingButton
