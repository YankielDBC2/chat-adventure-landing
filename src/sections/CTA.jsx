import React from 'react'

const CTA = () => {
  return (
    <div className="bg-gradient-to-t from-black to-gray-900 text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Begin Your Adventure Now</h2>
      <p className="mb-6 text-gray-300">Summon the bot and step into your destiny.</p>
      <a href="https://t.me/your_bot_username" target="_blank" rel="noreferrer">
        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-bold">
          Play on Telegram
        </button>
      </a>
    </div>
  )
}

export default CTA
