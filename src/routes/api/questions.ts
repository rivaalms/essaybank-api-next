import express, { Router } from "express"
import { questionC } from "@/app/controllers/questionC"
import { resolveResponse } from "@/app/helpers/response"

const router: Router = express.Router()

router.get("/", async (req, res) => {
   const result = await questionC().get(req.query)
   res.json(resolveResponse(result))
})

router.get("/:id", async (req, res) => {
   const result = await questionC().find(Number(req.params.id))
   res.json(resolveResponse(result))
})

router.post("/", async (req, res) => {
   try {
      const result = await questionC().create(req.body)
      res.status(201).json(
         resolveResponse(result, "Question created successfully")
      )
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

router.put("/:id", async (req, res) => {
   try {
      const result = await questionC().update(Number(req.params.id), req.body)
      res.json(resolveResponse(result, "Question updated successfully"))
   } catch (error) {
      res.status(50).json(resolveResponse(null, (error as Error).message))
   }
})

router.delete("/:id", async (req, res) => {
   try {
      await questionC().destroy(Number(req.params.id))
      res.json(resolveResponse(null, "Question deleted successfully"))
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

export { router as questionsRouter }
