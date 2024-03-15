import { HStack } from "@chakra-ui/react"

import NextButton from "./components/NextButton/NextButton"
import PageButtons from "./components/PageButtons/PageButtons"
import PrevButton from "./components/PrevButton/PrevButton"
import PaginationProvider from "./stores/contexts"

interface PaginationProps {
  totalProjectsCount: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ totalProjectsCount, setPage }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    setPage(page)
  }
  return (
    <PaginationProvider
      limit={12}
      total={totalProjectsCount}
      onPageChange={handlePageChange}>
      <HStack>
        <PrevButton />
        <PageButtons />
        <NextButton />
      </HStack>
    </PaginationProvider>
  )
}

export default Pagination
