"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import ChapterNavigation from "@/components/chapter-navigation"

export default function ChapterOne() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ChapterNavigation currentChapter={1} />

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-12 gap-6 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-1/2 max-w-md"
        >
          <Image
            src="/images/patricia-jovem.jpg"
            alt="Patrícia - foto antiga"
            width={400}
            height={600}
            className="rounded-lg shadow-2xl mx-auto grayscale contrast-125 w-full h-auto"
          />
        </motion.div>

        <div className="w-full md:w-1/2 max-w-xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-6"
          >
            O Começo
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="space-y-4 text-gray-300 font-roboto font-light text-base sm:text-lg"
          >
            <p>
              Toda grande história tem um início, e a nossa começou quando você me trouxe ao mundo. Não apenas me deu a
              vida, mas me ensinou a vivê-la com dignidade e amor.
            </p>
            <p>
              Seus olhos, sempre atentos, viram em mim potencial quando nem eu mesmo conseguia enxergar. Suas mãos,
              sempre gentis, me guiaram pelos caminhos mais difíceis.
            </p>
            <p>
              Lembro-me dos primeiros passos, das primeiras palavras, dos primeiros sonhos. Em cada momento, você estava
              lá, aplaudindo minhas conquistas e me amparando nas quedas.
            </p>
            <p>Este é apenas o começo da nossa história, uma jornada de amor que transcende o tempo e o espaço.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
