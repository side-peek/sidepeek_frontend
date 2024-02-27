import { FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdRemoveRedEye } from "react-icons/md"
import { PiClipboardText } from "react-icons/pi"
import { useLocation } from "react-router-dom"

import { Flex } from "@chakra-ui/react"

import ProjectDetailSummaryTopIcon from "./ProjectDetailSummaryTopIcon"
import ProjectDetailSummaryTopIconButton from "./ProjectDetailSummaryTopIconButton"

interface ProjectDetailSummaryTopProps {
  likeCount: number
  viewCount: number
  commentCount: number
}
const ProjectDetailSummaryTop = ({
  likeCount,
  viewCount,
  commentCount,
}: ProjectDetailSummaryTopProps) => {
  /*
    TODO: 1. 좋아요 요청
          2. 댓글 클릭시 댓글 창으로 스크롤
          3. 클립보드 클릭시 완료 모달/토스트 띄우기
          4. 클립보드 url baseurl로 바꾸기
  */

  const location = useLocation()
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Flex
      gap="1.5rem"
      justifyContent="flex-end">
      <ProjectDetailSummaryTopIcon
        count={viewCount}
        icon={MdRemoveRedEye}
      />

      <ProjectDetailSummaryTopIconButton
        count={likeCount}
        icon={<IoMdHeartEmpty />}
        aria-label="good"
        fontSize="2.7rem"
      />
      <ProjectDetailSummaryTopIconButton
        count={commentCount}
        icon={<FaRegComment />}
        aria-label="comment"
        fontSize="2.3rem"
      />
      <ProjectDetailSummaryTopIconButton
        onClick={() =>
          handleCopyClipBoard(`localhost:5173${location.pathname}`)
        }
        aria-label="clipboard"
        fontSize="2.7rem"
        icon={<PiClipboardText />}
      />
    </Flex>
  )
}

export default ProjectDetailSummaryTop
