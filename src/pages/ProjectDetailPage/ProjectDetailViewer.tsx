import "@toast-ui/editor/dist/toastui-editor-viewer.css"
import { Viewer } from "@toast-ui/react-editor"

interface ProjectDetailViewerProps {
  content: string
}

const ProjectDetailViewer = ({ content }: ProjectDetailViewerProps) => {
  return <Viewer initialValue={content || ""} />
}

export default ProjectDetailViewer
