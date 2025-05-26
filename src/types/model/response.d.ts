import {
   Model,
   CreationOptional,
   type InferAttributes,
   type InferCreationAttributes,
} from "sequelize"

export type ResponseAttributes = {
   id: CreationOptional<number>
   questionId: number
   answer: string
   createdAt: CreationOptional<Date>
   updatedAt: CreationOptional<Date>
}

export type ResponseCreationAttributes = Omit<
   ResponseAttributes,
   "id" | "createdAt" | "updatedAt"
>

export type ResponseModel = Model<
   InferAttributes<ResponseAttributes> &
      InferCreationAttributes<ResponseCreationAttributes>
>
