declare module "api-models" {
  /* FIXME: 초기 ERD 모델 (아직 정해지지 않아서 일단 남겨놓습니다)
  export type User = {
    id: number
    nickname: string
    provider: string
    email: string
    password?: string
    profileImageUrl?: string
    introduction?: string
    job?: string
    career?: string
    githubUrl?: string
    blogUrl?: string
    createdAt: string
    updatedAt: string
    deletedAt?: string
    isDeleted: boolean
  } */

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
    id: number
    nickname: string
    profileImageUrl: string | null
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
    commentCount: number
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
    isDeploy: boolean
  }

  export type Description = {
    content: string
    imageUrls: string[]
  }

  export type Member = {
    id: number
    nickname: string
    profileImageUrl: string
    category: string
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

  export type Comment = {
    id: number
    userId: string
    projectId: string
    isAnonymous: boolean
    content: string
    createdAt: string
    updatedAt: string
  }

  export type Like = {
    id: number
    userId: string
    projectId: string
    createdAt: string
    updatedAt: string
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

  /* 인증 관련 */
  export type getEmailAuthResponseType = UserSummary

  export type postEmailRefreshPayload = {
    refreshToken: string
  }

  export type postEmailRefreshResponseType = {
    accessToken: string
  }

  export type postEmailLoginPayload = {
    email: string
    password: string
  }

  export type postEmailLoginResponseType = {
    accessToken: string
    refreshToken: string
    user: UserSummary
  }

  /* 회원 관련 */
  export type postEmailSignUpPayload = {
    email: string
    password: string
    nickname: string
  }

  export type getUserSummaryPayload = {
    keyword: string
  }

  export type getUserSummaryResponseType = {
    users: [UserSummary]
  }

  export type getUserDetailPayload = { userId: number }

  export type getUserDetailResponseType = UserInfo

  export type putUserDetailPayload = {
    userId: number
  } & UserInfo

  export type putUserPasswordPayload = {
    userId: number
    password: string
  }

  export type postDoubleCheckEmailPayload = {
    email: string
  }

  export type postDoubleCheckNicknamePayload = {
    nickname: string
  }

  /* 기술 스택 */
  export type getTechStacksPayload = {
    keyword?: string
  }

  export type getTechStacksResponseType = {
    skills: Skill[]
  }

  /* 프로젝트 파일 */
  export type postProjectFilesPayload = {
    //FIXME: file에 저장될 키 값을 아직 안정함
    file: FormData
  }

  export type postProjectFilesResponseType = {
    fileUrl: string
  }

  /* 프로젝트 게시글 */
  //FIXME: 미완성 api
  export type postProjectPayload = {
    projects: Project[]
  }

  export type getProjectDetailPayload = {
    projectId: number
  }

  export type getProjectDetailResponseType = {
    projectDetailInfo: Project
  }

  export type getAllProjectsResponseType = {
    projects: AllProject[]
  }

  export type putProjectPayload = {
    projectId: number
  } & Project

  export type deleteProjectPayload = {
    projectId: number
  }

  /* 좋아요 */
  //FIXME: 미완성 api
  export type postLikePayload = {
    projectId: number
  }
}
