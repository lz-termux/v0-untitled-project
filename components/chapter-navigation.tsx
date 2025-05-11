"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, ChevronRight } from "lucide-react"

type ChapterNavigationProps = {
  currentChapter?: number
}

const chapters = [
  { id: 1, title: "O Começo", path: "/chapters/1" },
  { id: 2, title: "Pequenos Grandes Momentos", path: "/chapters/2" },
  { id: 3, title: "A Carta", path: "/chapters/3" },
  { id: 4, title: "O que aprendi com você", path: "/chapters/4" },
  { id: 5, title: "Final", path: "/final" },
]

export default function ChapterNavigation({ currentChapter }: ChapterNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Get next chapter path
  const getNextChapterPath = () => {
    if (!currentChapter || currentChapter >= chapters.length) return "/final"
    return chapters[currentChapter].path
  }

  return (
    <>
      <header className="w-full py-4 px-6 flex items-center justify-between bg-black/70 backdrop-blur-md z-50 sticky top-0">
        <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
          <Home className="h-5 w-5" />
        </Link>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Fixed navigation button for next chapter */}
      {currentChapter && currentChapter < chapters.length && (
        <Link
          href={getNextChapterPath()}
          className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 animate-pulse-slow shadow-lg"
          aria-label="Próximo capítulo"
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-45 pt-20 px-6 overflow-y-auto"
          >
            <nav className="max-w-md mx-auto">
              <ul className="space-y-4">
                {chapters.map((chapter) => (
                  <motion.li
                    key={chapter.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: chapter.id * 0.1 }}
                  >
                    <Link
                      href={chapter.path}
                      className={`block py-3 px-4 rounded-lg transition-colors duration-300 ${
                        currentChapter === chapter.id
                          ? "bg-white text-black font-medium"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-montserrat font-semibold">Capítulo {chapter.id}:</span> {chapter.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
