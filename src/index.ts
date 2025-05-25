import express from "express"
import { api } from "@/routes"

const app = express()
const port = 3080

app.use("/api", api)

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
