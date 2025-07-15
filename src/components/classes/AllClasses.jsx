import React, { useState } from "react";

// ✅ Rutas corregidas según nueva estructura
import classBg from "../../assets/class-bg.png";
import paladin from "../../assets/classes/Paladin.png";
import witcher from "../../assets/classes/Witcher.png";
import darkDruid from "../../assets/classes/DarkDruid.png";
import siege from "../../assets/classes/Siege.png";
import beverageMaster from "../../assets/classes/BeverageMaster.png";
import chemicalRoge from "../../assets/classes/ChemicalRoge.png";

// ✅ Datos de clases con imagen y descripción
const classData = {
  Paladin: {
    image: paladin,
    lore: "Los Paladines son guerreros sagrados que canalizan la energía solar.",
  },
  Witcher: {
    image: witcher,
    lore: "Los Witcher cazan bestias con alquimia y sentidos sobrehumanos.",
  },
  DarkDruid: {
    image: darkDruid,
    lore: "Los Dark Druids manipulan la muerte y los fragmentos del alma.",
  },
  Siege: {
    image: siege,
    lore: "Los Siege dominan maldiciones y barreras defensivas.",
  },
  BeverageMaster: {
    image: beverageMaster,
    lore: "Maestros de pociones con efectos explosivos y curativos.",
  },
  ChemicalRoge: {
    image: chemicalRoge,
    lore: "Especialistas en venenos, toxinas y sabotaje alquímico.",
  },
};

const AllClasses = () => {
  const [selectedClass, setSelectedClass] = useState("Paladin");

  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0)), url(${classBg})`,
      }}
    >
      <div className="w-full flex justify-between px-8 pb-12">
        {/* Izquierda: Nombre, botones y lore */}
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-4xl font-bold text-white">Choose Your Class</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {Object.keys(classData).map((className) => (
              <button
                key={className}
                className={`px-4 py-2 rounded-full font-semibold border-2 transition ${
                  selectedClass === className
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-gray-400 text-white hover:bg-gray-700"
                }`}
                onClick={() => setSelectedClass(className)}
              >
                {className}
              </button>
            ))}
          </div>
          <p className="text-white mt-4">{classData[selectedClass].lore}</p>
        </div>

        {/* Derecha: Imagen */}
        <div className="hidden md:block">
          <img
            src={classData[selectedClass].image}
            alt={selectedClass}
            className="max-h-[75vh] object-contain transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AllClasses;
