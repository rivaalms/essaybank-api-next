import express, { Router } from "express"
import { responseC } from "@/app/controllers/responseC"
import { resolveResponse } from "@/app/helpers/response"

const router: Router = express.Router()

router.get("/", async (req, res) => {
   const result = await responseC().get(req.query)
   res.json(resolveResponse(result))
})

router.get("/:id", async (req, res) => {
   const result = await responseC().find(Number(req.params.id))
   res.json(resolveResponse(result))
})

router.post("/", async (req, res) => {
   try {
      const result = await responseC().create(req.body)
      res.status(201).json(
         resolveResponse(result, "Response created successfully")
      )
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

router.put("/:id", async (req, res) => {
   try {
      const result = await responseC().update(Number(req.params.id), req.body)
      res.json(resolveResponse(result, "Response updated successfully"))
   } catch (error) {
      res.status(50).json(resolveResponse(null, (error as Error).message))
   }
})

router.delete("/:id", async (req, res) => {
   try {
      await responseC().destroy(Number(req.params.id))
      res.json(resolveResponse(null, "Response deleted successfully"))
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

export { router as responsesRouter }
