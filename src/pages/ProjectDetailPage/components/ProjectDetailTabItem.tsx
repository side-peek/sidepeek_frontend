import { Box } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"

const ViewStyleParams = {
  whiteSpace: "pre-wrap",
  padding: "2rem",
  lineHeight: "1.5",
  fontFamily: "SCDream_Regular",
}

interface ProjectDetailTabItemProps {
  content: string
}

const ProjectDetailTabItem = ({ content }: ProjectDetailTabItemProps) => {
  return (
    <Box data-color-mode="light">
      <MDEditor.Markdown
        source={content}
        style={{ ...ViewStyleParams }}
      />
    </Box>
  )
}

export default ProjectDetailTabItem
