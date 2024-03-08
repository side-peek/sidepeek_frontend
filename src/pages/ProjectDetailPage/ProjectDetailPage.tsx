import { Center } from "@chakra-ui/layout"

import Comments from "./components/Comments/Comments"
import {
  ProjectIdProps,
  withProjectId,
} from "./components/Comments/Hoc/withProjectId"
import { useProjectDetailQuery } from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = ({ projectId }: ProjectIdProps) => {
  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))

  if (!projectDetailInfo) {
    return <Center>Loading...</Center>
  }

  return <Comments comments={projectDetailInfo.comments}></Comments>
}

export default withProjectId(ProjectDetailPage)
