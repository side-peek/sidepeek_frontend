import { ComponentType } from "react"
import { useParams } from "react-router-dom"

export interface ProjectIdProps {
  projectId: string
}

export const withProjectId = <P extends ProjectIdProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const ComponentWithProjectId = (props: Omit<P, keyof ProjectIdProps>) => {
    const { projectId } = useParams<Record<string, string>>()

    if (!projectId) {
      return null
    }
    return (
      <WrappedComponent
        {...(props as P)}
        projectId={projectId}
      />
    )
  }
  return ComponentWithProjectId
}
