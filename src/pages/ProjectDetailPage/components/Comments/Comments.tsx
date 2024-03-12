import { Comment } from "api-models"

import CommentsForm from "./CommentsForm"
import CommentsList from "./CommentsList"
import CommentsLayout from "./Layout/CommentsLayout"

export interface CommentsProps {
  comments: Comment[]
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <CommentsLayout>
      <CommentsForm />
      <CommentsList comments={comments} />
    </CommentsLayout>
  )
}

export default Comments
