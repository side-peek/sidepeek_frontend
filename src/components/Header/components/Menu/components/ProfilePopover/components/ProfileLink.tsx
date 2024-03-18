import { Link } from "react-router-dom"

import { useUserInfoData } from "@services/caches/useUserInfoData"

import AvatarCard from "@components/AvatarCard/AvatarCard"

interface ProfileLink {
  onClose: () => void
}

const ProfileLink = ({ onClose }: ProfileLink) => {
  const userInfo = useUserInfoData()
  return (
    <Link
      to={`/profile/${userInfo?.id}`}
      onClick={onClose}>
      <AvatarCard
        flexDir="row"
        border="none"
        gap="2rem">
        <AvatarCard.Image src={userInfo?.profileImageUrl ?? undefined} />
        <AvatarCard.Content
          text={userInfo?.nickname ?? ""}
          fontFamily="SCDream_Bold"
          fontSize="2rem"
          display="block"
        />
      </AvatarCard>
    </Link>
  )
}

export default ProfileLink
