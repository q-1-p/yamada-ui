import type { Dict } from "../../utils"
import { useMemo } from "react"
import { useI18n } from "../../providers/i18n-provider"

/**
 * `useLocalized` is a custom hook that returns the localized string.
 *
 * @param messages - The messages object imported from intl/*.json
 * @see Docs https://yamada-ui.com/hooks/use-localized
 */
export const useLocalized = (messages: Dict) => {
  const { locale } = useI18n()

  const formatter = useMemo(() => {
    const translations = messages[locale] || messages["en-US"]

    const getNestedTranslation = (obj: any, path: string): string => {
      const keys = path.split(".")
      let result = obj

      for (const key of keys) {
        if (key in result) {
          result = result[key]
        } else {
          return path
        }
      }

      return result
    }

    return (key: string): string => {
      return getNestedTranslation(translations, key)
    }
  }, [locale, messages])

  return formatter
}
