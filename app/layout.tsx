import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Edgar Osvaldo Pech García | Software Engineer",
  description: "Professional software engineer portfolio showcasing full-stack development, AI integrations, and cloud operations expertise.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
