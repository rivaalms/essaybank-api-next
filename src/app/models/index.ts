import { User } from "./user"
import { Question } from "./questions"
import { Response } from "./responses"
import { Review } from "./reviews"

User.hasMany(Review, {
   foreignKey: "reviewrId",
})

Response.belongsTo(Question, {
   foreignKey: "questionId"
})

Response.hasMany(Review, {
   foreignKey: "responseId"
})

Question.hasMany(Response, {
   foreignKey: "questionId"
})

Review.belongsTo(User, {
   foreignKey: "reviewerId"
})
Review.belongsTo(Response, {
   foreignKey: "responseId"
})

export { User, Question, Response, Review }