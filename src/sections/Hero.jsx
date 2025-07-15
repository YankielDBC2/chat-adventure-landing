import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center text-center p-8" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601758123927-196c1a972e92?auto=format&fit=crop&w=1950&q=80)' }}>
      <div className="bg-black bg-opacity-70 p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Enter the World of Chat Adventure</h1>
        <p className="text-xl mb-6">A text-based journey through myth, magic and choices that shape your destiny.</p>
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition">Start Adventure</button>
      </div>
    </div>
  )
}

export default Hero
