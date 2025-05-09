import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Bias in Healthcare Initiative",
  description: "Exposing and addressing algorithmic bias in healthcare AI systems",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
