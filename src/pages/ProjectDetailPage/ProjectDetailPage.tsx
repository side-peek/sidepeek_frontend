import { useEffect, useState } from 'react'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import '@toast-ui/editor/dist/i18n/ko-kr'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/react-editor'
import axios from 'Axios'

const ProjectDetailPage = () => {
  // const editorRef = useRef<Editor>(null)
  // const viewerRef = useRef<Viewer>(null)
  const [project, setProject] = useState(null)

  // const handleClick = () => {
  //   if (!viewerRef.current || !editorRef.current) {
  //     return
  //   }

  //   setProject({ content: editorRef.current?.getInstance().getMarkdown() })

  //   viewerRef.current
  //     .getInstance()
  //     .setMarkdown(editorRef.current.getInstance().getMarkdown())
  //   console.log(project)
  // }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios
      .get('api/v1/project')
      .then((res) => res.data.data.projects[0])
    setProject(res)
  }
  console.log(project)

  return (
    <div
      style={{
        paddingTop: '15rem',
        maxWidth: '100rem',
        width: '100%',
        margin: '0 auto',
      }}>
      {/* <Editor
        ref={editorRef}
        previewStyle='vertical' //미리보기 방향
        height='600px' //높이
        useCommandShortcut={false}
      />
      <Button onClick={handleClick}>작성</Button> */}

      <Tabs
        variant='enclosed'
        size='lg'
        fontFamily='SCDream_Bold'>
        <TabList>
          <Tab _hover={{ opacity: 0.5 }}>기능</Tab>
          <Tab _hover={{ opacity: 0.5 }}>트러블 슈팅</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {project && <Viewer initialValue={project.description} />}
          </TabPanel>
          <TabPanel>
            {project && <Viewer initialValue={project.troubleShooting} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ProjectDetailPage
