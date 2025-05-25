import express, { Router } from "express"
import { userC } from "@/app/controllers/userC"
import { resolveResponse } from "@/app/helpers/response"

const router: Router = express.Router()

router.get("/", async (req, res) => {
   const result = await userC().get(req.query)
   res.json(resolveResponse(result))
})

router.post("/", async (req, res) => {
   try {
      const result = await userC().create(req.body)
      res.status(201).json(resolveResponse(result, "User created successfully"))
   } catch (error) {
      res.status(500).json({
         error: (error as Error).message,
      })
   }
})

export { router as usersRouter }
