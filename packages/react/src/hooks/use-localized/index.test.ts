import { renderHook } from "../../../test"
import { useLocalized } from "./"

describe("useLocalized", () => {
  const MESSAGES = {
    "en-US": {
      multiautocomplete: {
        clearButton: "Clear input",
      },
    },
  }
  test("return translation for the current locale", () => {
    const { result } = renderHook(() => useLocalized(MESSAGES))

    expect(result.current("multiautocomplete.clearButton")).toBe("Clear input")
  })
})
