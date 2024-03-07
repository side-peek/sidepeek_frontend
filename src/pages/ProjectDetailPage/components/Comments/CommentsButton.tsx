import EditingButton from "./EditingButton"
import OwnerButton from "./OwnerButton"

interface CommentsButtonProps {
  isOwner: boolean
  commentId: number
  isEditing: boolean
  handleOnEdit: () => void
  handleOffEdit: () => void
  handleDelete: (id: number) => void
}
const CommentsButton = ({
  isOwner,
  commentId,
  isEditing,
  handleOnEdit,
  handleOffEdit,
  handleDelete,
}: CommentsButtonProps) => {
  return isEditing ? (
    <EditingButton handleOffEdit={handleOffEdit} />
  ) : (
    isOwner && (
      <OwnerButton
        {...{
          handleOnEdit,
          handleDelete,
          commentId,
        }}
      />
    )
  )
}

export default CommentsButton
