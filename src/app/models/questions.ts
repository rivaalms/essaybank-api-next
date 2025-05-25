import { db } from "@/db/connection"
import { DataTypes } from "sequelize"

const Question = db.define(
   "Question",
   {
      questionText: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
      referenceAnswer: {
         type: DataTypes.TEXT,
         allowNull: false,
      }
   }
)

export { Question }