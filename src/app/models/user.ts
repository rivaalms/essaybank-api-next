import { db } from "@/db/connection"
import { DataTypes } from "sequelize"
import type { UserModel } from "@/types/model/user"

const User = db.define<UserModel>(
   "User",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
      },
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
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
   },
   {
      defaultScope: {
         attributes: { exclude: ["password"] },
      },
   }
)

export { User }
