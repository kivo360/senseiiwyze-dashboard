"use client"

import { useEffect } from "react"
import { useDebouncedSettingsStore } from "@/stores/debounced-settings-store"

export function useDebouncedTheme() {
  const { theme, pendingChanges, updateTheme } = useDebouncedSettingsStore()

  // Get the current theme (either saved or pending)
  const currentTheme = pendingChanges.theme ?? theme

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (currentTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      
      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        root.classList.remove("light", "dark")
        root.classList.add(e.matches ? "dark" : "light")
      }
      
      mediaQuery.addEventListener("change", handleSystemThemeChange)
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange)
    } else {
      root.classList.add(currentTheme)
    }
  }, [currentTheme])

  return {
    theme: currentTheme,
    setTheme: updateTheme,
  }
}
