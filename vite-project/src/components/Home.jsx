import React, { useState } from "react";

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 flex justify-center items-center">
      
      <div
        className="h-100 w-240 bg-white text-black flex flex-row justify-center items-center relative"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute w-16 h-16 border-2 border-red-500 rounded-full pointer-events-none transition-all duration-75 ease-out"
          style={{
            left: position.x - 32,
            top: position.y - 32,
          }}
        ></div>

        <div className="text-xl">
          X: {Math.round(position.x)} , Y: {Math.round(position.y)}
        </div>
      </div>

    </div>
  );
}

export default Home;
