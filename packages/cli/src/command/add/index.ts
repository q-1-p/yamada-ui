import { Command } from "commander"
import { z } from "zod"

const addOptionsSchema = z.object({})

export const add = new Command("add").name("add").action((opts) => {
  const parseResult = addOptionsSchema.safeParse(opts)

  if (!parseResult.success) {
    const { error } = parseResult
    throw new Error(error.message, { cause: error })
  }

  console.log("add")
})
