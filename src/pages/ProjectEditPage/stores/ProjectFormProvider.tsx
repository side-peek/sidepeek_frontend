import { PropsWithChildren } from "react"
import { FormProvider } from "react-hook-form"

import { useProjectForm } from "../hooks/useProjectForm"

const ProjectFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useProjectForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        {children}
      </form>
    </FormProvider>
  )
}

export default ProjectFormProvider
