import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import ErrorBoundaries from "@components/ErrorBoundary/ErrorBoundaries"
import FullScreenSpinner from "@components/LoadingComponents/FullScreenSpinner"
import Prefetcher from "@components/PreFetcher/Prefetcher"

import ScrollToTop from "../ScrollToTop/ScrollToTop"

const RootLayout = () => {
  return (
    <ErrorBoundaries>
      <Suspense fallback={<FullScreenSpinner />}>
        <Prefetcher>
          <ScrollToTop />
          <Outlet />
        </Prefetcher>
      </Suspense>
    </ErrorBoundaries>
  )
}

export default RootLayout
