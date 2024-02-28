import { Link as ReactRouterLink } from "react-router-dom"

import { Image, Link } from "@chakra-ui/react"

import SidePeekLogoSVG from "@assets/svgs/sidepeek_logo.svg"

interface LogoLinkProps {
  logoHeight: string
}

const LogoLink = ({ logoHeight }: LogoLinkProps) => {
  return (
    <Link
      as={ReactRouterLink}
      to="/">
      <Image
        height={logoHeight}
        aspectRatio={5 / 1.3}
        src={SidePeekLogoSVG}
        alt="side peek logo"
      />
    </Link>
  )
}

export default LogoLink
