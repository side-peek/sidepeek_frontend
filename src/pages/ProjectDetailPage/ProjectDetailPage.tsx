import { useEffect, useState } from "react"

import axios from "axios"

const ProjectDetailPage = () => {
  const [project, setProject] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/v1/project")
        setProject(response.data.data.projects[0])
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  console.log(project)
}

export default ProjectDetailPage
