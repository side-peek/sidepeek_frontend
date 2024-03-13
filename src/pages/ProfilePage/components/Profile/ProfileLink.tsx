import { FunctionComponent } from "react"

import { HStack, Link, Text } from "@chakra-ui/react"

interface ProfileLinkProps {
  Icon: FunctionComponent<{ size: string }>
  url?: string | null
  alt: string
}

const ProfileLink = ({ Icon, url, alt }: ProfileLinkProps) => {
  return (
    <HStack>
      <Icon size="2.6rem" />
      {url ? (
        <Link
          href={url}
          fontSize="1.3rem">
          {url}
        </Link>
      ) : (
        <Text
          fontSize="1.3rem"
          color="grey.500"
          mt="0.5rem">
          {alt} 링크가 없습니다.
        </Text>
      )}
    </HStack>
  )
}

export default ProfileLink
