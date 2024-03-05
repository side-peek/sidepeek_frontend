import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"

import Comments from "./components/Comments/Comments"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))

  if (!projectDetailInfo) {
    return <Center>Loading...</Center>
  }

  return <Comments comments={projectDetailInfo.comments}></Comments>
}

export default ProjectDetailPage
