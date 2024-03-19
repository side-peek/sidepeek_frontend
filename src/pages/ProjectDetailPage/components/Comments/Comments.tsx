import { Comment } from "api-models"

import { CommentProvider } from "@pages/ProjectDetailPage/store/CommentContext"

import CommentsForm from "./CommentsForm/CommentsForm"
import CommentsList from "./CommentsList/CommentsList"
import CommentsLayout from "./Layout/CommentsLayout"

export interface CommentsProps {
  comments: Comment[]
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <CommentsLayout>
      <CommentProvider>
        <CommentsForm />
        <CommentsList comments={comments} />
      </CommentProvider>
    </CommentsLayout>
  )
}

export default Comments
