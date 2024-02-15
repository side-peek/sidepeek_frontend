import { Link as ReactRouterLink } from "react-router-dom"

import { Image, Link } from "@chakra-ui/react"

import SidePeekLogoSVG from "@assets/svgs/sidepeek_logo.svg"

const HeaderLogo = () => {
  return (
    <Link
      as={ReactRouterLink}
      to="/">
      <Image
        src={SidePeekLogoSVG}
        alt="side peek logo"
      />
    </Link>
  )
}

export default HeaderLogo
