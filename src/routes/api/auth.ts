import express, { Router } from "express"
import { UserToken, User } from "@/app/models"
import { resolveResponse } from "@/app/helpers/response"
import { crypt } from "@/app/helpers/crypt"

const router: Router = express.Router()

router.post("/login", async (req, res) => {
   const { email, password } = req.body

   const user = await User.unscoped().findOne({ where: { email: email } })
   if (!user) {
      res.status(401).json(resolveResponse(null, "", "Your credentials does not match our records"))
      return
   }

   if (await crypt().compare(password, user.getDataValue("password"))) {
      const token = await crypt().generateToken()
      const result = await UserToken.create({
         userId: user.getDataValue("id"),
         token,
         expiresAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
      }, { include: User })
      // @ts-ignore
      delete user.dataValues.password
      // @ts-ignore
      delete user.password
      res.json(resolveResponse({
         user: user,
         token: result.getDataValue("token")
      }, "Login successful"))
   } else {
      res.status(401).json(resolveResponse(null, "", "Your credentials does not match our records"))
   }
})

export { router as authRouter }