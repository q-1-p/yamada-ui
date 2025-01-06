import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { FrownIcon, SmileIcon } from "../icon"
import { VStack } from "../stack"
import { Text } from "../text"
import { PasswordInput, PasswordInputStrengthMeter } from "./"

type Story = StoryFn<typeof PasswordInput>

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: "Components / PasswordInput",
}

export default meta

export const Basic: Story = () => {
  return <PasswordInput placeholder="your password" />
}

export const WithSize: Story = () => {
  return (
    <>
      <PasswordInput size="xs" placeholder="extra small size" />
      <PasswordInput size="sm" placeholder="small size" />
      <PasswordInput size="md" placeholder="medium size" />
      <PasswordInput size="lg" placeholder="large size" />
    </>
  )
}

export const WithVariants: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" placeholder="outline" />
      <PasswordInput variant="filled" placeholder="filled" />
      <PasswordInput variant="flushed" placeholder="flushed" />
      <PasswordInput variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithDefaultVisible: Story = () => {
  return (
    <PasswordInput
      defaultValue="password"
      defaultVisible
      placeholder="your password"
    />
  )
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <PasswordInput placeholder="default border color" />
      <PasswordInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <PasswordInput
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const WithStrengthMeter: Story = () => {
  const [value, setValue] = useState("Password")

  const getStrength = (password: string): number => {
    let strength = 0

    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++

    return strength
  }

  return (
    <>
      <PasswordInput
        placeholder="your password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <PasswordInputStrengthMeter value={getStrength(value)} />
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" disabled placeholder="outline" />
      <PasswordInput variant="filled" disabled placeholder="filled" />
      <PasswordInput variant="flushed" disabled placeholder="flushed" />
      <PasswordInput variant="unstyled" disabled placeholder="unstyled" />

      <FormControl
        disabled
        helperMessage="We'll never share your password."
        label="Password"
      >
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" placeholder="outline" readOnly />
      <PasswordInput variant="filled" placeholder="filled" readOnly />
      <PasswordInput variant="flushed" placeholder="flushed" readOnly />
      <PasswordInput variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl
        helperMessage="We'll never share your password."
        label="Password"
        readOnly
      >
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" invalid placeholder="outline" />
      <PasswordInput variant="filled" invalid placeholder="filled" />
      <PasswordInput variant="flushed" invalid placeholder="flushed" />
      <PasswordInput variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="Email is required." invalid label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>
  )
}

export const CustomIcon: Story = () => {
  return (
    <PasswordInput
      placeholder="your password"
      visibilityIcon={{ off: <SmileIcon />, on: <FrownIcon /> }}
    />
  )
}

export const CustomControl: Story = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput
        placeholder="your password"
        visible={visible}
        onVisibleChange={setVisible}
      />
    </>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.password?.message}
        invalid={!!errors.password}
        label="Password"
      >
        <PasswordInput
          {...register("password", {
            required: { message: "Password is required.", value: true },
          })}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>
  )
}

export const ReactHookFormWithDefaultValue: Story = () => {
  interface Data {
    password: string
  }

  const defaultValues: Data = {
    password: "password",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.password?.message}
        invalid={!!errors.password}
        label="Password"
      >
        <PasswordInput
          {...register("password", {
            required: { message: "Password is required.", value: true },
          })}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>
  )
}
