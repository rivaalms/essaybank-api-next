import { User } from "./user"
import { Question } from "./question"
import { Response } from "./response"
import { Review } from "./review"
import { UserToken } from "./user-token"

// SECTION: Relationships
User.hasMany(Review, {
   foreignKey: "reviewerId",
})

User.hasOne(UserToken, {
   foreignKey: "userId"
})

UserToken.belongsTo(User, {
   foreignKey: "userId"
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

export { User, Question, Response, Review, UserToken }