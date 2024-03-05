import { Comment } from "api-models"

import CommentsInput from "./CommentsInput"
import CommentsList from "./CommentsList"
import CommentsLayout from "./Layout/CommentsLayout"

export interface CommentsProps {
  comments: Comment[]
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <CommentsLayout>
      <CommentsInput />
      <CommentsList comments={comments} />
    </CommentsLayout>
  )
}

export default Comments
