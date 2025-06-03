import bcrypt from "bcrypt"
import crypto from "crypto"

export function crypt() {
   async function hash(password: string) {
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(password, salt)
      return hash
   }

   async function compare(password: string, hash: string) {
      return await bcrypt.compare(password, hash)
   }

   async function generateToken(bytes: number = 32) {
      return crypto.randomBytes(bytes).toString('hex')
   }

   return {
      hash,
      compare,
      generateToken
   }
}
