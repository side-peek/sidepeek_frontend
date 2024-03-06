import { Tab, useMediaQuery } from "@chakra-ui/react"

const StyledTab = ({ children, ...props }: React.PropsWithChildren) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  return (
    <Tab
      px={isLargerThan1200 ? "2rem" : "1rem"}
      fontSize={
        isLargerThan1200 ? "1.4rem" : isLargerThan500 ? "1.4rem" : "1.1rem"
      }
      borderRadius="20px 20px 0 0"
      {...props}>
      {children}
    </Tab>
  )
}

export default StyledTab
