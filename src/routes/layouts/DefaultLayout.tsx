import { Outlet } from "react-router"

import { Box, Flex, Spacer } from "@chakra-ui/react"

import { DefaultMetaData } from "@components/ MetaData/MetaData"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import Prefetcher from "@components/PreFetcher/Prefetcher"

import ScrollToTop from "../ScrollToTop/ScrollToTop"

const DefaultLayout = () => {
  return (
    <Prefetcher>
      <DefaultMetaData />
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
  )
}

export default DefaultLayout
