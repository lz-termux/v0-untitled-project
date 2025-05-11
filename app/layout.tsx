import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client"

export const metadata: Metadata = {
  title: "Uma Homenagem à Patrícia",
  description: "Um tributo especial para a mulher extraordinária que me deu a vida",
  keywords: ["tributo", "homenagem", "mãe", "Patrícia", "amor"],
  authors: [{ name: "Luís Eduardo" }],
  openGraph: {
    title: "Uma Homenagem à Patrícia",
    description: "Um tributo especial para a mulher extraordinária que me deu a vida",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'