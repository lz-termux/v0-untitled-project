"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, X } from "lucide-react"

type StarValue = {
  id: number
  name: string
  description: string
  position: { x: number; y: number }
}

const starValues: StarValue[] = [
  {
    id: 1,
    name: "Amor",
    description: "O amor incondicional que Patrícia me ensinou a amar sem esperar nada em troca.",
    position: { x: 25, y: 20 },
  },
  {
    id: 2,
    name: "Sabedoria",
    description: "A sabedoria de encontrar soluções mesmo nos momentos mais difíceis.",
    position: { x: 65, y: 30 },
  },
  {
    id: 3,
    name: "Coragem",
    description: "A coragem de enfrentar qualquer desafio para proteger aqueles que ama.",
    position: { x: 40, y: 60 },
  },
  {
    id: 4,
    name: "Paciência",
    description: "A paciência para ensinar e esperar o tempo certo de cada coisa.",
    position: { x: 75, y: 70 },
  },
  {
    id: 5,
    name: "Generosidade",
    description: "A generosidade de dar sem esperar reconhecimento.",
    position: { x: 15, y: 80 },
  },
]

export default function StarGuide() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStar, setSelectedStar] = useState<StarValue | null>(null)

  const toggleStarGuide = () => {
    setIsOpen(!isOpen)
    setSelectedStar(null)
  }

  const handleStarClick = (star: StarValue) => {
    setSelectedStar(star)
  }

  return (
    <>
      <motion.button
        onClick={toggleStarGuide}
        className="fixed bottom-20 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-500 z-40"
        whileHover={{ scale: 1.1, rotate: 20 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Estrela Guia"
      >
        <Star className="text-white" size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <motion.button
              onClick={toggleStarGuide}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Fechar Estrela Guia"
            >
              <X className="text-white" size={20} />
            </motion.button>

            <div className="relative w-full h-full">
              {/* Stars */}
              {starValues.map((star) => (
                <motion.div
                  key={star.id}
                  className="absolute"
                  style={{
                    left: `${star.position.x}%`,
                    top: `${star.position.y}%`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: star.id * 0.2, duration: 0.8, ease: "easeOut" }}
                >
                  <motion.button
                    onClick={() => handleStarClick(star)}
                    className={`w-4 h-4 md:w-6 md:h-6 bg-white rounded-full relative ${
                      selectedStar?.id === star.id ? "ring-4 ring-white/30" : ""
                    }`}
                    whileHover={{ scale: 1.5, boxShadow: "0 0 20px 8px rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                  />

                  {/* Star name */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: star.id * 0.2 + 0.3, duration: 0.8 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs md:text-sm text-white font-montserrat font-medium whitespace-nowrap"
                  >
                    {star.name}
                  </motion.div>
                </motion.div>
              ))}

              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="25%"
                  y1="20%"
                  x2="65%"
                  y2="30%"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                />
                <motion.line
                  x1="65%"
                  y1="30%"
                  x2="40%"
                  y2="60%"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 1.5 }}
                />
                <motion.line
                  x1="40%"
                  y1="60%"
                  x2="75%"
                  y2="70%"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 1.5 }}
                />
                <motion.line
                  x1="75%"
                  y1="70%"
                  x2="15%"
                  y2="80%"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1, duration: 1.5 }}
                />
                <motion.line
                  x1="15%"
                  y1="80%"
                  x2="25%"
                  y2="20%"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.3, duration: 1.5 }}
                />
              </svg>

              {/* Selected star description */}
              <AnimatePresence>
                {selectedStar && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-6 rounded-lg max-w-md text-center"
                  >
                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold mb-2">{selectedStar.name}</h3>
                    <p className="text-sm md:text-base font-roboto font-light">{selectedStar.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
