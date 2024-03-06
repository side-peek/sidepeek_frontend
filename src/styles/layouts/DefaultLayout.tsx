import { Outlet } from "react-router"

import { Flex, Spacer } from "@chakra-ui/react"

import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"

const DefaultLayout = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh">
      <Header />
      <Outlet />
      <Spacer />
      <Footer />
    </Flex>
  )
}

export default DefaultLayout
