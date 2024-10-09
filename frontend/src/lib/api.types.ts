export type ApiResponse<TResult> = {
    success: boolean
    result?: TResult
    error?: ApiError
}

export type ApiError = {
    statusCode: number
    message: string
    timestamp: Date
  }