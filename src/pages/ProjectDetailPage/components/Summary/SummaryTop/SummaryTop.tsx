import { Link } from "react-scroll"

import { HStack, useDisclosure, useMediaQuery } from "@chakra-ui/react"
import { FaRegComment } from "@react-icons/all-files/fa/FaRegComment"
import { IoMdHeart } from "@react-icons/all-files/io/IoMdHeart"
import { IoMdHeartEmpty } from "@react-icons/all-files/io/IoMdHeartEmpty"
import { MdRemoveRedEye } from "@react-icons/all-files/md/MdRemoveRedEye"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { useDeleteLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteLikeMutation"
import { useDeleteProjectMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteProjectMutation"
import { usePostLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostLikeMutation"

import DeleteCheckModal from "../../DeleteCheckModal"
import { ProjectIdProps, withProjectId } from "../../Hoc/withProjectId"
import SummaryPopOver from "./SummaryPopOver"
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
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  const { postLikeMutation } = usePostLikeMutation()
  const { deleteLikeMutation } = useDeleteLikeMutation(Number(projectId))
  const { isOpen, onOpen: handleOpenDeleteModal, onClose } = useDisclosure()

  const { deleteProjectMutation } = useDeleteProjectMutation()
  const user = useUserInfoData()

  const handleDeleteProject = () => {
    onClose()
    deleteProjectMutation(Number(projectId))
  }

  return (
    <HStack
      mb="3rem"
      spacing="1.5rem"
      justifyContent="flex-end"
      align="center">
      <HStack spacing={isLargerThan1200 ? "1rem" : "0.5rem"}>
        {isLargerThan768 && (
          <SummaryTopIcon
            count={viewCount}
            aria-label="views"
            icon={<MdRemoveRedEye />}
            fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
          />
        )}

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
        {isLargerThan768 && (
          <Link
            to="Comment"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>
            <SummaryTopIcon
              count={commentCount}
              icon={<FaRegComment />}
              aria-label="commentButton"
              fontSize={isLargerThan1200 ? "2.3rem" : "1.8rem"}
            />
          </Link>
        )}
      </HStack>
      {ownerId === user?.id && (
        <SummaryPopOver handleOpenDeleteModal={handleOpenDeleteModal} />
      )}
      {isOpen && (
        <DeleteCheckModal
          onClick={handleDeleteProject}
          isOpen={isOpen}
          onClose={onClose}
          projectId={projectId}
        />
      )}
    </HStack>
  )
}
export default withProjectId(SummaryTop)
