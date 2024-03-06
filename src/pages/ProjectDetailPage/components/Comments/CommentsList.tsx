import { useNavigate } from "react-router-dom"

import { Avatar, Flex } from "@chakra-ui/react"

import { CommentsProps } from "./Comments"
import CommentsContent from "./CommentsContent"

const CommentsList = ({ comments }: CommentsProps) => {
  const navigate = useNavigate()
  // TODO: 1. 익명일때 프로필페이지 못넘어 가는거 Modal or Toast 처리 + 로그인한유저만 넘어가도록 수정
  //       2. timeago 적용

  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }
  return (
    <Flex
      direction="column"
      gap="4rem"
      p="2rem">
      {comments.map((comment) => (
        <Flex
          justifyContent="space-between"
          align="center"
          key={comment.id}>
          <Flex
            gap="2rem"
            w="100%"
            align="flex-start">
            {comment.user ? (
              <Avatar
                onClick={() => {
                  handleNavigateProfile(comment.user.id)
                }}
                cursor="pointer"
                _hover={{ opacity: "0.5" }}
                src={comment.user.profileImageUrl}
                width="5rem"
                height="5rem"
              />
            ) : (
              <Avatar
                cursor="pointer"
                _hover={{ opacity: "0.5" }}
                src=""
                width="5rem"
                height="5rem"
              />
            )}

            <CommentsContent comment={comment} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default CommentsList
