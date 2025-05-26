import { db } from "@/db/connection"
import { DataTypes } from "sequelize"
import type { ResponseModel } from "@/types/model/response"

const Response = db.define<ResponseModel>("Response", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },
   questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: "Question",
         key: "id",
      },
   },
   answer: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
   createdAt: DataTypes.DATE,
   updatedAt: DataTypes.DATE,
})

export { Response }
