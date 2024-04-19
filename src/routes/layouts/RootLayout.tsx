import { Outlet } from "react-router"

import Prefetcher from "@components/PreFetcher/Prefetcher"

const RootLayout = () => {
  return (
    <Prefetcher>
      <Outlet />
    </Prefetcher>
  )
}

export default RootLayout
