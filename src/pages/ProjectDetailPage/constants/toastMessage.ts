export const COMMON_MESSAGES = {
  SERVER: "서버 오류",
}

export const GET_PROJECT_MESSAGES = {
  ERROR: {
    BAD_REQUEST: "프로젝트 정보를 불러 오는데 실패했습니다",
    UNCAUGHT: "일시적인 오류가 발생하였습니다.",
  },
}

export const COMMENT_MESSAGES = {
  SUCCESS: {
    POST: "댓글이 등록되었습니다",
    DELETE: "댓글이 삭제되었습니다",
    EDIT: "댓글이 수정되었습니다",
  },
  ERROR: {
    BAD_REQUEST: "요청 정보가 유효하지 않습니다.",
    MAX_LENGTH: "댓글은 100자 이하여야 합니다.",
    UNAUTHORIZED: "해당 요청에 대한 권한이 없습니다.",
    NOT_FOUND: "존재하지 않는 댓글입니다.",
    UNCAUGHT: "일시적인 오류가 발생하였습니다.",
  },
}

export const LIKE_MESSAGES = {
  ERROR: {
    BAD_REQUEST: "좋아요 요청에 실패했습니다.",
    CONFLICT: "이미 좋아요를 눌렀습니다.",
    UNCAUGHT: "일시적인 오류가 발생하였습니다.",
  },
}

export const PROJECT__CONTROL_MESSAGES = {
  ERROR: {
    FORBIDDEN: "삭제 요청에 실패했습니다.",
    NOT_FOUND: "해당 요청에 대한 권한이 없습니다.",
    UNCAUGHT: "일시적인 오류가 발생하였습니다.",
  },
}
