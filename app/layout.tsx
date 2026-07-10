import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://edgaropech.dev"),
  title: {
    default: "Edgar Osvaldo Pech García | Software Engineer",
    template: "%s | Edgar Osvaldo Pech García"
  },
  description: "Full-Stack Engineer and AI Integration Developer specializing in React, Next.js, React Native, Supabase, Elixir, and AWS cloud solutions.",
  keywords: [
    "Edgar Osvaldo Pech Garcia",
    "Edgar Pech",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "React Native Developer",
    "Supabase Developer",
    "Elixir Phoenix Developer",
    "AWS Certified Cloud Practitioner",
    "Mérida",
    "México",
    "Remote Developer",
    "Web Development",
    "LangChain",
    "Generative UI",
    "Clupp",
    "Vemio",
    "Femsa"
  ],
  authors: [{ name: "Edgar Osvaldo Pech García", url: "https://edgaropech.dev" }],
  creator: "Edgar Osvaldo Pech García",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edgaropech.dev",
    title: "Edgar Osvaldo Pech García | Software Engineer",
    description: "Senior Full-Stack Engineer and AI Integration Developer specializing in React, Next.js, React Native, Supabase, Elixir, and AWS cloud solutions.",
    siteName: "Edgar Pech Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 800,
        alt: "Edgar Osvaldo Pech García",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgar Osvaldo Pech García | Software Engineer",
    description: "Senior Full-Stack Engineer and AI Integration Developer specializing in React, Next.js, React Native, Supabase, Elixir, and AWS cloud solutions.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://edgaropech.dev",
  },
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
      <head>
        <StructuredData />
      </head>
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
