"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Home() {
  const router = useRouter()

  const startJourney = () => {
    router.push("/chapters/1")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-6"
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-8 leading-tight animate-fadeIn">
          Toda história de amor começa com uma mulher extraordinária…
        </h1>

        <motion.button
          onClick={startJourney}
          className="mt-12 px-8 py-3 border-2 border-white rounded-full text-lg font-montserrat font-medium hover:bg-white hover:text-black transition-all duration-500 btn-glow"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Começar a jornada
        </motion.button>
      </div>
    </motion.div>
  )
}
