import type { FC } from "react"
import type { UIStyle } from "../../core"
import { Center } from "../../components/center"
import { Image } from "../../components/image"
import { UIProvider } from "../../providers/ui-provider"
import { extendTheme } from "../../utils"

export default {
  title: "Theme / Global Style",
}

export const Basic = () => {
  const globalStyle: UIStyle = {
    /**
     * Define the style you want to customize
     */
  }
  const theme = extendTheme({ styles: { globalStyle } })()

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Image
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        maxW="xl"
        w="full"
      />
    </Center>
  )
}
