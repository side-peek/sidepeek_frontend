import { Comment } from "api-models"

import { ProjectIdProps } from "../components/Hoc/withProjectId"

export interface CommentsProps extends ProjectIdProps {
  comments: Comment[]
}
