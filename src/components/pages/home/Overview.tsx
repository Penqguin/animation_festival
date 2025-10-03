import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CARDS = [
  {
    id: 1,
    title: "About Us",
    image: "/assets/templogo.png",
    description: "Learn more about our mission and team.",
    link: "/aboutus",
  },
  {
    id: 2,
    title: "Festival",
    image: "/assets/vite.svg",
    description: "Explore our annual animation festival.",
    link: "/festival",
  },
  {
    id: 3,
    title: "Organizations",
    image: "/assets/react.svg",
    description: "Meet our partner organizations.",
    link: "/organizations",
  },
];

type OverviewProps = {
  cardSize?: { minHeight?: number; width?: number | string };
};

const Overview: React.FC<OverviewProps> = ({
  cardSize = { minHeight: 260, width: "100%" },
}) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleExpand = (id: number, link: string) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
      setTimeout(() => navigate(link), 350); // Simulate expand then navigate
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 group ${
                expanded === card.id ? "scale-105 z-10" : "hover:scale-105"
              }`}
              style={{ minHeight: cardSize.minHeight, width: cardSize.width }}
              onClick={() => handleExpand(card.id, card.link)}
            >
              <img
                src={card.image}
                alt={card.title}
                className={`absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-300 ${
                  expanded === card.id ? "opacity-90" : ""
                }`}
              />
              <div className="relative z-10 flex flex-col justify-center items-center h-full p-8">
                <h3 className="text-2xl font-bold mb-2 text-black drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-gray-800 text-center mb-4 drop-shadow">
                  {card.description}
                </p>
                <span className="inline-block mt-auto px-4 py-2 bg-primary text-white rounded-full shadow transition-all duration-200 group-hover:bg-primary-dark">
                  Learn More
                </span>
              </div>
              {/* Expand effect overlay */}
              {expanded === card.id && (
                <div className="absolute inset-0 bg-white bg-opacity-60 animate-pulse z-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
