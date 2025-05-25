import { User } from "@/app/models"
import { crypt } from "@/app/helpers/crypt"
import { paginate } from "@/app/helpers/pagination"

export function userC() {
   async function get(query: any) {
      const data = await paginate(User, query.page, query.perPage)
      return data
   }

   async function find(id: number) {
      const user = await User.findByPk(id)
      if (!user) {
         throw new Error("User not found")
      }
      return user
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

   async function update(id: number, payload: any) {
      const user = find(id)
      const data = {
         name: payload.name,
         email: payload.email
      }

      try {
         const result = (await user).update(data)
         return result
      } catch (error) {
         console.error("Error updating user:", error)
         throw new Error("Failed to update user")
      }
   }

   async function destroy(id: number) {
      const user = await find(id)
      try {
         await user.destroy()
         return true
      } catch (error) {
         console.error("Error deleting user:", error)
         throw new Error("Failed to delete user")
      }
   }

   return {
      get,
      find,
      create,
      update,
      destroy
   }
}