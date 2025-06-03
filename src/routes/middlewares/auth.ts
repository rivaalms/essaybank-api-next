import type { Request, Response, NextFunction } from "express"
import { UserToken } from "@/app/models"
import { resolveResponse } from "@/app/helpers/response"

export async function auth(req: Request, res: Response, next: NextFunction) {
   if (req.path === "/login") {
      return next("route")
   }

   if (!req.header("Authorization")) {
      res.status(401).json(resolveResponse(null, "", "Unauthorized"))
      return
   }
   const token = req.header("Authorization")?.split(" ")[1]
   if (!token) {
      res.status(401).json(resolveResponse(null, "", "Unauthorized"))
      return
   }
   const userToken = await UserToken.findOne({ where: { token: token } })
   if (!userToken) {
      res.status(401).json(resolveResponse(null, "", "Unauthorized"))
      return
   }
   if (userToken.getDataValue("expiresAt") < new Date()) {
      res.status(401).json(resolveResponse(null, "", "Unauthorized"))
      return
   }
   next()
}
