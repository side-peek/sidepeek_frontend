import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FaSquarePen } from "react-icons/fa6"
import { ImGithub } from "react-icons/im"

import { Box, HStack, Text, Textarea } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

import {
  BLOG_URL_VALIDATION_OPTION,
  GITHUB_URL_VALIDATION_OPTION,
} from "@pages/ProfileEditPage/constants/validation"

import { ProfileInfo } from "../../types/types"

interface Urls {
  githubUrl: string
  blogUrl: string
}
interface ProfileIntroductionProps
  extends Pick<ProfileInfo, "introduction" | "githubUrl" | "blogUrl"> {
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
  register: UseFormRegister<Urls>
  errors: FieldErrors
}

const ProfileIntroduction = ({
  register,
  errors,
  introduction = "",
  setProfileInfo,
}: ProfileIntroductionProps) => {
  return (
    <Box
      w="100%"
      pb="2rem">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold"
        margin="1.5rem 0 1.5rem 1rem">
        소개
      </Text>
      <Textarea
        height="10rem"
        resize="none"
        value={introduction}
        placeholder="소개글을 입력해주세요"
        onChange={(e) =>
          setProfileInfo((profileInfo) => ({
            ...profileInfo,
            introduction: e.target.value,
          }))
        }
      />

      <Box mt="2rem">
        <HStack mb="1rem">
          <ImGithub size="2.6rem" />

          <CommonInput
            size="lg"
            ml="0.5rem"
            fontSize="1.2rem"
            variant="flushed"
            inputWidth="30rem"
            placeholder="Github 링크를 입력해주세요"
            register={register("githubUrl", GITHUB_URL_VALIDATION_OPTION)}
          />

          {errors.githubUrl?.message && (
            <Text>
              {errors.githubUrl && errors.githubUrl.message.toString()}
            </Text>
          )}
        </HStack>
        <HStack>
          <FaSquarePen size="2.65rem" />

          <CommonInput
            size="lg"
            ml="0.5rem"
            fontSize="1.2rem"
            variant="flushed"
            inputWidth="30rem"
            placeholder="Blog 링크를 입력해주세요"
            register={register("blogUrl", BLOG_URL_VALIDATION_OPTION)}
          />
          {errors.blogUrl?.message && (
            <Text>{errors.blogUrl && errors.blogUrl.message.toString()}</Text>
          )}
        </HStack>
      </Box>
    </Box>
  )
}

export default ProfileIntroduction
