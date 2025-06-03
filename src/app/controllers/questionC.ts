import { Question } from "../models"
import { paginate } from "@/app/helpers/pagination"
import type { QuestionCreatePayload } from "@/types/model/question"

export function questionC() {
   async function get(query: any) {
      const data = await paginate(Question, query.page, query.perPage)
      return data
   }

   async function find(id: number) {
      const data = await Question.findByPk(id)
      if (!data) {
         throw new Error("Not found")
      }
      return data
   }

   async function create(payload: QuestionCreatePayload) {
      try {
         const data = await Question.create(payload)
         return data
      } catch (error) {
         console.error("Error creating question:", error)
         throw new Error("Failed to create question")
      }
   }

   async function update(id: number, payload: QuestionCreatePayload) {
      const model = await find(id)

      try {
         const result = await model.update(payload)
         return result
      } catch (error) {
         console.error("Error updating question:", error)
         throw new Error("Failed to update question")
      }
   }

   async function destroy(id: number) {
      const model = await find(id)
      try {
         await model.destroy()
         return true
      } catch (error) {
         console.error("Error deleting question:", error)
         throw new Error("Failed to delete question")
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
