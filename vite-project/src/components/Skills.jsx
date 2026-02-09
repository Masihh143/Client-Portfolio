import React from "react";
import arrow from "../assets/Arrow.svg";
import bg from "../assets/black-bg.jpg";

function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen bg-black text-white relative px-60 py-24 flex flex-col justify-center"
    >
        {/* <img className="z-10" src={bg} alt="bg" /> */}
        
        <div className="grid grid-cols-2 mb-16">
            <div className="flex flex-row items-center gap-5 justify-center">
                <h1 className="text-8xl font-bold">Skills</h1>
                <img className="mt-10" src={arrow} alt="arrow" />
            </div>
        </div>

        <div className="grid grid-cols-4 gap-8">

            <div className="col-start-2 col-span-1 p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 italic">Programming</h3>
                <ul className="space-y-2">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                </ul>
            </div>

            <div className="col-start-3 col-span-1 p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 italic">ML/Deep Learning</h3>
                <ul className="space-y-2">
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>Scikit-Learn</li>
                    <li>LLM</li>
                    <li>Neural Networks</li>
                </ul>
            </div>

            <div className="col-start-4 col-span-1 p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 italic">Data & Analytics</h3>
                <ul className="space-y-2">
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Power BI</li>
                    <li>EDA</li>
                    <li>Data Visualization</li>
                </ul>
            </div>

            <div className="col-start-1 col-span-2 p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 italic">Tools & Platform</h3>

                <div className="grid grid-cols-3 gap-4">
                    <div>Git</div>
                    <div>GitHub</div>
                    <div>Google Colab</div>

                    <div>VS Code</div>
                    <div>Jupyter</div>
                    <div>Flask</div>
                </div>
            </div>

            <div className="col-start-3 col-span-1 p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 italic">Databases</h3>
                <ul className="space-y-2">
                    <li>SQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>

            <div className="col-start-4 col-span-1 p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 italic">Backend</h3>
                <ul className="space-y-2">
                    <li>FastAPI</li>
                    <li>RestAPI</li>
                </ul>
            </div>

        </div>
    </div>
  );
}

export default Skills;
