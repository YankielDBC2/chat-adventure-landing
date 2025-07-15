import React from 'react'
import { motion } from 'framer-motion'

const Lore = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">The Forgotten Realms</h2>
        <p className="text-lg leading-8">
          In a world where forgotten gods whisper through ancient ruins, and soul-bound glyphs lie buried beneath scorched sands, 
          heroes rise not by steel—but by choice. Chat Adventure takes you through lands shaped by myth and memory, 
          where every decision echoes through fate.
        </p>
      </div>
    </motion.div>
  )
}

export default Lore
