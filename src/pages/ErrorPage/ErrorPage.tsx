import errorgif from "@assets/images/error.gif"

const ErrorPage = () => {
  return (
    <img
      src={errorgif}
      alt="에러 페이지 움짤"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      }}
    />
  )
}

export default ErrorPage
