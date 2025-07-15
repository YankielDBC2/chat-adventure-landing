import React from 'react'

const RacesAndClasses = () => {
  const cards = [
    {
      title: "🧛 Uren",
      description: "Shadow-bound beings with ancestral powers and grim lore.",
    },
    {
      title: "🐉 Draguen",
      description: "Descendants of dragons, born with elemental fury and honor.",
    },
    {
      title: "🧪 Beverage Master",
      description: "A curious class blending drinks, alchemy and explosive chaos.",
    },
    {
      title: "🐻 Dark Druid",
      description: "Masters of soul fragments and cursed nature.",
    }
  ]

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Races & Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RacesAndClasses
