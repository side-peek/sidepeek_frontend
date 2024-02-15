import { Outlet } from "react-router"

import Header from "@components/Header/Header"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default DefaultLayout
