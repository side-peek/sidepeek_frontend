interface SetPageButtonStylesProps {
  isSelected: boolean
}

export const setPageButtonStyles = ({
  isSelected,
}: SetPageButtonStylesProps) => ({
  color: isSelected ? "default" : "black.100",
  bg: isSelected ? "blue.100" : "default",
  _hover: isSelected ? { bg: "blue.100" } : { bg: "grey.200" },
})
