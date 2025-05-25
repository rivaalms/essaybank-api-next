import { db } from "@/db/connection"
import { DataTypes } from "sequelize"

const Review = db.define(
   "Review",
   {
      reviewerId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "User",
            key: "id"
         },
      },
      responseId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "Response",
            key: "id"
         }
      },
      relevanceScore: {
         type: DataTypes.DECIMAL(3, 2),
         get() {
            const value = this.getDataValue("relevanceScore")
            return value !== null ? parseFloat(value) : null
         }
      },
      languageScore: {
         type: DataTypes.DECIMAL(3, 2),
         get() {
            const value = this.getDataValue("languageScore")
            return value !== null ? parseFloat(value) : null
         }
      },
      spellingScore: {
         type: DataTypes.DECIMAL(3, 2),
         get() {
            const value = this.getDataValue("spellingScore")
            return value !== null ? parseFloat(value) : null
         }
      },
      totalScore: {
         type: DataTypes.DECIMAL(3, 2),
         get() {
            const value = this.getDataValue("totalScore")
            return value !== null ? parseFloat(value) : null
         }
      }
   }
)

export { Review }