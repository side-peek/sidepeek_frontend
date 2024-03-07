import { Center } from "@chakra-ui/layout"

import Comments from "./components/Comments/Comments"
import {
  ProjectIdProps,
  withProjectId,
} from "./components/Comments/Hoc/withProjectId"
import { useProjectDetailQuery } from "./hooks/queries/useProjectDetailQuery"

// eslint-disable-next-line react-refresh/only-export-components
const ProjectDetailPage = ({ projectId }: ProjectIdProps) => {
  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))

  if (!projectDetailInfo) {
    return <Center>Loading...</Center>
  }

  return <Comments comments={projectDetailInfo.comments}></Comments>
}

// eslint-disable-next-line react-refresh/only-export-components
export default withProjectId(ProjectDetailPage)
