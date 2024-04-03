import { Suspense } from "react"
import { Outlet } from "react-router"

import { Box, Flex, Spacer } from "@chakra-ui/react"

import ErrorBoundaries from "@components/ErrorBoundary/ErrorBoundaries"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import FullScreenSpinner from "@components/LoadingComponents/FullScreenSpinner"
import Prefetcher from "@components/PreFetcher/Prefetcher"

import ScrollToTop from "../ScrollToTop/ScrollToTop"

const DefaultLayout = () => {
  return (
    <ErrorBoundaries>
      <Suspense fallback={<FullScreenSpinner />}>
        <Prefetcher>
          <Flex
            direction="column"
            minHeight="100vh">
            <ScrollToTop />
            <Header />
            <Box>
              <Outlet />
            </Box>
            <Spacer />
            <Footer />
          </Flex>
        </Prefetcher>
      </Suspense>
    </ErrorBoundaries>
  )
}

export default DefaultLayout
