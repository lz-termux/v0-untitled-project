"use client"

import { useState } from "react"
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

  const openPhoto = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const closePhoto = () => {
    setSelectedPhoto(null)
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
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover grayscale hover:scale-105 transition-transform duration-700"
                />
                {/* Removed the hover text overlay */}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closePhoto}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full bg-gray-900 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePhoto}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-10"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                width={800}
                height={600}
                className="w-full h-auto object-contain grayscale"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
