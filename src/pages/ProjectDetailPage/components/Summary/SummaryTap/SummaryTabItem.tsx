import { Box } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"

const ViewStyleParams = {
  whiteSpace: "pre-wrap",
  padding: "2rem",
  lineHeight: "1.5",
  fontFamily: "SCDream_Regular",
}

interface SummaryTabItemProps {
  content: string
}

const SummaryTabItem = ({ content }: SummaryTabItemProps) => {
  return (
    <Box data-color-mode="light">
      <MDEditor.Markdown
        source={content}
        style={{ ...ViewStyleParams }}
      />
    </Box>
  )
}

export default SummaryTabItem
