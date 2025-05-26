import {
   Model,
   CreationOptional,
   type InferAttributes,
   type InferCreationAttributes,
} from "sequelize"

export type ReviewAttributes = {
   id: CreationOptional<number>
   reviewerId: number
   responseId: number
   relevanceScore: string
   languageScore: string
   spellingScore: string
   totalScore: string
   createdAt: CreationOptional<Date>
   updatedAt: CreationOptional<Date>
}

export type ReviewModel = Model<
   InferAttributes<ReviewAttributes>,
      InferCreationAttributes<ReviewAttributes>
> & ReviewAttributes

export type ReviewCreatePayload = Omit<
   ReviewAttributes,
   "id" | "createdAt" | "updatedAt"
>
