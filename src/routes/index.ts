import express, { Router } from "express"
import { usersRouter } from "./api/users"
import { questionsRouter } from "./api/questions"
import { responsesRouter } from "./api/responses"
import { reviewsRouter } from "./api/reviews"
import { resolveResponse } from "@/app/helpers/response"

const router: Router = express.Router({ mergeParams: true })

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use((req, res, next) => {
   req.header("Accept") === "application/json" ||
      res.status(406).json(resolveResponse(null, "", "Not acceptable"))
   next()
})

router.use("/users", usersRouter)
router.use("/questions", questionsRouter)
router.use("/responses", responsesRouter)
router.use("/reviews", reviewsRouter)

export { router as api }
