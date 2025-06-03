import { type ModelStatic, Model } from "sequelize"
export async function paginate<T extends Model>(
   model: ModelStatic<T>,
   page: number = 1,
   perPage: number = 10
) {
   const offset = Number((page - 1) * perPage)
   const limit = Number(perPage)

   try {
      const data = await model.findAndCountAll({
         offset,
         limit,
      })

      return {
         page: Number(page),
         perPage: Number(perPage),
         total: data.count,
         data: data.rows,
      }
   } catch (error) {
      console.error("Pagination error:", error)
      throw new Error("Failed to paginate data")
   }
}
