import { FaRegComment } from "react-icons/fa"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { MdRemoveRedEye } from "react-icons/md"
import { Link } from "react-scroll"

import { Stack, VStack, useMediaQuery } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { useDeleteLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteLikeMutation"
import { usePostLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostLikeMutation"

import { ProjectIdProps, withProjectId } from "../../Hoc/withProjectId"
import SummaryControl from "./SummaryControl"
import SummaryTopIcon from "./SummaryTopIcon"

interface SummaryTopProps extends ProjectIdProps {
  likeCount: number
  viewCount: number
  commentCount: number
  ownerId: number
  likeId: number | null
}
const SummaryTop = ({
  likeCount,
  viewCount,
  commentCount,
  likeId,
  ownerId,
  projectId,
}: SummaryTopProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  const { postLikeMutation } = usePostLikeMutation()
  const { deleteLikeMutation } = useDeleteLikeMutation(Number(projectId))
  const user = useUserInfoData()

  return (
    <VStack
      mb="3rem"
      spacing="1.5rem"
      align="flex-end">
      <Stack
        direction="row"
        spacing={isLargerThan1200 ? "1rem" : "0.5rem"}>
        <SummaryTopIcon
          count={viewCount}
          aria-label="views"
          icon={<MdRemoveRedEye />}
          fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
        />

        <SummaryTopIcon
          count={likeCount}
          likeId={likeId}
          aria-label="likeButton"
          icon={likeId ? <IoMdHeart /> : <IoMdHeartEmpty />}
          fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
          onClick={(likeId: number | null) => {
            if (likeId) {
              deleteLikeMutation({ likeId })
            } else {
              postLikeMutation({ projectId: Number(projectId) })
            }
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
      </Stack>
      {ownerId === user?.id && <SummaryControl />}
    </VStack>
  )
}
export default withProjectId(SummaryTop)
