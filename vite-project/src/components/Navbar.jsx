import { React, useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'

const sections = ["About", "Skills", "Work", "Achivements"];
const roles = [
  "Data Scientist",
  "ML Researcher",
]

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(0);
  // const clickAudio = useRef(new Audio(click));

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observers = [];

    sections.forEach((id, index) => {
      const el = document.getElementById(id.toLowerCase());
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (prevIndexRef.current !== index) {
              // clickAudio.current.currentTime = 0;
              // clickAudio.current.play();
              prevIndexRef.current = index;
            }
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.4,
          rootMargin: "0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveIndex(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="min-h-32 bg-black text-lg text-white flex flex-row justify-between fixed top-0 left-0 right-0 px-15 py-10 z-100 font-product font-light text-base leading-none tracking-tightest">
      <div className='logo'>
        <img src={logo} alt={logo} />
      </div>


      <div className="h-8 overflow-hidden relative">
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${index * 2}rem)`
          }}
        >
          {roles.map((role, i) => (
            <div key={i} className="h-8 flex items-center">
              {role}
            </div>
          ))}
        </div>
      </div>



      <div>
        <ul className='flex flex-col gap-4'>
          {["About", "Skills", "Work"].map((item, index) => (
            <li key={index} className="group w-fit cursor-pointer">
              <span className="relative inline-block">
                {item}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>



      <div className="group w-fit cursor-pointer self-start">
        <span className="relative inline-block">
          Achievements
          <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>



      <div>
        <ul className='flex flex-col gap-4'>
          {["Linkedin", "GitHub", "LeetCode"].map((item, index) => (
            <li key={index} className="group w-fit cursor-pointer">
              <span className="relative inline-block">
                {item}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>



      <button className="group bg-white text-black self-baseline h-12 w-45 overflow-hidden relative flex items-center justify-center font-satoshi">

        <div className="relative overflow-hidden">

          {/* First Text */}
          <span className="block transition-transform duration-350 group-hover:-translate-y-full">
            Let's Talk
          </span>

          {/* Second Text (same text) */}
          <span className="block absolute top-full left-0 transition-transform duration-350 group-hover:-translate-y-full">
            Let's Talk
          </span>

        </div>

      </button>
    </nav>
  )
}

export default Navbar;