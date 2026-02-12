import React from 'react'
import arrow from "../assets/Arrow.svg";
import bg from "../assets/black-bg2.png";

function Achivements() {
    const Certifications = [
        "Python Programming",
        "Machine Learning Foundation",
        "Deep Learning",
        "Power BI",
        "AWS Cloud Foundations",
    ]

  return (
    <div
    id="achivements"
    className="min-h-screen bg-black flex flex-col justify-center items-center px-20"
    >

        <div
        className="relative bg-center bg-no-repeat text-white px-60 py-24 flex flex-col justify-center mt-30"
        style={{ backgroundImage: `url(${bg})` }}
        >

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-50% to-black/80 pointer-events-none"></div>
            
            <div className="grid grid-cols-2 mb-10">
                <div className="flex flex-row items-center gap-5 justify-center">
                    <h1 className="text-8xl font-bold">Achivements</h1>
                    <img className="mt-10" src={arrow} alt="arrow" />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-10 px-10">

                <div className="h-40 col-start-1 col-span-1 flex flex-col justify-center items-center border-x-1 border-white/70 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_10px_2px_20px_rgba(255,255,255,0.1)]">
                    <h3 className="text-4xl font-bold mb-2">500+</h3>
                    <h2 className='text-xl font-bold'>LeetCode Problems</h2>
                    <p className='text-sm font-medium'>Strong DSA Foundation</p>
                </div>

                <div className="col-start-2 col-span-1 p-6 flex flex-col justify-center items-center border-x-1 border-white/70 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_10px_2px_20px_rgba(255,255,255,0.1)]">
                    <h3 className="text-4xl font-bold mb-2">50+</h3>
                    <h2 className='text-xl font-bold'>AI/ML Projects</h2>
                    <p className='text-sm font-medium'>Github Repositories</p>
                </div>

                <div className="col-start-3 col-span-1 p-6 flex flex-col justify-center items-center border-x-1 border-white/70 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_10px_2px_20px_rgba(255,255,255,0.1)]">
                    <h3 className="text-4xl font-bold mb-2">3<span className='text-xl'>star</span></h3>
                    <h2 className='text-xl font-bold'>CodeChef (1640)</h2>
                    <p className='text-sm font-medium'>Problem Solving</p>
                </div>

                <div className="col-start-4 col-span-1 p-6 flex flex-col justify-center items-center border-x-1 border-white/70 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_10px_2px_20px_rgba(255,255,255,0.1)]">
                    <h3 className="text-4xl font-bold mb-2">6<span className='text-xl'>star</span></h3>
                    <h2 className='text-xl font-bold'>HackRank</h2>
                    <p className='text-sm font-medium'>Python</p>
                </div>

                <div className="col-start-1 col-span-4 p-6 flex flex-col justify-center items-center border-x-1 border-white/70 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_10px_2px_20px_rgba(255,255,255,0.1)]">
                    <h3 className="text-4xl font-bold mb-2">Certifications & Learning</h3>
                    <ul className="text-xl font-bold flex flex-wrap justify-center items-center gap-x-12 gap-y-4 mt-6">
                    {Certifications.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                        <span className="text-white/80">⌘</span>
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Achivements