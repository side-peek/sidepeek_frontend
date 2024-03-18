import { TechStack } from "api-models"

import ProfileTechStackByCategory from "./ProfileTechStackByCategory"

interface ProfileCurrentTechStackProps {
  techStacks: TechStack[]
}

const ProfileCurrentTechStack = ({
  techStacks,
}: ProfileCurrentTechStackProps) => {
  const categories = [
    ...new Set(techStacks && techStacks.map((techStack) => techStack.category)),
  ]

  return (
    categories.length &&
    categories.map((category, idx) => (
      <ProfileTechStackByCategory
        key={idx}
        category={category}
        skills={techStacks}
      />
    ))
  )
}

export default ProfileCurrentTechStack
