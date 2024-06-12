import { useEffect, useState } from "react"

import { HStack, Icon, IconButton, Text, useMediaQuery } from "@chakra-ui/react"
import { IoMdHeart } from "@react-icons/all-files/io/IoMdHeart"
import { IoMdHeartEmpty } from "@react-icons/all-files/io/IoMdHeartEmpty"

import { useDebounce } from "@hooks/useDebounce"

import { useDeleteLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteLikeMutation"
import { usePostLikeMutation } from "@pages/ProjectDetailPage/hooks/mutations/usePostLikeMutation"

interface SummaryLikeProps {
  projectId: string
  count: number
  likeId?: number | null
}

const SummaryLike = ({ count, likeId, projectId }: SummaryLikeProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const [isLike, setIsLike] = useState(likeId ? true : false)
  const [likeCount, setLikeCount] = useState(count)

  const { postLikeMutation } = usePostLikeMutation(Number(projectId))
  const { deleteLikeMutation } = useDeleteLikeMutation(Number(projectId))

  useEffect(() => {
    if (isLike) {
      setIsLike(true)
    } else {
      setIsLike(false)
    }
  }, [isLike])

  const changeLikeState = useDebounce(() => {
    if (isLike) {
      if (likeId) {
        deleteLikeMutation({ likeId })
      }
    } else {
      if (!likeId) {
        postLikeMutation({ projectId: Number(projectId) })
      }
    }
  }, 500)

  const handleClick = () => {
    // localState
    setIsLike((likeState: boolean) => !likeState)
    if (isLike) {
      setLikeCount((likeCountState) => likeCountState - 1)
    } else {
      setLikeCount((likeCountState) => likeCountState + 1)
    }

    // serverState
    changeLikeState()
  }

  return (
    <HStack
      alignItems="center"
      cursor={"pointer"}
      _hover={{ opacity: "0.5" }}
      onClick={handleClick}>
      {isLike ? (
        <IconButton
          aria-label="like"
          fontSize="2rem"
          icon={<Icon as={IoMdHeart} />}
        />
      ) : (
        <IconButton
          aria-label="unlike"
          fontSize="2rem"
          icon={<Icon as={IoMdHeartEmpty} />}
        />
      )}
      <Text fontSize={isLargerThan1200 ? "xl" : "md"}>{likeCount}</Text>
    </HStack>
  )
}
export default SummaryLike
