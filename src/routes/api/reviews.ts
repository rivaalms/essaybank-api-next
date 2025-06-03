import express, { Router } from "express"
import { reviewC } from "@/app/controllers/reviewC"
import { resolveResponse } from "@/app/helpers/response"

const router: Router = express.Router()

router.get("/", async (req, res) => {
   const result = await reviewC().get(req.query)
   res.json(resolveResponse(result))
})

router.get("/:id", async (req, res) => {
   const result = await reviewC().find(Number(req.params.id))
   res.json(resolveResponse(result))
})

router.post("/", async (req, res) => {
   try {
      const result = await reviewC().create(req.body)
      res.status(201).json(
         resolveResponse(result, "Review created successfully")
      )
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

router.put("/:id", async (req, res) => {
   try {
      const result = await reviewC().update(Number(req.params.id), req.body)
      res.json(resolveResponse(result, "Review updated successfully"))
   } catch (error) {
      res.status(50).json(resolveResponse(null, (error as Error).message))
   }
})

router.delete("/:id", async (req, res) => {
   try {
      await reviewC().destroy(Number(req.params.id))
      res.json(resolveResponse(null, "Review deleted successfully"))
   } catch (error) {
      res.status(500).json(resolveResponse(null, (error as Error).message))
   }
})

export { router as reviewsRouter }
