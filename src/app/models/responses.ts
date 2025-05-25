import { db } from "@/db/connection"
import { DataTypes } from "sequelize"

const Response = db.define(
   "Response",
   {
      questionId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "Question",
            key: "id"
         }
      },
      answer: {
         type: DataTypes.TEXT,
         allowNull: false,
      }
   }
)

export { Response }