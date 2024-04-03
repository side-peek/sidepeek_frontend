import { IoCloseCircle } from "@react-icons/all-files/io5/IoCloseCircle"

import AvatarCard from "@components/AvatarCard/AvatarCard"

const MemberAvatarCard = ({
  image,
  text,
  onClick,
}: {
  image: string
  text: string
  onClick: () => void
}) => {
  return (
    <AvatarCard>
      <IoCloseCircle
        size="20"
        onClick={onClick}
        cursor="pointer"
      />
      <AvatarCard.Image src={image || ""} />
      <AvatarCard.Header text={text} />
    </AvatarCard>
  )
}

export default MemberAvatarCard
