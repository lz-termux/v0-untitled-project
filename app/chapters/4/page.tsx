"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Sun, HandIcon as Hands, Brain, Smile } from "lucide-react"
import ChapterNavigation from "@/components/chapter-navigation"

type LessonCard = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  imageSrc: string
}

const lessons: LessonCard[] = [
  {
    id: 1,
    title: "A ser forte mesmo quando fraco",
    description: "Você me ensinou que a verdadeira força não está em nunca cair, mas em sempre levantar.",
    icon: <Heart className="h-8 w-8" />,
    imageSrc: "/images/patricia-licao1.jpg",
  },
  {
    id: 2,
    title: "A amar sem pedir nada em troca",
    description: "Com seu exemplo, aprendi que o amor verdadeiro é aquele que se doa sem esperar recompensa.",
    icon: <Hands className="h-8 w-8" />,
    imageSrc: "/images/patricia-licao2.jpg",
  },
  {
    id: 3,
    title: "A encontrar luz na escuridão",
    description: "Mesmo nos momentos mais difíceis, você me mostrou como encontrar esperança e beleza.",
    icon: <Sun className="h-8 w-8" />,
    imageSrc: "/images/patricia-licao3.jpg",
  },
  {
    id: 4,
    title: "A ter sabedoria nas escolhas",
    description: "Suas palavras e conselhos me guiaram a tomar decisões que moldaram quem sou hoje.",
    icon: <Brain className="h-8 w-8" />,
    imageSrc: "/images/patricia-licao4.jpg",
  },
  {
    id: 5,
    title: "A sorrir mesmo nas dificuldades",
    description: "Seu otimismo me ensinou que um sorriso pode transformar até os dias mais cinzentos.",
    icon: <Smile className="h-8 w-8" />,
    imageSrc: "/images/patricia-licao5.jpg",
  },
]

export default function ChapterFour() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
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
      <ChapterNavigation currentChapter={4} />

      <div className="flex-1 p-4 sm:p-6 md:p-12">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-center mb-6 md:mb-10"
        >
          O que aprendi com você
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-8 md:mb-12 text-center text-gray-300 font-roboto font-light text-base sm:text-lg"
        >
          <p>
            Cada lição que você me ensinou, Patrícia, se tornou parte de quem eu sou. Seu legado vive em cada decisão
            que tomo, em cada valor que carrego.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 * index, ease: "easeOut" }}
              className={`bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-500 border border-white/10 shadow-lg ${
                hoveredCard === lesson.id ? "bg-white/15 scale-[1.02] shadow-xl" : ""
              }`}
              onMouseEnter={() => setHoveredCard(lesson.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onFocus={() => setHoveredCard(lesson.id)}
              onBlur={() => setHoveredCard(null)}
              tabIndex={0}
              role="article"
              aria-labelledby={`lesson-title-${lesson.id}`}
            >
              <div className="relative h-48">
                <Image
                  src={lesson.imageSrc || "/placeholder.svg"}
                  alt={`Lição: ${lesson.title}`}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                <motion.div
                  className="absolute bottom-4 right-4 text-white bg-black/70 p-2 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    scale: hoveredCard === lesson.id ? 1.1 : 1,
                    rotate: hoveredCard === lesson.id ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {lesson.icon}
                </motion.div>
              </div>

              <div className="p-5">
                <h3 id={`lesson-title-${lesson.id}`} className="text-lg sm:text-xl font-montserrat font-semibold mb-3">
                  {lesson.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base font-roboto font-light">{lesson.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
