export interface ProfileActionsButtonsProps {
  handleNewProject: React.MouseEventHandler<HTMLButtonElement>
  handleEditProfile: React.MouseEventHandler<HTMLButtonElement>
}

export type ProjectsType = "JOINED" | "LIKED" | "COMMENTED"
