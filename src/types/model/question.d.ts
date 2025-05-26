import {
   Model,
   CreationOptional,
   type InferAttributes,
   type InferCreationAttributes,
} from "sequelize"

export type QuestionAttributes = {
   id: CreationOptional<number>
   questionText: string
   referenceAnswer: string
   createdAt: CreationOptional<Date>
   updatedAt: CreationOptional<Date>
}

export type QuestionModel = Model<
   InferAttributes<QuestionAttributes>,
   InferCreationAttributes<QuestionAttributes>
> &
   QuestionAttributes

export type QuestionCreatePayload = Omit<
   QuestionAttributes,
   "id" | "createdAt" | "updatedAt"
>
