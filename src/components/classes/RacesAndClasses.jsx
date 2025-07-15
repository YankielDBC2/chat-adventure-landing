import React, { useState } from 'react'
import { motion } from 'framer-motion'

const races = {
  Uren: {
    description: "Shadow-bound beings, wise and grim. They manipulate soul fragments and thrive in darkness.",
    classes: [
      {
        name: "Siege",
        lore: "Masters of battlefield manipulation and soul-fueled curses."
      },
      {
        name: "Dark Druid",
        lore: "Cursed beings bound to nature’s dark rhythm, channeling soul fragments to summon beasts."
      }
    ]
  },
  Draguen: {
    description: "Descendants of ancient dragons, empowered by flame and faith.",
    classes: [
      {
        name: "Paladin",
        lore: "Holy warriors with draconic resilience and divine fury."
      },
      {
        name: "Witcher",
        lore: "Dragonblood hunters, mixing swordplay and alchemical might."
      }
    ]
  },
  Zolz: {
    description: "Chaotic inventors and wild chemists, feared and misunderstood.",
    classes: [
      {
        name: "Beverage Master",
        lore: "Mixologists turned alchemists, their drinks both heal and explode."
      },
      {
        name: "Chemical Roge",
        lore: "Toxic tricksters wielding unstable flasks with surgical precision."
      }
    ]
  }
}

const RacesAndClasses = () => {
  const [selectedRace, setSelectedRace] = useState(null)

  return (
    <motion.div
      className="bg-black text-white py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Choose Your Race</h2>
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {Object.keys(races).map((race) => (
            <button
              key={race}
              onClick={() => setSelectedRace(race)}
              className={`px-5 py-2 rounded-full font-semibold border-2 transition 
                ${selectedRace === race ? 'bg-red-600 border-red-600' : 'border-gray-500 hover:bg-gray-800'}`}
            >
              {race}
            </button>
          ))}
        </div>

        {selectedRace && (
          <motion.div
            key={selectedRace}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left bg-gray-900 rounded-xl p-6 mx-auto max-w-3xl"
          >
            <h3 className="text-2xl font-bold mb-2">{selectedRace}</h3>
            <p className="mb-6 text-gray-300">{races[selectedRace].description}</p>
            <h4 className="text-xl font-semibold mb-2">Associated Classes:</h4>
            <ul className="space-y-4">
              {races[selectedRace].classes.map((cls) => (
                <li key={cls.name} className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <strong className="text-lg">{cls.name}</strong>
                  <p className="text-sm text-gray-400">{cls.lore}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default RacesAndClasses
