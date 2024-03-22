import { Box } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"

import { EMPTY_MESSAGE } from "@pages/ProjectDetailPage/constants/emptyMessage"

const ViewOptions = {
  whiteSpace: "pre-wrap",
  padding: "2rem",
  lineHeight: "1.5",
  fontFamily: "SCDream_Regular",
  fontSize: "2rem",
}

const ViewNotContentOptions = {
  fontSize: "2rem",
  color: "#7a7a7a",
}

interface ExplanationItemProps {
  content: string
}

const notContentText = EMPTY_MESSAGE.EXPLANATION

const ExplanationItem = ({ content }: ExplanationItemProps) => {
  const processedText = content?.replace(/\\n/g, "\n")
  return (
    <Box data-color-mode="light">
      {processedText ? (
        <MDEditor.Markdown
          source={processedText}
          style={{ ...ViewOptions }}
        />
      ) : (
        <MDEditor.Markdown
          source={notContentText}
          style={{ ...ViewNotContentOptions }}
        />
      )}
    </Box>
  )
}

export default ExplanationItem
