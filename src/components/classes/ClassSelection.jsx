import React, { useState } from "react";
import classBg from "../../assets/class-bg.png";

// Miniaturas
import paladinThumb from "../../assets/thumbs/paladin-thumb.png";
import witcherThumb from "../../assets/thumbs/witcher-thumb.png";
import darkDruidThumb from "../../assets/thumbs/dark-druid-thumb.png";
import siegeThumb from "../../assets/thumbs/siege-thumb.png";
import beverageMasterThumb from "../../assets/thumbs/beverage-master-thumb.png";
import chemicalRogeThumb from "../../assets/thumbs/chemical-roge-thumb.png";

// Imágenes grandes
import paladinImg from "../../assets/classes/Paladin.png";
import witcherImg from "../../assets/classes/Witcher.png";
import darkDruidImg from "../../assets/classes/DarkDruid.png";
import siegeImg from "../../assets/classes/Siege.png";
import beverageMasterImg from "../../assets/classes/BeverageMaster.png";
import chemicalRogeImg from "../../assets/classes/ChemicalRoge.png";

const classes = [
  { name: "Paladin", lore: "Holy warriors clad in righteousness, Paladins protect allies and smite evil with divine strength.", thumb: paladinThumb, image: paladinImg },
  { name: "Witcher", lore: "Specialists in slaying creatures, Witchers combine martial skill with arcane runes.", thumb: witcherThumb, image: witcherImg },
  { name: "Dark Druid", lore: "Mystics of decay and rebirth, Dark Druids bend the power of the underworld to summon beasts and curses.", thumb: darkDruidThumb, image: darkDruidImg },
  { name: "Siege", lore: "Masters of battlefield manipulation and soul-fueled curses.", thumb: siegeThumb, image: siegeImg },
  { name: "Beverage Master", lore: "Mixologists turned alchemists, their drinks both heal and explode.", thumb: beverageMasterThumb, image: beverageMasterImg },
  { name: "Chemical Roge", lore: "Toxic tricksters wielding unstable flasks with surgical precision.", thumb: chemicalRogeThumb, image: chemicalRogeImg }
];

const ClassSelection = () => {
  const [selected, setSelected] = useState(classes[0]);

  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0)), url(${classBg})`,
        backgroundSize: '200% auto',
        animation: 'floatBackground 60s linear infinite',
      }}
    >
      {/* Imagen del personaje alineada a la esquina inferior derecha */}
      <div className="absolute bottom-0 right-60 z-10">
        <img
          src={selected.image}
          alt={selected.name}
          className="max-h-[80vh] object-contain transition-all duration-500"
        />
      </div>

      {/* Centro de contenido: animado, alineado izquierda */}
      <div
        className="animate__animated animate__fadeInUp absolute left-[25%] -translate-x-1/2 top-[40%] top-1/2 -translate-y-1/2 z-20 text-white max-w-xl px-10 flex flex-col items-start text-left outline-none"
        style={{ caretColor: "transparent" }}
      >
        <div className="text-white max-w-xl px-18 flex flex-col text-left items-start">
          <h2 className="text-4xl font-bold tracking-widest mb-6">CLASSES</h2>
          <div className="flex gap-4 justify-center mb-10 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide">
            {classes.map((cls) => (
              <button
                key={cls.name}
                onClick={() => setSelected(cls)}
                className={`relative rounded-full border-2 p-[6px] overflow-hidden transition-all duration-300 ${
                  selected.name === cls.name
                    ? "border-yellow-300 shadow-lg scale-100 before:absolute before:inset-0 before:rounded-full before:animate-ping before:bg-yellow-300/20 before:duration-[2000ms]"
                    : "border-gray-400 hover:scale-105"
                }`}
              >
                <img
                  src={cls.thumb}
                  alt={cls.name}
                  className="w-[150px] aspect-square rounded-full object-cover transition duration-300 ease-out hover:scale-105"
                />
              </button>
            ))}
          </div>
          <h3 className="text-2xl font-bold tracking-wide">{selected.name}</h3>
          <p className="text-lg mt-2 mb-6">{selected.lore}</p>
        </div>
      </div>
    </section>
  );
};

export default ClassSelection;
