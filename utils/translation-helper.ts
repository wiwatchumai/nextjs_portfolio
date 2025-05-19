/**
 * Translation Helper Utility
 *
 * This file provides utilities to help with translation management.
 *
 * To add a new language:
 * 1. Create a new JSON file in the translations folder (e.g., translations/pl.json)
 * 2. Copy the content from translations/en.json as a starting point
 * 3. Translate all the values (keep the keys the same)
 * 4. The language will be automatically detected and added to the language switcher
 *
 * Note: If a translation is missing for a specific key, the English version will be used as fallback.
 */

import fs from "fs"
import path from "path"

/**
 * Gets all available translation files in the translations directory
 */
export async function getAvailableTranslations() {
  const translationsDir = path.join(process.cwd(), "translations")

  try {
    const files = await fs.promises.readdir(translationsDir)
    return files.filter((file) => file.endsWith(".json")).map((file) => file.replace(".json", ""))
  } catch (error) {
    console.error("Error reading translations directory:", error)
    return ["en"] // Fallback to English only
  }
}

/**
 * Creates a template for a new language based on English
 */
export async function createTranslationTemplate(langCode: string) {
  const translationsDir = path.join(process.cwd(), "translations")
  const sourcePath = path.join(translationsDir, "en.json")
  const targetPath = path.join(translationsDir, `${langCode}.json`)

  try {
    // Check if file already exists
    try {
      await fs.promises.access(targetPath)
      console.log(`Translation file for ${langCode} already exists.`)
      return false
    } catch {
      // File doesn't exist, continue
    }

    // Copy English file as template
    const content = await fs.promises.readFile(sourcePath, "utf8")
    await fs.promises.writeFile(targetPath, content)
    console.log(`Created translation template for ${langCode}`)
    return true
  } catch (error) {
    console.error(`Error creating translation template for ${langCode}:`, error)
    return false
  }
}

/**
 * Validates a translation file to ensure all keys from English are present
 */
export async function validateTranslation(langCode: string) {
  const translationsDir = path.join(process.cwd(), "translations")
  const englishPath = path.join(translationsDir, "en.json")
  const translationPath = path.join(translationsDir, `${langCode}.json`)

  try {
    const englishContent = await fs.promises.readFile(englishPath, "utf8")
    const translationContent = await fs.promises.readFile(translationPath, "utf8")

    const englishKeys = Object.keys(JSON.parse(englishContent))
    const translationKeys = Object.keys(JSON.parse(translationContent))

    const missingKeys = englishKeys.filter((key) => !translationKeys.includes(key))

    if (missingKeys.length > 0) {
      console.log(`Translation ${langCode} is missing the following keys:`, missingKeys)
      return { valid: false, missingKeys }
    }

    return { valid: true, missingKeys: [] }
  } catch (error) {
    console.error(`Error validating translation for ${langCode}:`, error)
    return { valid: false, error }
  }
}
