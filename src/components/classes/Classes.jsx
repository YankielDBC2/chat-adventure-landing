import React, { useState } from "react";
import { motion } from "framer-motion";

const classes = [
  {
    name: "Siege",
    lore: "Masters of fortified warfare and defense, the Siege class holds the line while crushing enemies with heavy impact.",
    image: "/images/siege.png"
  },
  {
    name: "Dark Druid",
    lore: "Mystics of decay and rebirth, Dark Druids bend the power of the underworld to summon beasts and curses.",
    image: "/images/dark_druid.png"
  },
  {
    name: "Chemical Roge",
    lore: "Alchemists of chaos, these rogues wield unstable potions and explosive tricks to confound enemies.",
    image: "/images/chemical_roge.png"
  },
  {
    name: "Beverage Master",
    lore: "Brewers of magical drinks that grant buffs, debuffs, or unexpected effects on the battlefield.",
    image: "/images/beverage_master.png"
  },
  {
    name: "Witcher",
    lore: "Specialists in slaying creatures, Witchers combine martial skill with arcane runes.",
    image: "/images/witcher.png"
  },
  {
    name: "Paladin",
    lore: "Holy warriors clad in righteousness, Paladins protect allies and smite evil with divine strength.",
    image: "/images/paladin.png"
  }
];

const Classes = () => {
  const [selected, setSelected] = useState(classes[0]);

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 tracking-widest">CLASSES</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              {classes.map((cls) => (
                <button
                  key={cls.name}
                  className={`rounded-full border-2 p-1 ${
                    selected.name === cls.name ? "border-red-500" : "border-gray-500"
                  }`}
                  onClick={() => setSelected(cls)}
                >
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </button>
              ))}
            </div>
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl font-bold tracking-widest mb-2">{selected.name}</h3>
              <p className="text-lg max-w-md">{selected.lore}</p>
            </motion.div>
          </div>
          <motion.div
            key={selected.image}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <img
              src={selected.image}
              alt={selected.name}
              className="max-h-96 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
