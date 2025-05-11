"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import ChapterNavigation from "@/components/chapter-navigation"

type Photo = {
  id: number
  src: string
  alt: string
  caption: string
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/images/patricia-momento1.jpg",
    alt: "Momento especial 1",
    caption: "Aqui, você segurava o mundo nas mãos: eu.",
  },
  {
    id: 2,
    src: "/images/patricia-momento2.jpg",
    alt: "Momento especial 2",
    caption: "Seu sorriso sempre foi meu porto seguro.",
  },
  {
    id: 3,
    src: "/images/patricia-momento3.jpg",
    alt: "Momento especial 3",
    caption: "Nas pequenas coisas, você me ensinou as maiores lições.",
  },
  {
    id: 4,
    src: "/images/patricia-momento4.jpg",
    alt: "Momento especial 4",
    caption: "Cada abraço seu era um universo inteiro de amor.",
  },
  {
    id: 5,
    src: "/images/patricia-momento5.jpg",
    alt: "Momento especial 5",
    caption: "Você transformou momentos simples em memórias eternas.",
  },
  {
    id: 6,
    src: "/images/patricia-momento6.jpg",
    alt: "Momento especial 6",
    caption: "Sua força sempre foi minha inspiração.",
  },
]

export default function ChapterTwo() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const openPhoto = useCallback((photo: Photo) => {
    setSelectedPhoto(photo)
    document.body.style.overflow = "hidden"
  }, [])

  const closePhoto = useCallback(() => {
    setSelectedPhoto(null)
    document.body.style.overflow = ""
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedPhoto) {
        closePhoto()
      } else if (e.key === "ArrowRight" && selectedPhoto) {
        const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id)
        const nextIndex = (currentIndex + 1) % photos.length
        setSelectedPhoto(photos[nextIndex])
      } else if (e.key === "ArrowLeft" && selectedPhoto) {
        const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id)
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length
        setSelectedPhoto(photos[prevIndex])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedPhoto, closePhoto])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ChapterNavigation currentChapter={2} />

      <div className="flex-1 p-4 sm:p-6 md:p-12">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-center mb-6 md:mb-10"
        >
          Pequenos Grandes Momentos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-8 text-center text-gray-300 font-roboto font-light text-base sm:text-lg"
        >
          <p>
            A vida é feita de momentos. Alguns grandiosos, outros aparentemente simples, mas todos igualmente
            importantes quando compartilhados com você, Patrícia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 * index, ease: "easeOut" }}
              className="gallery-item cursor-pointer"
              onClick={() => openPhoto(photo)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  openPhoto(photo)
                }
              }}
              role="button"
              aria-label={`Ver foto: ${photo.alt}`}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-card">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover grayscale hover:scale-105 transition-transform duration-700 rounded-image"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={closePhoto}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl rounded-card"
              onClick={(e) => e.stopPropagation()}
              style={{ borderRadius: "0.5rem", overflow: "hidden" }}
            >
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-black/70 z-10">
                <h2 id="modal-title" className="text-xl font-montserrat font-semibold text-white">
                  {selectedPhoto.alt}
                </h2>
                <button
                  onClick={closePhoto}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded-button"
                  aria-label="Fechar"
                  style={{ borderRadius: "9999px" }}
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain grayscale"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>

              <div className="p-4 bg-black/70">
                <p className="text-white text-center">{selectedPhoto.caption}</p>
              </div>

              {/* Navigation buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id)
                    const prevIndex = (currentIndex - 1 + photos.length) % photos.length
                    setSelectedPhoto(photos[prevIndex])
                  }}
                  className="p-2 ml-2 rounded-full bg-black/70 hover:bg-black/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded-button"
                  aria-label="Foto anterior"
                  style={{ borderRadius: "9999px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id)
                    const nextIndex = (currentIndex + 1) % photos.length
                    setSelectedPhoto(photos[nextIndex])
                  }}
                  className="p-2 mr-2 rounded-full bg-black/70 hover:bg-black/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded-button"
                  aria-label="Próxima foto"
                  style={{ borderRadius: "9999px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
