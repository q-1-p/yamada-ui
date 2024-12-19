import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "./box"

type Story = StoryFn<typeof Box>

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components / Box",
}

export default meta

export const Basic: Story = () => {
  return (
    <Box bg="primary" color="white" p="md" rounded="md">
      Box
    </Box>
  )
}
