import { FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdRemoveRedEye } from "react-icons/md"
import { PiClipboardText } from "react-icons/pi"
import { useLocation } from "react-router-dom"
import { Link } from "react-scroll"

import { Flex, useMediaQuery } from "@chakra-ui/react"

// import { useDeleteLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteLikeMutation"
import { usePostLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostLikeMutation"

import { ProjectIdProps, withProjectId } from "../../Hoc/withProjectId"
import SummaryTopIcon from "./SummaryTopIcon"

interface SummaryTopProps extends ProjectIdProps {
  likeCount: number
  viewCount: number
  commentCount: number
}
const SummaryTop = ({
  likeCount,
  viewCount,
  commentCount,
  projectId,
}: SummaryTopProps) => {
  /*
    TODO: 1. 좋아요 요청
          2. 클립보드 클릭시 완료 모달/토스트 띄우기
  */
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const location = useLocation()
  const { VITE_BASE_URL } = import.meta.env
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.log(err)
    }
  }

  const { postLikeMutation } = usePostLikeMutation()
  // const { deleteLikeMutation } = useDeleteLikeMutation()

  return (
    <Flex
      gap={isLargerThan1200 ? "1.5rem" : "1rem"}
      mb="3rem"
      justifyContent="flex-end">
      <SummaryTopIcon
        count={viewCount}
        aria-label="views"
        icon={<MdRemoveRedEye />}
        fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
      />

      <SummaryTopIcon
        count={likeCount}
        icon={<IoMdHeartEmpty />}
        aria-label="likeButton"
        fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
        onClick={() => {
          postLikeMutation.mutate({ projectId: Number(projectId) })
          // deleteLikeMutation.mutate({ likeId: 12 })
        }}
      />
      <Link
        to="Comment"
        spy={true}
        offset={-100}
        smooth={true}>
        <SummaryTopIcon
          count={commentCount}
          icon={<FaRegComment />}
          aria-label="commentButton"
          fontSize={isLargerThan1200 ? "2.3rem" : "1.8rem"}
        />
      </Link>
      <SummaryTopIcon
        onClick={() =>
          handleCopyClipBoard(`${VITE_BASE_URL}${location.pathname}`)
        }
        aria-label="clipboardButton"
        fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
        icon={<PiClipboardText />}
      />
    </Flex>
  )
}
export default withProjectId(SummaryTop)
