import { User } from "./user"
import { Question } from "./question"
import { Response } from "./response"
import { Review } from "./review"

// SECTION: Relationships
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
// !SECTION

export { User, Question, Response, Review }