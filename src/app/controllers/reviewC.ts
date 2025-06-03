import { Review } from "../models"
import { paginate } from "@/app/helpers/pagination"
import type { ReviewCreatePayload } from "@/types/model/review"

export function reviewC() {
   async function get(query: any) {
      const data = await paginate(Review, query.page, query.perPage)
      return data
   }

   async function find(id: number) {
      const data = await Review.findByPk(id)
      if (!data) {
         throw new Error("Not found")
      }
      return data
   }

   async function create(payload: ReviewCreatePayload) {
      try {
         const _payload = {
            ...payload,
            totalScore: (
               (Number(payload.languageScore) +
                  Number(payload.relevanceScore) +
                  Number(payload.spellingScore)) /
               3
            ).toFixed(2),
         }
         const data = await Review.create(_payload)
         return data
      } catch (error) {
         console.error("Error creating Review:", error)
         throw new Error("Failed to create Review")
      }
   }

   async function update(id: number, payload: ReviewCreatePayload) {
      const model = await find(id)

      try {
         const _payload = {
            ...payload,
            totalScore: (
               (Number(payload.languageScore) +
                  Number(payload.relevanceScore) +
                  Number(payload.spellingScore)) /
               3
            ).toFixed(2),
         }
         const result = await model.update(_payload)
         return result
      } catch (error) {
         console.error("Error updating Review:", error)
         throw new Error("Failed to update Review")
      }
   }

   async function destroy(id: number) {
      const model = await find(id)
      try {
         await model.destroy()
         return true
      } catch (error) {
         console.error("Error deleting Review:", error)
         throw new Error("Failed to delete Review")
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
