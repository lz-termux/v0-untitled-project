"use client"

import { useState, useEffect } from "react"
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
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    // Show button after a delay
    const timer = setTimeout(() => {
      setIsButtonVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const toggleStarGuide = () => {
    setIsOpen(!isOpen)
    setSelectedStar(null)
  }

  const handleStarClick = (star: StarValue) => {
    setSelectedStar(star)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggleStarGuide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <>
      <AnimatePresence>
        {isButtonVisible && (
          <motion.button
            onClick={toggleStarGuide}
            className="fixed bottom-20 right-6 p-3 rounded-full bg-black hover:bg-gray-900 transition-all duration-500 z-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-md rounded-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            aria-label="Abrir Estrela Guia"
            aria-expanded={isOpen}
            aria-controls="star-guide-modal"
            style={{ borderRadius: "9999px" }}
          >
            <Star className="text-white" size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="star-guide-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="star-guide-title"
          >
            <motion.button
              onClick={toggleStarGuide}
              className="absolute top-6 right-6 p-3 rounded-full bg-black hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white shadow-md rounded-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Fechar Estrela Guia"
              style={{ borderRadius: "9999px" }}
            >
              <X className="text-white" size={20} />
            </motion.button>

            <div className="relative w-full h-full">
              <h2 id="star-guide-title" className="sr-only">
                Estrela Guia - Valores de Patrícia
              </h2>

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
                    } rounded-button`}
                    whileHover={{ scale: 1.5, boxShadow: "0 0 20px 8px rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Valor: ${star.name}`}
                    aria-pressed={selectedStar?.id === star.id}
                    aria-describedby={`star-description-${star.id}`}
                    tabIndex={0}
                    style={{ borderRadius: "9999px" }}
                  />

                  {/* Star name */}
                  <motion.div
                    id={`star-description-${star.id}`}
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
              <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
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
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 p-6 rounded-lg max-w-md text-center shadow-lg rounded-card"
                    style={{ borderRadius: "0.5rem" }}
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
