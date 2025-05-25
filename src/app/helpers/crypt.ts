import bcrypt from "bcrypt"

export function crypt() {
   async function hash(password: string) {
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(password, salt)
      return hash
   }

   async function compare(password: string, hash: string) {
      return await bcrypt.compare(password, hash)
   }

   return {
      hash,
      compare
   }
}
