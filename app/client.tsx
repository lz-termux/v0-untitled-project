"use client"

import type React from "react"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"
import StarGuide from "@/components/star-guide"
import ErrorBoundary from "@/components/error-boundary"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500"],
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.variable} ${roboto.variable} font-roboto antialiased bg-black`}>
        <ErrorBoundary
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 text-center">
              <div>
                <h2 className="text-xl font-montserrat font-bold mb-2">Algo deu errado</h2>
                <p className="mb-4">Por favor, recarregue a página para continuar.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                >
                  Recarregar
                </button>
              </div>
            </div>
          }
        >
          {children}
          <StarGuide />
        </ErrorBoundary>
      </body>
    </html>
  )
}
