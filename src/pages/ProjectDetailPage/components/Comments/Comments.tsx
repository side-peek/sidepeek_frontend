import { Comment } from "api-models"

import { CommentProvider } from "@pages/ProjectDetailPage/store/CommentContext"

import { withProjectId } from "../Hoc/withProjectId"
import { ProjectIdProps } from "../Hoc/withProjectId"
import CommentsForm from "./CommentsForm/CommentsForm"
import CommentsList from "./CommentsList/CommentsList"
import CommentsLayout from "./Layout/CommentsLayout"

export interface CommentsProps extends ProjectIdProps {
  comments: Comment[]
}

const Comments = ({ comments, projectId }: CommentsProps) => {
  return (
    <CommentsLayout>
      <CommentProvider projectId={projectId}>
        <CommentsForm />
        <CommentsList comments={comments} />
      </CommentProvider>
    </CommentsLayout>
  )
}

export default withProjectId(Comments)
