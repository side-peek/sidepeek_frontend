import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

export const DefaultMetaData = () => {
  const location = useLocation()
  return (
    <Helmet>
      <title>사이드픽(SidePeek)</title>
      <meta
        name="description"
        content="사이드 프로젝트를 공유하고 구경해보세요!"
      />
      <meta
        property="og:title"
        content="사이드픽 - 사이드 프로젝트를 공유하고 구경해보세요!"
      />
      <meta
        property="og:image"
        content="https://www.sidepeek.site/assets/sidepeek_logo-BS3RZAZ-.svg"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={`${window.location.origin}${location.pathname}`}
      />
      <meta
        name="description"
        content="사이드 프로젝트를 공유하고 구경해보세요!"
      />
    </Helmet>
  )
}

export const HomePageMetaData = () => {
  return (
    <Helmet>
      <meta
        name="description"
        content="사이드 프로젝트를 구경해보세요!"
      />
    </Helmet>
  )
}

export const ProjectDetailPageMetaData = () => {
  const location = useLocation()
  return (
    <Helmet>
      <title>프로젝트 상세</title>
      <meta
        property="og:title"
        content="사이드 프로젝트 상세"
      />
      <meta
        property="og:url"
        content={`${window.location.origin}${location.pathname}`}
      />
      <meta
        name="description"
        content="사이드 프로젝트에 대해 자세히 알아보세요!"
      />
    </Helmet>
  )
}
