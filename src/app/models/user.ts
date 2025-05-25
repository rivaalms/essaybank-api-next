import { db } from "@/db/connection"
import { DataTypes } from "sequelize"

const User = db.define(
   "User",
   {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: true,
         },
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true,
         },
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: true,
         },
      },
   },
   {
      defaultScope: {
         attributes: { exclude: ["password"] },
      },
   }
)

export { User }
