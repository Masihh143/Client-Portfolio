import React, { useState } from "react";
import name from "../assets/Subtract.svg";

function Home() {
  const [trail, setTrail] = useState([]);
  const [visible, setVisible] = useState(false);

  const TRAIL_LENGTH = 12; // number of glow circles

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const newPos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setTrail((prev) => {
      const updated = [...prev, newPos];
      return updated.slice(-TRAIL_LENGTH); // keep last N positions only
    });
  };

  return (
    <div
      id="home"
      className="min-h-screen bg-black text-white pt-32 flex justify-center items-center"
    >
      <div
        id="wrapper"
        className="bg-white/6 text-white flex flex-row justify-center items-center relative overflow-hidden mr-80 mb-20"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {/* Smooth fade container for trail */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {trail.map((pos, index) => {
            const opacity = (index + 1) / trail.length;

            return (
              <div
                key={index}
                className="absolute w-36 h-36 rounded-full pointer-events-none blur-2xl transition-all duration-75 ease-out"
                style={{
                  left: pos.x - 80,
                  top: pos.y - 80,
                  opacity: opacity,
                  background:
                    "radial-gradient(circle, rgb(12, 51, 180) 0%, rgba(34, 77, 171, 0.86) 46%, rgba(10,29,51,0) 92%)",
                }}
              ></div>
            );
          })}
        </div>

        <div className="z-10">
          <img src={name} alt="name" />
        </div>
      </div>
    </div>
  );
}

export default Home;
