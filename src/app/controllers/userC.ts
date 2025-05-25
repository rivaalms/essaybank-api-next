import { User } from "@/app/models/user"
import { crypt } from "@/app/helpers/crypt"
import { paginate } from "@/app/helpers/pagination"

export function userC() {
   async function get(query: any) {
      const data = await paginate(User, query.page, query.perPage)
      return data
   }

   async function create(payload: any) {
      const data = {
         name: payload.name,
         email: payload.email,
         password: await crypt().hash(payload.password)
      }

      try {
         const user = await User.create(data)
         return user
      } catch (error) {
         console.error("Error creating user:", error)
         throw new Error("Failed to create user")
      }
   }

   return {
      get,
      create
   }
}