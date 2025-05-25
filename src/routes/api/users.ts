import express, { Router } from "express"
import { userC } from "@/app/controllers/userC"
import { resolveResponse } from "@/app/helpers/response"

const router: Router = express.Router()

router.get("/", async (req, res) => {
   const result = await userC().get(req.query)
   res.json(resolveResponse(result))
})

router.get("/:id", async (req, res) => {
   const result = await userC().find(Number(req.params.id))
   res.json(resolveResponse(result))
})

router.post("/", async (req, res) => {
   try {
      const result = await userC().create(req.body)
      res.status(201).json(resolveResponse(result, "User created successfully"))
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

router.put("/:id", async (req, res) => {
   try {
      const result = await userC().update(Number(req.params.id), req.body)
      res.json(resolveResponse(result, "User updated successfully"))
   } catch (error) {
      res.status(50).json(resolveResponse(null, (error as Error).message))
   }
})

router.delete("/:id", async (req, res) => {
   try {
      await userC().destroy(Number(req.params.id))
      res.json(resolveResponse(null, "User deleted successfully"))
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

export { router as usersRouter }
