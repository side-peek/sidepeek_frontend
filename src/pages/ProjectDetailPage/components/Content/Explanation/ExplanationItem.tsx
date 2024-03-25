import { Box } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"

import { EMPTY_MESSAGE } from "@pages/ProjectDetailPage/constants/emptyMessage"

const ViewOptions = {
  whiteSpace: "pre-wrap",
  padding: "2rem",
  lineHeight: "1.5",
  fontFamily: "SCDream_Regular",
  fontSize: "1.8rem",
}

const ViewNotContentOptions = {
  fontSize: "2rem",
  color: "#7a7a7a",
}

interface ExplanationItemProps {
  content: string
}

const ExplanationItem = ({ content }: ExplanationItemProps) => {
  const lineBreakedText = content?.replace(/\\n/g, "\n")
  return (
    <Box data-color-mode="light">
      {lineBreakedText ? (
        <MDEditor.Markdown
          source={lineBreakedText}
          style={{ ...ViewOptions }}
        />
      ) : (
        <MDEditor.Markdown
          source={EMPTY_MESSAGE.EXPLANATION}
          style={{ ...ViewNotContentOptions }}
        />
      )}
    </Box>
  )
}

export default ExplanationItem
