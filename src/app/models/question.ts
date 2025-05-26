import { db } from "@/db/connection"
import { DataTypes } from "sequelize"
import type { QuestionModel } from "@/types/model/question"

const Question = db.define<QuestionModel>("Question", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },
   questionText: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
   referenceAnswer: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
   createdAt: DataTypes.DATE,
   updatedAt: DataTypes.DATE,
})

export { Question }
