"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Get next chapter path
  const getNextChapterPath = () => {
    if (!currentChapter || currentChapter >= chapters.length) return "/final"
    return chapters[currentChapter].path
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <>
      <header
        className={`w-full py-4 px-6 flex items-center justify-between bg-black/90 z-50 sticky top-0 transition-all duration-300 shadow-md`}
        onKeyDown={handleKeyDown}
      >
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Voltar para a página inicial"
        >
          <Home className="h-5 w-5" />
        </Link>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="chapter-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Fixed navigation button for next chapter */}
      {currentChapter && currentChapter < chapters.length && (
        <Link
          href={getNextChapterPath()}
          className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 bg-black/90 hover:bg-black shadow-lg rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label={`Ir para o próximo capítulo: ${chapters[currentChapter].title}`}
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chapter-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-45 pt-20 px-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação de capítulos"
          >
            <nav className="max-w-md mx-auto">
              <ul className="space-y-4" role="menu">
                {chapters.map((chapter) => (
                  <motion.li
                    key={chapter.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: chapter.id * 0.1 }}
                    role="menuitem"
                  >
                    <Link
                      href={chapter.path}
                      className={`block py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                        currentChapter === chapter.id
                          ? "bg-white text-black font-medium"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsOpen(false)}
                      aria-current={currentChapter === chapter.id ? "page" : undefined}
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
