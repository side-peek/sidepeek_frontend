declare module "api-models" {
  export interface User {
    id: string
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
    id: string
    user_id: string
    skill_id: string
  }

  export interface Authorization {
    id: string
    refresh_token: string
  }

  export interface Files {
    id: string
    type: string
    url: string
  }

  export interface Project {
    id: string
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
    view_count: string
    like_count: string
  }

  export interface ProjectTags {
    id: string
    project_id: string
    tag_id: string
  }

  export interface ProjectSkills {
    id: string
    project_id: string
    skill_id: string
  }

  export interface ProjectFiles {
    id: string
    project_id: string
    file_id: string
  }

  export interface ProjectMembers {
    id: string
    project_id: string
    member_id?: string
    authority: string
    role: string
    nickname: string
  }

  export interface Comment {
    id: string
    user_id: string
    project_id: string
    is_anonymous: boolean
    content: string
    created_at: string
    updated_at: string
  }

  export interface Likes {
    id: string
    user_id: string
    project_id: string
    created_at: string
    updated_at: string
  }

  export interface Skill {
    id: string
    name: string
    icon_url?: string
  }

  export interface Tag {
    id: string
    name: string
  }
}
