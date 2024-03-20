import { IoMdClose } from "react-icons/io"

import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import { Skill } from "api-models"

import CloseButtonTag from "@components/Tag/components/CloseButtonTag"
import CommonTag from "@components/Tag/components/CommonTag"
import { FieldProps } from "@components/TechStack/hooks/useTechStack"

import { filterSelectedId } from "@pages/ProjectEditPage/utils/filterSelectedId"

import StackSearchBox from "../../pages/ProjectEditPage/components/TechStacksFields/components/StackSearchBox"

const TechStackSection = ({
  fieldValue,
  onAppendField,
  onAppendStack,
  onDeleteField,
  onDeleteStack,
  onChangeCategory,
  render,
}: FieldProps<Skill>) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  return (
    <Box
      w="100%"
      position="relative">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold"
        margin="1.5rem 0 1.5rem 1rem">
        기술스택
      </Text>
      {fieldValue?.map((field, index) => {
        const selectedData = field.data
        return (
          <Flex
            pos="relative"
            key={field.id || index}
            direction={isLargerThan500 ? "row" : "column"}
            mb={isLargerThan500 ? "3rem" : "1.5rem"}>
            {render({
              value: field.category,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeCategory(e, index)
              },
            })}
            <Box>
              {onDeleteField && (
                <Flex
                  border="1.3px solid"
                  borderColor="grey.300"
                  alignItems="center"
                  justifyContent="center"
                  w="1.5rem"
                  h="1.5em"
                  borderRadius="5px"
                  bg="default"
                  pos="absolute"
                  top={isLargerThan500 ? "0.4rem" : "0.8rem"}
                  right={isLargerThan500 ? "2rem" : "1rem"}
                  cursor="pointer">
                  <Icon
                    as={IoMdClose}
                    color="grey.500"
                    onClick={() => onDeleteField?.(index)}></Icon>
                </Flex>
              )}
            </Box>

            <Box
              flex="0 0 30rem"
              borderLeft={isLargerThan500 ? "1px solid" : ""}
              borderColor="grey.200"
              px={isLargerThan500 ? "2rem" : "0rem"}
              py={isLargerThan500 ? "0rem" : "1rem"}>
              <StackSearchBox
                render={({ techStacks }) => {
                  return (
                    <Box>
                      {filterSelectedId(techStacks, selectedData).map(
                        (techStack) => {
                          return (
                            <Box
                              ml="1rem"
                              mb="0.5rem"
                              fontSize="1.2rem"
                              cursor="pointer"
                              _hover={{ fontWeight: "bold" }}
                              onClick={() => onAppendStack?.(techStack, index)}
                              key={techStack.name}>
                              <CommonTag
                                fontSize="1rem"
                                fontWeight="bold"
                                key={techStack.name}
                                label={techStack.name}
                                leftElement={
                                  <Image
                                    src={techStack.iconImageUrl}
                                    w="1.4rem"
                                    h="1.4rem"
                                  />
                                }
                              />
                            </Box>
                          )
                        },
                      )}
                    </Box>
                  )
                }}
              />
            </Box>

            <Box
              flexWrap="nowrap"
              flex="1 1 auto"
              borderLeft={isLargerThan500 ? "1px solid" : ""}
              borderBottom={isLargerThan500 ? "" : "1px solid"}
              borderColor="grey.200"
              pl={isLargerThan500 ? "2rem" : "1rem"}
              pt={isLargerThan500 ? "0" : "1rem"}
              pb={isLargerThan500 ? "0" : "1.5rem"}>
              {selectedData.length !== 0 && (
                <Box
                  h="2.5rem"
                  mt={isLargerThan500 ? "0.2rem" : "0"}>
                  <Text
                    fontSize="1.3rem"
                    fontFamily="SCDream_Bold">
                    추가한 기술 스택
                  </Text>
                </Box>
              )}
              {selectedData?.map((stack) => (
                <CloseButtonTag
                  mr="0.5rem"
                  mb="0.5rem"
                  key={stack.name}
                  label={stack.name}
                  fontWeight="bold"
                  fontSize="1rem"
                  leftElement={
                    <Image
                      src={stack.iconImageUrl}
                      w="1.4rem"
                      h="1.4rem"
                    />
                  }
                  onClickCloseButton={() => onDeleteStack?.(stack, index)}
                />
              ))}
            </Box>
          </Flex>
        )
      })}
      {onAppendField && (
        <Center>
          <Button
            w="99%"
            h="3.2rem"
            border="1px solid"
            borderColor="grey.300"
            borderRadius="1rem"
            margin="auto auto"
            onClick={() => onAppendField()}>
            + 기술스택 추가
          </Button>
        </Center>
      )}
    </Box>
  )
}
export default TechStackSection
