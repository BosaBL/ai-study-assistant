import { useState } from "react";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-40 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`transition-transform duration-500 w-full h-full transform-style-preserve-3d relative ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-blue-50 rounded-xl p-4 shadow-md backface-hidden flex items-center justify-center text-center text-blue-800 font-semibold text-lg">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-xl p-4 shadow-md rotate-y-180 backface-hidden flex items-center justify-center text-center text-gray-700 text-base">
          {back}
        </div>
      </div>
    </div>
  );
}