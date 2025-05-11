"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import ChapterNavigation from "@/components/chapter-navigation"
import OptimizedImage from "@/components/optimized-image"

export default function ChapterThree() {
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
      <ChapterNavigation currentChapter={3} />

      <div className="flex-1 p-4 sm:p-6 md:p-12">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-center mb-6"
        >
          A Carta
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          {/* Imagem à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <OptimizedImage
                src="/images/patricia-carta.jpg"
                alt="Patrícia - momento especial"
                width={500}
                height={700}
                className="rounded-lg shadow-2xl w-full h-auto grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          {/* Carta à direita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="bg-gray-900/50 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm"
          >
            <div className="font-roboto font-light space-y-4 text-gray-200">
              <div className="h-[400px] sm:h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                <h3 className="text-xl font-montserrat font-semibold mb-4">Mãe,</h3>

                <p className="mb-4">
                  Hoje é o seu dia, e mesmo que a gente tenha se desentendido algumas vezes, eu não poderia deixar de te
                  escrever essas palavras.
                </p>

                <p className="mb-4">
                  A verdade é que, por mais que eu reclame, por mais que a gente brigue, eu te amo. E muito. Às vezes o
                  orgulho, o estresse ou a correria do dia a dia falam mais alto, mas no fundo do meu coração, eu sei o
                  quanto você é importante pra mim.
                </p>

                <p className="mb-4">
                  Você foi mãe e pai. Me criou sozinha, me deu tudo o que pôde — e mesmo quando parecia pouco, pra mim
                  nunca faltou nada. Hoje eu reconheço que muitas vezes fui ingrato, que reclamei sem motivo e que não
                  valorizei tudo que você fez por mim.
                </p>

                <p className="mb-4">
                  Você sempre me guiou com fé, com seus princípios, com seu jeito firme mas cheio de amor. E mesmo
                  quando parece que estamos em lados opostos, eu sei que é amor demais que nos conecta.
                </p>

                <p className="mb-4">
                  Obrigado por nunca desistir de mim. Por me corrigir, por me amar mesmo quando eu não merecia. Eu sou
                  quem sou por sua causa. E mesmo que eu não diga tanto quanto deveria, eu te amo. Com tudo que sou.
                </p>

                <p className="mb-4">Feliz Dia das Mães.</p>

                <motion.p
                  className="text-right mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  Com amor,
                  <br />
                  <span className="font-montserrat font-medium">Luís Eduardo</span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
