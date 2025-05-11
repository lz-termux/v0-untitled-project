"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Head from "next/head"

export default function Home() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading to ensure animations run smoothly
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const startJourney = () => {
    router.push("/chapters/1")
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Uma Homenagem à Patrícia</title>
        <meta name="description" content="Um tributo especial para a mulher extraordinária que me deu a vida" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-6"
      >
        <div className="text-center max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-8 leading-tight"
          >
            Toda história de amor começa com uma mulher extraordinária…
          </motion.h1>

          <motion.button
            onClick={startJourney}
            className="mt-12 px-8 py-3 border-2 border-white rounded-full text-lg font-montserrat font-medium hover:bg-white hover:text-black transition-all duration-500 btn-glow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
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
    </>
  )
}
