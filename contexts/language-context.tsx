"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Expanded language type to include all European languages
type Language =
  // Current languages
  | "en"
  | "ja"
  | "de"
  // Romance languages
  | "fr"
  | "es"
  | "it"
  | "pt"
  | "ro"
  // Germanic languages
  | "nl"
  | "sv"
  | "no"
  | "da"
  | "is"
  // Slavic languages
  | "ru"
  | "pl"
  | "cs"
  | "sk"
  | "uk"
  | "bg"
  | "hr"
  | "sr"
  | "sl"
  // Baltic languages
  | "lt"
  | "lv"
  // Celtic languages
  | "ga"
  | "cy"
  // Other European languages
  | "fi"
  | "hu"
  | "el"
  | "sq"
  | "et"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  availableLanguages: Array<{ code: Language; name: string; nativeName: string }>
}

// Define available languages with their native names
const availableLanguages = [
  // Current languages
  { code: "en", name: "English", nativeName: "English" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  // Romance languages
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "ro", name: "Romanian", nativeName: "Română" },
  // Germanic languages
  { code: "nl", name: "Dutch", nativeName: "Nederlands" },
  { code: "sv", name: "Swedish", nativeName: "Svenska" },
  { code: "no", name: "Norwegian", nativeName: "Norsk" },
  { code: "da", name: "Danish", nativeName: "Dansk" },
  { code: "is", name: "Icelandic", nativeName: "Íslenska" },
  // Slavic languages
  { code: "ru", name: "Russian", nativeName: "Русский" },
  { code: "pl", name: "Polish", nativeName: "Polski" },
  { code: "cs", name: "Czech", nativeName: "Čeština" },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська" },
  { code: "bg", name: "Bulgarian", nativeName: "Български" },
  { code: "hr", name: "Croatian", nativeName: "Hrvatski" },
  { code: "sr", name: "Serbian", nativeName: "Српски" },
  { code: "sl", name: "Slovenian", nativeName: "Slovenščina" },
  // Baltic languages
  { code: "lt", name: "Lithuanian", nativeName: "Lietuvių" },
  { code: "lv", name: "Latvian", nativeName: "Latviešu" },
  // Celtic languages
  { code: "ga", name: "Irish", nativeName: "Gaeilge" },
  { code: "cy", name: "Welsh", nativeName: "Cymraeg" },
  // Other European languages
  { code: "fi", name: "Finnish", nativeName: "Suomi" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά" },
  { code: "sq", name: "Albanian", nativeName: "Shqip" },
  { code: "et", name: "Estonian", nativeName: "Eesti" },
]

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Load translations
    const loadTranslations = async () => {
      try {
        // Start with the three existing translations
        const initialTranslations: Record<string, Record<string, string>> = {
          en: await import("@/translations/en.json").then((module) => module.default),
          de: await import("@/translations/de.json").then((module) => module.default),
          ja: await import("@/translations/ja.json").then((module) => module.default),
        }

        // Dynamically load other European language translations if they exist
        // This uses a try-catch to gracefully handle missing translation files
        for (const lang of availableLanguages) {
          if (!initialTranslations[lang.code]) {
            try {
              initialTranslations[lang.code] = await import(`@/translations/${lang.code}.json`)
                .then((module) => module.default)
                .catch(() => initialTranslations.en) // Fallback to English if translation file doesn't exist
            } catch (error) {
              console.log(`Translation for ${lang.code} not available, using English as fallback`)
              initialTranslations[lang.code] = initialTranslations.en
            }
          }
        }

        setTranslations(initialTranslations)
      } catch (error) {
        console.error("Failed to load translations:", error)
      }
    }

    loadTranslations()

    // Only run client-side code in the browser
    if (typeof window !== "undefined") {
      // Check if there's a saved language preference
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && availableLanguages.some((lang) => lang.code === savedLanguage)) {
        setLanguage(savedLanguage)
      } else {
        // Try to detect browser language
        const browserLanguage = navigator.language.split("-")[0] as Language
        if (availableLanguages.some((lang) => lang.code === browserLanguage)) {
          setLanguage(browserLanguage)
        }
      }
    }
  }, [])

  // Save language preference when it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("language", language)
      // Update document language for accessibility
      document.documentElement.lang = language

      // Set text direction for RTL languages (Arabic, Hebrew, etc.)
      const rtlLanguages = ["ar", "he", "fa", "ur"]
      document.documentElement.dir = rtlLanguages.includes(language) ? "rtl" : "ltr"
    }
  }, [language, isClient])

  // Translation function
  const t = (key: string): string => {
    if (!translations[language]) return key
    return translations[language][key] || translations.en?.[key] || key
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
