import { FaSquarePen } from "react-icons/fa6"
import { ImGithub } from "react-icons/im"

import { HStack, Link, Text } from "@chakra-ui/react"

interface ProfileLinkProps {
  githubUrl?: string | null
  blogUrl?: string | null
}

const ProfileLink = ({ githubUrl, blogUrl }: ProfileLinkProps) => {
  return (
    <>
      <HStack mt="1.5rem">
        <ImGithub size="2.6rem" />
        {githubUrl ? (
          <Link
            href={githubUrl}
            fontSize="1.3rem">
            {githubUrl}
          </Link>
        ) : (
          <Text
            fontSize="1.3rem"
            color="grey.500"
            mt="0.5rem">
            Github 링크가 없습니다
          </Text>
        )}
      </HStack>
      <HStack mt="0.8rem">
        <FaSquarePen size="2.6rem" />
        {blogUrl ? (
          <Link
            href={blogUrl}
            fontSize="1.3rem">
            {blogUrl}
          </Link>
        ) : (
          <Text
            fontSize="1.3rem"
            color="grey.500"
            mt="0.3rem">
            Blog 링크가 없습니다
          </Text>
        )}
      </HStack>
    </>
  )
}

export default ProfileLink
