import { useParams } from "react-router-dom"

import { Avatar, Flex } from "@chakra-ui/react"

import useDeleteCommentMutation from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"

import { ProjectDetailCommentProps } from "./ProjectDetailComment"
import ProjectDetailCommentContent from "./ProjectDetailCommentContent"

const ProjectDetailCommentList = ({ comments }: ProjectDetailCommentProps) => {
  // const { register, handleSubmit, reset } = useForm()
  const { projectId } = useParams()

  const { deleteComment } = useDeleteCommentMutation(Number(projectId))

  // const submitEdit = (data) => {
  //   ontimeupdate(commentData.id, data.comment)
  //   setIsEditing(false)
  // }

  const handleDelete = (id: number) => {
    deleteComment.mutate(id)
  }

  return (
    <Flex
      direction="column"
      gap="4rem"
      p="3rem">
      {comments.map((comment) => (
        <Flex
          justifyContent="space-between"
          align="center"
          key={comment.id}>
          <Flex
            gap="1rem"
            w="100%"
            align="center">
            <Avatar
              cursor="pointer"
              _hover={{ opacity: "0.5" }}
              src={comment.owner.profileImageUrl}
              width="5rem"
              height="5rem"
            />
            <ProjectDetailCommentContent
              comment={comment}
              handleDelete={handleDelete}
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default ProjectDetailCommentList
