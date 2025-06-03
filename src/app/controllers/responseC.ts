import { Response } from "../models"
import { paginate } from "@/app/helpers/pagination"
import type { ResponseCreatePayload } from "@/types/model/response"

export function responseC() {
   async function get(query: any) {
      const data = await paginate(Response, query.page, query.perPage)
      return data
   }

   async function find(id: number) {
      const data = await Response.findByPk(id)
      if (!data) {
         throw new Error("Not found")
      }
      return data
   }

   async function create(payload: ResponseCreatePayload) {
      try {
         const data = await Response.create(payload)
         return data
      } catch (error) {
         console.error("Error creating response:", error)
         throw new Error("Failed to create response")
      }
   }

   async function update(id: number, payload: ResponseCreatePayload) {
      const model = await find(id)

      try {
         const result = await model.update(payload)
         return result
      } catch (error) {
         console.error("Error updating response:", error)
         throw new Error("Failed to update response")
      }
   }

   async function destroy(id: number) {
      const model = await find(id)
      try {
         await model.destroy()
         return true
      } catch (error) {
         console.error("Error deleting response:", error)
         throw new Error("Failed to delete response")
      }
   }

   return {
      get,
      find,
      create,
      update,
      destroy,
   }
}
