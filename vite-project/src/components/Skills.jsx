import React from "react";
import arrow from "../assets/Arrow.svg";
import bg from "../assets/black-bg.jpg";

function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen bg-black flex flex-col justify-center items-center"
    >
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white px-60 py-24 flex flex-col justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent via-50% to-black/100 pointer-events-none"></div>

        <div className="grid grid-cols-2 mb-16">
          <div className="flex flex-row items-center gap-5 justify-center">
            <h1 className="text-8xl font-bold">Skills</h1>
            <img className="mt-10" src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="col-start-2 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Programming</h3>
            <ul className="space-y-2 text-xl font-medium">
              {["Python", "Java", "C"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-3 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">ML / Deep Learning</h3>
            <ul className="space-y-2 text-xl font-medium">
              {[
                "TensorFlow",
                "Keras",
                "Scikit-Learn",
                "LLM",
                "Neural Networks",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-4 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Data & Analytics</h3>
            <ul className="space-y-2 text-xl font-medium">
              {["Pandas", "NumPy", "Power BI", "EDA", "Data Visualization"].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-white/80">✦</span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-start-1 col-span-2 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Tools & Platform</h3>
            <ul className="text-xl font-medium grid grid-cols-3 gap-x-10 gap-y-4">
              {[
                "Git",
                "GitHub",
                "Google Colab",
                "VS Code",
                "Jupyter",
                "Flask",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-3 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Databases</h3>
            <ul className="space-y-2 text-xl font-medium">
              {["SQL", "MongoDB"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-4 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Backend</h3>
            <ul className="space-y-2 text-xl font-medium">
              {["FastAPI", "RestAPI"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
