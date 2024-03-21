import { CommentProvider } from "@pages/ProjectDetailPage/store/CommentContext"

import { CommentsProps } from "../../types/commentsProps"
import { withProjectId } from "../Hoc/withProjectId"
import CommentsForm from "./CommentsForm/CommentsForm"
import CommentsList from "./CommentsList/CommentsList"
import CommentsLayout from "./Layout/CommentsLayout"

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
