import { Outlet } from "react-router"

import { Box, Flex, Spacer } from "@chakra-ui/react"

import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"

import ScrollToTop from "../ScrollToTop/ScrollToTop"

const DefaultLayout = () => {
  return (
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
  )
}

export default DefaultLayout
