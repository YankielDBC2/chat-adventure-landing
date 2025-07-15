import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <motion.div
      className="bg-gradient-to-t from-black to-gray-900 text-white py-20 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">Begin Your Adventure Now</h2>
      <p className="mb-6 text-gray-300">Summon the bot and step into your destiny.</p>
      <a href="https://t.me/your_bot_username" target="_blank" rel="noreferrer">
        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-bold">
          Play on Telegram
        </button>
      </a>
    </motion.div>
  )
}

export default CTA
