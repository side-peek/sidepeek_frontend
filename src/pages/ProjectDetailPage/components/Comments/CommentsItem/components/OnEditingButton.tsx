import { FaRegCheckCircle } from "react-icons/fa"
import { MdCancel } from "react-icons/md"

import { IconButton } from "@chakra-ui/react"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

const OnEditingButton = () => {
  const { handleOffEdit, handleSubmit, onSubmitEdit } = useCommentContext()
  return (
    <>
      <IconButton
        type="submit"
        aria-label="submit"
        icon={<FaRegCheckCircle />}
        onClick={handleSubmit(onSubmitEdit)}
        fontSize="2xl"
      />
      <IconButton
        aria-label="cancel"
        icon={<MdCancel />}
        onClick={handleOffEdit}
        fontSize="2xl"
      />
    </>
  )
}
export default OnEditingButton
