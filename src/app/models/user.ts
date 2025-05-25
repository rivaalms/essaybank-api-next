import { db } from "@/db/connection"
import { DataTypes } from "sequelize"

const User = db.define(
   "User",
   {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
)

export { User }