type SuccessWithData<T> = {
  isLoading: false
  error: null
  data: T
}

type StartLoading = {
  isLoading: true
  error: null
  data: null
}
type WithError = {
  isLoading: false
  error: Error
  data: null
}

export type FileUploadStateType<T> =
  | SuccessWithData<T>
  | StartLoading
  | WithError
