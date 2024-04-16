declare module "api-models" {
  export type TechStackRequest = {
    skillId?: number
    category?: string
  }

  export type UserInfoProperties = {
    nickname: string
    introduction: string
    profileImageUrl: string
    job: string
    career: string
    githubUrl: string
    blogUrl: string
    techStacks: TechStack[]
  }
  export interface UserInfo {
    userInfo: UserInfoProperties
  }

  export type UserSummary = {
    id: number | null
    isSocialLogin: boolean | null
    nickname: string
    profileImageUrl: string | null
  }

  export type AuthResponseType = {
    accessToken: string
    refreshToken: string
    user: UserSummary
  }

  export type Project = {
    id: number
    name: string
    subName: string
    overview: string
    thumbnailUrl: string
    overviewImageUrl: ProjectOverViewUrl[]
    githubUrl: string
    deployUrl: string
    techStacks: TechStack[]
    startDate: string
    endDate: string
    ownerId: number
    members: Member[]
    viewCount: number
    likeCount: number
    likeId: number | null
    commentCount: number
    comments: Comment[]
    description: string
    troubleShooting: string
  }

  export type AllProject = {
    id: number
    name: string
    subName: string
    thumbnailUrl: string
    viewCount: number
    likeCount: number
    isLiked: boolean
  }

  export type BannerProject = {
    id: number
    name: string
    subName: string
    thumbnailUrl: string
  }

  export type Description = {
    content: string
    imageUrls: string[]
  }

  export type Member = {
    id: number
    role: string
    userSummary: UserSummary
  }

  export type ProjectTag = {
    id: number
    projectId: string
    tagId: string
  }

  export type ProjectSkill = {
    id: number
    projectId: string
    skillId: string
  }

  export type ProjectFile = {
    id: number
    projectId: string
    fileId: string
  }

  export type ProjectMember = {
    id: number
    projectId: string
    memberId?: string
    authority: string
    role: string
    nickname: string
  }

  export type ProjectOverViewUrl = {
    id: number
    url: string
  }

  export type Owner = {
    id: number
    nickname: string
    profileImageUrl: string
  }

  export type Comment = {
    id: number
    user: userSummary | null
    parentId?: number
    isOwner: boolean
    isAnonymous: boolean
    content: string
    createdAt: string
    replies: Comment[]
  }

  export type Like = {
    id: number
    projectId: string
    userId: string
    createdAt: string
  }

  export type TechStack = {
    id: number
    skill: Skill
    category: string
  }

  export type Skill = {
    id: number
    name: string
    iconImageUrl?: string
  }

  export type Tag = {
    id: number
    name: string
  }

  export type postEmailAuthResponseType = UserSummary

  export type postEmailRefreshPayload = {
    refreshToken: string
  }

  export type postEmailRefreshResponseType = AuthResponseType

  export type postEmailLoginPayload = {
    email: string
    password: string
  }

  export type postEmailLoginResponseType = AuthResponseType

  export type postGithubLoginPayload = {
    code: string
  }

  export type postGithubLoginResponseType = {
    providerType: string
  } & AuthResponseType

  export type postEmailSignUpPayload = {
    email: string
    password: string
    nickname: string
  }

  export type getUserListPayload = {
    keyword: string
  }

  export type getUserListResponseType = {
    users: UserSummary[]
  }

  export type getUserDetailPayload = { userId: number }

  export type getUserDetailResponseType = UserInfoProperties

  export type UserInfoRequest = {
    nickname: string
    introduction: string
    profileImageUrl: string
    job: string
    career: string
    githubUrl: string
    blogUrl: string
    techStacks: TechStackRequest[]
  }
  export type putUserDetailPayload = {
    userId: number
  } & {
    userInfo: UserInfoRequest
  }

  export type PasswordChangeType = {
    originalPassword: string
    password: string
  }

  export type putUserPasswordPayload = {
    userId: number
    passwordChange: PasswordChangeType
  }

  export type postDoubleCheckEmailPayload = {
    email: string
  }

  export type postDoubleCheckEmailResponseType = {
    isDuplicated: boolean
  }

  export type postDoubleCheckNicknamePayload = {
    nickname: string
  }

  export type getUserProjectsPayload = {
    userId: number
    type: string
  }

  export type postDoubleCheckNicknameResponseType = {
    isDuplicated: boolean
  }

  export type getTechStacksPayload = {
    keyword?: string
  }

  export type getTechStacksResponseType = {
    skills: Skill[]
  }

  export type postProjectFilesPayload = {
    file: FormData
  }

  export type postProjectFilesResponseType = {
    fileUrl: string
  }

  export type postProjectPayload = {
    name: string
    overview: string
    ownerId: number
    githubUrl: string
    techStacks: { skillId: number; category: string }[]
    subName: string
    thumbnailUrl: string
    deployUrl: string
    startDate: string
    endDate: string
    overviewImageUrl: string[]
    members: { id: number | null; nickname: string; role: string }[]
    description: string
    troubleShooting: string
  }

  export type getProjectDetailPayload = {
    projectId: number
  }

  export type getProjectDetailResponseType = {
    projectDetailInfo: Project
  }

  export type getAllProjectsResponseType = {
    content: AllProject[]
    totalElements: number
    numberOfElements: number
    hasNext: boolean
  }

  export type getAllProjectsType = {
    sortOption: "createdAt" | "like" | "view"
    isReleased: boolean
    lastProjectId?: number | null
    lastOrderCount?: number | null
    search?: string | null
    skill?: string
  }

  export type putProjectPayload = Omit<postProjectPayload, "ownerId">

  export type deleteProjectPayload = {
    projectId: number
  }

  export type getLikeResponseType = {
    likeId: number | null
  }

  export type postLikePayload = {
    projectId: number
  }

  export type deleteLikePayload = {
    likeId: number
  }

  export type postCommentPayload = {
    ownerId: number
    projectId: number | null
    parentId: number | null
    isAnonymous: boolean
    content: string
  }

  export type editCommentPayload = {
    isAnonymous: boolean
    content: string
    commentId: number
  }

  export type deleteCommentPayload = {
    commentId: number
  }
}
