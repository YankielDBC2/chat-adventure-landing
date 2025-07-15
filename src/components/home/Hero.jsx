import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <video
        className="absolute w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-dragon-rising-1780/1080p.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 p-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Enter the World of Chat Adventure</h1>
        <p className="text-xl mb-6">A text-based journey through myth, magic, and choices that shape your destiny.</p>
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition">
          Start Adventure
        </button>
      </div>
    </motion.div>
  )
}

export default Hero
