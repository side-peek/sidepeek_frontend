export const pageButtonStyles = (page: number, currentPage: number) => ({
  color: page === currentPage ? "default" : "black.100",
  bg: page === currentPage ? "blue.100" : "default",
  _hover: page == currentPage ? { bg: "blue.100" } : { bg: "grey.200" },
})
