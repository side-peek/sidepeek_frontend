import { FunctionComponent } from "react"

import { Flex, Link, Text } from "@chakra-ui/react"

interface ProfileLinkProps {
  Icon: FunctionComponent<{ size: string }>
  url?: string | null
  alt: string
}

const ProfileLink = ({ Icon, url, alt }: ProfileLinkProps) => {
  return (
    <Flex
      alignItems="center"
      gap="0.8rem">
      <Icon size="2.35rem" />
      {url ? (
        <Link
          href={url}
          fontSize="1.2rem">
          {url}
        </Link>
      ) : (
        <Text
          fontSize="1.2rem"
          color="grey.500"
          mt="0.5rem">
          {alt} 링크가 없습니다.
        </Text>
      )}
    </Flex>
  )
}

export default ProfileLink
