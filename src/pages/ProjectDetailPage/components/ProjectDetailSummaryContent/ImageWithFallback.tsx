import { useState } from "react"

import { Image } from "@chakra-ui/react"

import fallbackImg from "@assets/images/noImage.jpg"

interface ImageWithFallbackProps {
  url: string
}

const ImageWithFallback = ({ url }: ImageWithFallbackProps) => {
  const [imgUrl, setImgUrl] = useState(url)

  const handleError = () => {
    setImgUrl(fallbackImg)
  }
  return (
    <Image
      borderRadius="1rem"
      onError={handleError}
      src={imgUrl}
      alt="project thumbnail"
    />
  )
}

export default ImageWithFallback
