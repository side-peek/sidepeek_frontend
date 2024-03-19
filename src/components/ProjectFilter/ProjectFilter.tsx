import { ChangeEvent } from "react"

import { Checkbox, HStack, Select, Spacer } from "@chakra-ui/react"

import { SortSelectType } from "@pages/HomePage/types/type"

interface ProjectFilterProps {
  handleChange: () => void
  sortOption: SortSelectType
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
}

const ProjectFilter = ({
  handleChange,
  sortOption,
  handleSelect,
}: ProjectFilterProps) => {
  return (
    <HStack spacing={5}>
      <Spacer />
      <Checkbox
        paddingRight="0.3rem"
        onChange={handleChange}>
        출시 서비스만 보기
      </Checkbox>
      <Select
        width="10rem"
        variant="outline"
        marginRight="1rem"
        onChange={handleSelect}
        value={sortOption}>
        <option value="createdAt">최신순</option>
        <option value="like">인기순</option>
        <option value="view">조회순</option>
      </Select>
    </HStack>
  )
}

export default ProjectFilter