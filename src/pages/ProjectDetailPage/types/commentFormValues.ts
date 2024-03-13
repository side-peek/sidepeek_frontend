export interface CommentFormValues {
  ownerId: number
  projectId: number | null
  parentId: number | null
  isAnonymous: boolean
  content: string
}
