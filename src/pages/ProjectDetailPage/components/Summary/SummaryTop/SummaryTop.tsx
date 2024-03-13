import { FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdRemoveRedEye } from "react-icons/md"
import { PiClipboardText } from "react-icons/pi"
import { useLocation } from "react-router-dom"
import { Link } from "react-scroll"

import { Flex, useMediaQuery } from "@chakra-ui/react"

import SummaryTopIcon from "./SummaryTopIcon"

interface SummaryTopProps {
  likeCount: number
  viewCount: number
  commentCount: number
}
const SummaryTop = ({
  likeCount,
  viewCount,
  commentCount,
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
        aria-label="goodButton"
        fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
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
export default SummaryTop
