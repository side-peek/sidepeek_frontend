export type EmptyMessaggeType =
  | "DATE"
  | "EXPLANATION"
  | "MEMBER"
  | "TECHSTACKS"
  | "COMMENTS"

export type EmptyType = {
  [key in EmptyMessaggeType]: string
}

export const EMPTY_MESSAGE: EmptyType = {
  DATE: "등록된 프로젝트 기간이 존재하지 않습니다.",
  EXPLANATION: "내용이 존재하지 않습니다.",
  MEMBER: "등록된 멤버가 존재하지 않습니다.",
  TECHSTACKS: "등록된 기술 스택이 존재하지 않습니다.",
  COMMENTS: "댓글을 남겨보세요",
}
