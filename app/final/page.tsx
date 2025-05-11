"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Home } from "lucide-react"

export default function Final() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="max-w-5xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-6 md:mb-8 leading-tight">
                Essa não é apenas uma homenagem. É um pedaço da minha alma, eternizado em você.
              </h1>

              <p className="text-gray-300 mb-8 text-base sm:text-lg font-roboto font-light">
                Obrigado por ser minha mãe, minha amiga, meu exemplo. Que este pequeno gesto possa expressar ao menos
                uma fração do amor que sinto por você, Patrícia.
              </p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 font-montserrat border border-white/30 px-4 py-2 rounded-full hover:bg-white/10"
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
                transition={{ duration: 1 }}
                className="relative"
              >
                <Image
                  src="/images/patricia-final.jpg"
                  alt="Patrícia - foto final"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl w-full h-auto grayscale contrast-125"
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
