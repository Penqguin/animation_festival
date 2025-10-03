import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Placeholder festivals and their photos
type Festival = {
  id: number;
  name: string;
  cover: string;
  photos: string[];
};

const FESTIVALS: Festival[] = [
  {
    id: 1,
    name: "2023 Animation Festival",
    cover: "/assets/templogo.png",
    photos: ["/assets/templogo.png", "/assets/vite.svg", "/assets/react.svg"],
  },
  {
    id: 2,
    name: "2024 Animation Festival",
    cover: "/assets/vite.svg",
    photos: ["/assets/vite.svg", "/assets/react.svg", "/assets/templogo.png"],
  },
];

const Gallery: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(
    null
  );

  return (
    <>
      <Navbar />
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Select a Festival
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {FESTIVALS.map((fest) => (
              <div
                key={fest.id}
                className="cursor-pointer bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-all"
                onClick={() => setSelectedFestival(fest)}
              >
                <img
                  src={fest.cover}
                  alt={fest.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-center">{fest.name}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* Overlay for selected festival */}
        {selectedFestival && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative">
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                onClick={() => setSelectedFestival(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center">
                {selectedFestival.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedFestival.photos.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Festival photo ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
