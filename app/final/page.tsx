"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"

export default function Final() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading to ensure animations run smoothly
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-6 md:mb-8 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Essa não é apenas uma homenagem. É um pedaço da minha alma, eternizado em você.
              </motion.h1>

              <motion.p
                className="text-gray-300 mb-8 text-base sm:text-lg font-roboto font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                Obrigado por ser minha mãe, minha amiga, meu exemplo. Que este pequeno gesto possa expressar ao menos
                uma fração do amor que sinto por você, Patrícia.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 font-montserrat border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-button"
                  aria-label="Voltar ao início"
                  style={{ borderRadius: "9999px" }}
                >
                  <Home className="h-4 w-4" />
                  <span>Voltar ao início</span>
                </Link>
              </motion.div>
            </div>

            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative rounded-card"
                style={{ borderRadius: "0.5rem", overflow: "hidden" }}
              >
                <Image
                  src="/images/patricia-final.jpg"
                  alt="Patrícia - foto final"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl w-full h-auto grayscale contrast-125 rounded-image"
                  style={{ borderRadius: "0.5rem" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
