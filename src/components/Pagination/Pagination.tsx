import PaginationProvider from "./components/Contexts/Contexts"
import NextButton from "./components/NextButton/NextButton"
import PageButtons from "./components/PageButtons/PageButtons"
import PrevButton from "./components/PrevButton/PrevButton"

const Pagination = () => {
  return (
    <PaginationProvider
      limit={24}
      total={400}>
      <PrevButton />
      <PageButtons />
      <NextButton />
    </PaginationProvider>
  )
}

export default Pagination
