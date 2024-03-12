import { MdDelete } from "react-icons/md"
import { TiPencil } from "react-icons/ti"

import { IconButton } from "@chakra-ui/react"

interface OwnerButtonProps {
  handleOnEdit: () => void
  handleDelete: (id: number) => void
  commentId: number
}
const OwnerButton = ({
  handleOnEdit,
  handleDelete,
  commentId,
}: OwnerButtonProps) => {
  return (
    <>
      <IconButton
        aria-label="edit"
        icon={<TiPencil />}
        onClick={handleOnEdit}
        fontSize="2xl"
      />
      <IconButton
        aria-label="delete"
        icon={<MdDelete />}
        onClick={() => handleDelete(commentId)}
        fontSize="2xl"
      />
    </>
  )
}
export default OwnerButton
