import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"

import {
  Box,
  Flex,
  HStack,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react"
import { FaSquarePen } from "@react-icons/all-files/fa6/FaSquarePen"
import { ImGithub } from "@react-icons/all-files/im/ImGithub"
import { MdCancel } from "@react-icons/all-files/md/MdCancel"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"
import CommonInput from "@components/Input/CommonInput"

import {
  BLOG_URL_VALIDATION_OPTION,
  GITHUB_URL_VALIDATION_OPTION,
  INTRODUCTION_VALIDATION_OPTION,
} from "@pages/ProfileEditPage/constants/validation"

import { ProfileInfo } from "../../types/types"

FaSquarePen

FaSquarePen

interface Introductions {
  aboutMe: string
  githubUrl: string
  blogUrl: string
}
interface ProfileIntroductionProps
  extends Pick<ProfileInfo, "introduction" | "githubUrl" | "blogUrl"> {
  register: UseFormRegister<Introductions>
  errors: FieldErrors
  setValue: UseFormSetValue<Introductions>
}

const ProfileIntroduction = ({
  register,
  errors,
  setValue,
}: ProfileIntroductionProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  return (
    <Box
      w="100%"
      pb="2rem">
      <Flex alignItems="center">
        <Text
          fontSize="xl"
          fontFamily="SCDream_Bold"
          margin="1.5rem 0 1.5rem 1rem">
          소개
        </Text>
        <ErrorMessage
          errors={errors}
          name="aboutMe"
          render={({ message }) => (
            <Text
              fontSize="1.1rem"
              color="red.100"
              ml="1rem">
              {message}
            </Text>
          )}
        />
      </Flex>

      <Textarea
        height="10rem"
        resize="none"
        placeholder="소개글을 입력해주세요"
        {...register("aboutMe", INTRODUCTION_VALIDATION_OPTION)}
      />

      <Flex
        direction="column"
        mt="2rem"
        w="100%">
        <Flex direction="row">
          <HStack
            mb="0.5rem"
            w={isLargerThan500 ? "38rem" : "100%"}>
            <ImGithub size="2.36rem" />
            <InputGroup
              size="sm"
              alignItems="center">
              <InputLeftAddon
                ml="0.5rem"
                pl="1rem"
                h="2.5rem"
                fontSize="1.1rem"
                borderLeftRadius="0.8rem">
                https://
              </InputLeftAddon>
              <CommonInput
                size="md"
                ml="0.5rem"
                pr="2.5rem"
                fontSize="1.2rem"
                variant="flushed"
                borderColor={errors.githubUrl && "red.100"}
                _focus={{ borderColor: errors.githubUrl && "red.100" }}
                placeholder="github.com/sidepeek"
                register={register("githubUrl", GITHUB_URL_VALIDATION_OPTION)}>
                <MdCancel
                  size="15"
                  cursor="pointer"
                  onClick={() => setValue("githubUrl", "")}
                />
              </CommonInput>
            </InputGroup>
          </HStack>
          {isLargerThan500 && (
            <ErrorMessage
              errors={errors}
              name="githubUrl"
              render={({ message }) => (
                <Text
                  fontSize="1.1rem"
                  color="red.100"
                  ml="0.8rem"
                  mt="0.5rem">
                  {message}
                </Text>
              )}
            />
          )}
        </Flex>

        <Flex
          direction="column"
          mt="0.7rem"
          w="100%">
          <Flex direction="row">
            <HStack
              mb="0.5rem"
              w={isLargerThan500 ? "38rem" : "100%"}>
              <FaSquarePen size="2.35rem" />
              <InputGroup
                size="sm"
                alignItems="center">
                <InputLeftAddon
                  ml="0.5rem"
                  pl="1rem"
                  h="2.5rem"
                  fontSize="1.1rem"
                  borderLeftRadius="0.8rem">
                  https://
                </InputLeftAddon>
                <CommonInput
                  size="md"
                  ml="0.5rem"
                  pr="2.5rem"
                  fontSize="1.2rem"
                  variant="flushed"
                  _focus={{ borderColor: errors.blogUrl && "red.100" }}
                  borderColor={errors.blogUrl && "red.100"}
                  placeholder="blog.sidepeek.com"
                  register={register("blogUrl", BLOG_URL_VALIDATION_OPTION)}>
                  <MdCancel
                    size="15"
                    cursor="pointer"
                    onClick={() => setValue("blogUrl", "")}
                  />
                </CommonInput>
              </InputGroup>
            </HStack>
            <ErrorMessage
              errors={errors}
              name="blogUrl"
              render={({ message }) => (
                <Text
                  color="red.100"
                  fontSize="1.1rem"
                  ml="0.8rem"
                  mt="0.5rem">
                  {message}
                </Text>
              )}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProfileIntroduction
