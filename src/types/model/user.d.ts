import {
   Model,
   CreationOptional,
   type InferAttributes,
   type InferCreationAttributes,
} from "sequelize"

export type UserAttributes = {
   id: CreationOptional<number>
   name: string
   email: string
   password: string
   createdAt: CreationOptional<Date>
   updatedAt: CreationOptional<Date>
}

export type UserCreationAttributes = Omit<
   UserAttributes,
   "id" | "createdAt" | "updatedAt"
>

export type UserModel = Model<
   InferAttributes<UserAttributes> &
      InferCreationAttributes<UserCreationAttributes>
>
