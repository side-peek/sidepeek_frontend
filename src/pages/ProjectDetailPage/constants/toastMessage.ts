export const GET_PROJECT_MESSAGES = {
  ERROR: {
    SERVER: "서버 오류", // 500
    FAIL: "프로젝트 정보를 불러 오는데 실패했습니다", // 404
    UNCAUGHT: "일시적인 오류로 프로젝트 정보를 불러올 수 없습니다.",
  },
}

export const COMMENT_MESSAGES = {
  SUCCESS: "댓글이 등록되었습니다",
  ERROR: {
    500: "서버 오류", //500
    400: "댓글 생성 정보가 유효하지 않습니다.", // 400
    403: "비회원은 댓글을 작성할 수 없습니다.", // 403
    404: "존재하지 않는 댓글입니다.", // 404
  },
}
