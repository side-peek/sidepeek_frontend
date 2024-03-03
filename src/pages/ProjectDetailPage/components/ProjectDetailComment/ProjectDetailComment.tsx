import { Comment } from "api-models"

interface ProjectDetailCommentProps {
  comments: Comment
}

const ProjectDetailComment = ({ comments }: ProjectDetailCommentProps) => {
  console.log(comments)
  return <div>g</div>
}

export default ProjectDetailComment
