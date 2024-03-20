import { ProjectFormValues } from "../types/ProjectFormValues"

export const ProjectFormDefaultValues: ProjectFormValues = {
  name: "",
  subName: "",
  overview: "",
  overviewImageUrl: [],
  thumbnailUrl: "",
  githubUrl: "",
  deployUrl: "",
  startDate: "",
  endDate: "",
  techStacks: [{ category: "", data: [] }],
  description: "",
  troubleShooting: "",
  members: [{ category: "", data: [] }],
}
