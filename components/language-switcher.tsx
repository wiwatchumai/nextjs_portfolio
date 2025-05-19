"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Globe, Check, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function LanguageSwitcher() {
  const { language, setLanguage, availableLanguages } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  // Group languages by region
  const languageGroups = {
    current: availableLanguages.filter((lang) => ["en", "de", "ja"].includes(lang.code)),
    romance: availableLanguages.filter((lang) => ["fr", "es", "it", "pt", "ro"].includes(lang.code)),
    germanic: availableLanguages.filter((lang) => ["nl", "sv", "no", "da", "is"].includes(lang.code)),
    slavic: availableLanguages.filter((lang) =>
      ["ru", "pl", "cs", "sk", "uk", "bg", "hr", "sr", "sl"].includes(lang.code),
    ),
    baltic: availableLanguages.filter((lang) => ["lt", "lv"].includes(lang.code)),
    celtic: availableLanguages.filter((lang) => ["ga", "cy"].includes(lang.code)),
    other: availableLanguages.filter((lang) => ["fi", "hu", "el", "sq", "et"].includes(lang.code)),
  }

  // Filter languages based on search query
  const filteredLanguages = searchQuery
    ? availableLanguages.filter(
        (lang) =>
          lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 max-h-[70vh] overflow-auto">
        <div className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8"
            />
          </div>
        </div>

        {searchQuery ? (
          <>
            <DropdownMenuLabel>Search Results</DropdownMenuLabel>
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))
            ) : (
              <DropdownMenuItem disabled>No languages found</DropdownMenuItem>
            )}
          </>
        ) : (
          <>
            <DropdownMenuLabel>Current</DropdownMenuLabel>
            <DropdownMenuGroup>
              {languageGroups.current.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Romance</DropdownMenuLabel>
            <DropdownMenuGroup>
              {languageGroups.romance.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Germanic</DropdownMenuLabel>
            <DropdownMenuGroup>
              {languageGroups.germanic.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Slavic</DropdownMenuLabel>
            <DropdownMenuGroup>
              {languageGroups.slavic.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Baltic</DropdownMenuLabel>
            <DropdownMenuGroup>
              {languageGroups.baltic.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Celtic</DropdownMenuLabel>
            <DropdownMenuGroup>
              {languageGroups.celtic.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Other European</DropdownMenuLabel>
            <DropdownMenuGroup>
              {languageGroups.other.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="flex justify-between items-center"
                >
                  <span>
                    {lang.nativeName} <span className="text-muted-foreground">({lang.name})</span>
                  </span>
                  {language === lang.code && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
