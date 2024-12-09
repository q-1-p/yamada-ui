import { Command } from "commander"
import { z } from "zod"

const addOptionsSchema = z.object({})

export const migrate = new Command("migrate").name("migrate").action((opts) => {
  const parseResult = addOptionsSchema.safeParse(opts)

  if (!parseResult.success) {
    const { error } = parseResult
    throw new Error(error.message, { cause: error })
  }

  console.log("migrate")
})
