import React from 'react'
import arrow from "../assets/Arrow.svg";
import akhil from "../assets/AKHIL.jpg";
import hand from "../assets/hand.svg";

function Contact() {

    const contacts = [
        { name: "Email", link: "mailto:your@email.com" },
        { name: "GitHub", link: "https://github.com/yourusername" },
        { name: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
        { name: "LeetCode", link: "#" },
        { name: "HackerRank", link: "#" },
        { name: "CodeChef", link: "#" }
      ];
      

    return (
        <div id="contact" className="min-h-screen bg-black text-white flex flex-row text-white">
            <div className='w-1/2 mt-40'>

                <div className='pl-30'>

                    <div className="grid grid-cols-1 mb-16">
                        <div className="flex flex-row gap-5">
                        <h1 className="text-8xl font-bold">Lets Connect</h1>
                        <img className="mt-10" src={arrow} alt="arrow" />
                        </div>
                    </div>

                    <div>
                        <h1 className='font-black text-[32px]'>I’m currently open to</h1>
                        <ul className="space-y-1 text-xl font-normal mt-4">
                        {[
                            "Data Science & ML roles",
                            "Applied AI projects",
                            "Research & internship opportunities",
                            "Collaboration on real-world AI systems",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                            <span className="text-white/80">✦</span>
                            {item}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className='flex flex-col items-start gap-4 mt-20'>
                    {contacts.map((item, index) => (
                        <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='bg-white text-black text-lg font-normal h-12 w-45 flex justify-center items-center hover:bg-white/90 transition'
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>

                <div className='mt-20'>
                    <img src={akhil} alt="akhil" />
                </div>
            </div>


            <div className='w-1/2 flex flex-row justify-center items-center mt-40'>
                <div className="bg-white text-black w-130 h-180 rounded-3xl flex flex-col justify-between">
                    <div className="flex flex-col gap-4 p-6">
                        <label className="text-2xl font-normal">Your Message:</label>
                        <textarea
                            className="bg-gray-200 rounded-[10px] h-40 p-3"
                        />

                        <label className="text-2xl font-normal">
                            Your email <span className='text-xs'>(optional, if you'd like a reply):</span>
                        </label>
                        <input
                            className="bg-gray-200 rounded-[10px] p-2"
                        />

                    </div>

                    <div className='relative'>
                        <img src={hand} alt="hand" />
                        <button className="absolute top-15 left-46 bg-black text-white font-normal text-2xl p-2 h-40 w-40 flex flex-wrap justify-center items-center rounded-full hover:bg-black/90 transition">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  

export default Contact