export function resolveResponse<T>(data: T, message: string = "", error: string = "",) {
   return {
      meta: {
         success: error.length < 1,
         error,
         message: message,
      },
      data
   }
}