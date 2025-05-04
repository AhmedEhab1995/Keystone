"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Language } from "@/lib/translations"

type Direction = "ltr" | "rtl"

interface LanguageContextType {
  language: Language
  direction: Direction
  toggleLanguage: () => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  direction: "ltr",
  toggleLanguage: () => {},
  t: translations.en,
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] = useState<Language>("en")
  const [direction, setDirection] = useState<Direction>("ltr")
  const [t, setT] = useState(translations.en)

  // Initialize language from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage)
      setDirection(savedLanguage === "ar" ? "rtl" : "ltr")
      setT(translations[savedLanguage])
    }
  }, [])

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = direction
    document.documentElement.lang = language
  }, [direction, language])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en"
    const newDirection = newLanguage === "en" ? "ltr" : "rtl"

    setLanguage(newLanguage)
    setDirection(newDirection)
    setT(translations[newLanguage])
    localStorage.setItem("language", newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

