import express, { Router } from "express"
import { usersRouter } from "./api/users"

const router: Router = express.Router({ mergeParams: true })

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use((req, res, next) => {
   req.header("Accept") === "application/json" || res.status(406).json({
      error: "Not Acceptable",
   })
   next()
})

router.use("/users", usersRouter)

export { router as api }
