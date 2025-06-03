import { db } from "@/db/connection"
import { DataTypes } from "sequelize"

const UserToken = db.define(
   "UserToken",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      userId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         validate: {
            notEmpty: true
         },
         references: {
            model: "User",
            key: "id"
         }
      },
      token: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      expiresAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
   }
)

export { UserToken }