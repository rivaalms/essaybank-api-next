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

export type ResponseModel = Model<
   InferAttributes<ResponseAttributes>,
   InferCreationAttributes<ResponseAttributes>
> &
   ResponseAttributes

export type ResponseCreatePayload = Omit<
   ResponseAttributes,
   "id" | "createdAt" | "updatedAt"
>
