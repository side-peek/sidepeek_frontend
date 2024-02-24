import { List, ListItem } from "@chakra-ui/react"

interface SearchListProps {
  searchList: string[]
}

const SearchList = ({ searchList }: SearchListProps) => {
  return (
    <List>
      {searchList.map((item) => {
        return <ListItem key={item}>{item}</ListItem>
      })}
    </List>
  )
}

export default SearchList
