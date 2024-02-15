declare module "api-models" {
  export interface User {
    id: number
    nickname: string
    provider: string
    email: string
    password?: string
    profile_image_url?: string
    introduction?: string
    job?: string
    career?: string
    github_url?: string
    blog_url?: string
    created_at: string
    updated_at: string
    deleted_at?: string
    is_deleted: boolean
  }

  export interface UserSkills {
    id: number
    user_id: number
    skill_id: number
  }

  export interface Authorization {
    id: number
    refresh_token: string
  }

  export interface Files {
    id: number
    type: string
    url: string
  }

  export interface Project {
    id: number
    name: string
    sub_name?: string
    overview: string
    start_date?: string
    end_date?: string
    description: string
    // 일단 정해진 형식이 없으므로 string
    troubleshooting?: string
    service_url?: string
    source_url?: string
    created_at: string
    updated_at: string
    deleted_at?: string
    is_deleted: boolean
    view_count: number
    like_count: number
  }

  export interface ProjectTags {
    id: number
    project_id: number
    tag_id: number
  }

  export interface ProjectSkills {
    id: number
    project_id: number
    skill_id: number
  }

  export interface ProjectFiles {
    id: number
    project_id: number
    file_id: number
  }

  export interface ProjectMembers {
    id: number
    project_id: number
    member_id?: number
    authority: string
    role: string
    nickname: string
  }

  export interface Comment {
    id: number
    user_id: number
    project_id: number
    is_anonymous: boolean
    content: string
    created_at: string
    updated_at: string
  }

  export interface Likes {
    id: number
    user_id: number
    project_id: number
    created_at: string
    updated_at: string
  }

  export interface Skill {
    id: number
    name: string
    icon_url?: string
  }

  export interface Tag {
    id: number
    name: string
  }
}
