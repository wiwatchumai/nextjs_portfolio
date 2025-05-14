import type React from "react"
import "@/app/globals.css"
import { JetBrains_Mono, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Navbar from "@/components/navbar"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Student Engineering Portfolio",
  description: "Engineering student portfolio showcasing academic projects and technical skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
