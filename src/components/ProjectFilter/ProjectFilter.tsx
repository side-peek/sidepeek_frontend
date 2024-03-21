import { ChangeEvent } from "react"

import { Checkbox, HStack, Select, Spacer } from "@chakra-ui/react"

import { SortSelectType } from "@pages/HomePage/types/type"

interface ProjectFilterProps {
  isReleased: boolean
  handleChange: () => void
  sortOption: SortSelectType
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
  projectCount: number
}

const ProjectFilter = ({
  isReleased,
  handleChange,
  sortOption,
  handleSelect,
  projectCount,
}: ProjectFilterProps) => {
  return (
    <HStack
      marginTop="3rem"
      spacing={5}>
      <Spacer />
      <Checkbox
        isChecked={isReleased}
        paddingRight="0.3rem"
        onChange={handleChange}>
        출시 서비스만 보기
      </Checkbox>
      <Select
        disabled={projectCount <= 1 ? true : false}
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
