import React, { useState } from "react";
import name from "../assets/Subtract.svg";
import avatar from "../assets/avatar.svg";
import avatext from "../assets/avatar-text.svg"; 

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
      className="min-h-screen bg-black text-white pt-50 flex flex-col justify-center items-center"
    >
        <div
            id="wrapper"
            className="bg-white/6 text-white flex flex-col justify-center items-center relative overflow-hidden mr-80 mb-20"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
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
                        "radial-gradient(circle, rgb(12, 51, 180) 0%, rgba(34, 77, 171, 0.86) 15%, rgba(10,29,51,0) 92%)",
                    }}
                ></div>
                );
            })}
            </div>

            <div className="z-10">
                <img src={name} alt="name" />
            </div>  
        </div>


        <p className="absolute bottom-35 left-108 font-[400] text-xl -tracking-2">I build data-driven systems that turn complex data into clear decisions.</p>
        <div className="absolute right-135 top-50 z-10 group">
            <img className="hover:scale-112 origin-top-left transition-transform duration-300" src={avatar} alt="avatar" />
            <img className="absolute top-20 left-65 opacity-0 group-hover:opacity-100 transition-opacity duration-300" src={avatext} alt="avatar-text" />
        </div>

    </div>
  );
}

export default Home;
