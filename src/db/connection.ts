import "dotenv/config"
import { Sequelize } from "sequelize"

export const db = new Sequelize(
   process.env.DB_DATABASE as string,
   process.env.DB_USERNAME as string,
   process.env.DB_PASSWORD,
   {
      host: process.env.DB_HOST,
      dialect: "mysql",
   }
)