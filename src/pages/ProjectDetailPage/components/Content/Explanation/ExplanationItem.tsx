import { Box } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"

const ViewStyleParams = {
  whiteSpace: "pre-wrap",
  padding: "2rem",
  lineHeight: "1.5",
  fontFamily: "SCDream_Regular",
}

interface ExplanationItemProps {
  content: string
}

const ExplanationItem = ({ content }: ExplanationItemProps) => {
  const processedText = content.replace(/\\n/g, "\n")
  return (
    <Box data-color-mode="light">
      <MDEditor.Markdown
        source={processedText}
        style={{ ...ViewStyleParams }}
      />
    </Box>
  )
}

export default ExplanationItem
