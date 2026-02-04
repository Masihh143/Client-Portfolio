import {React , useState , useEffect , useRef} from 'react'
import logo from '../assets/logo.png'

const sections = ["About", "Skills", "Work", "Achivements"];

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevIndexRef = useRef(0);
    // const clickAudio = useRef(new Audio(click));
  
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
      <nav className="min-h-32 bg-black text-white flex flex-row justify-between fixed top-0 left-0 right-0 px-15 py-5">
      <div className='logo'>
        <img src={logo} alt={logo} />
      </div>

      <div>Data Scientist</div>
      <div>
        <ul className='flex flex-col gap-2'>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
        </ul>
      </div>
      <div>Achivements</div>
      <div>
        <ul className='flex flex-col gap-2'>
          <li className="font-googlesans">Linkedin</li>
          <li>GitHub</li>
          <li>LeetCode</li>
        </ul>
      </div>
      <div className="bg-white text-black self-baseline h-10 w-45 flex flex-row justify-evenly items-center">Let's Talk</div>
    </nav>
    )
}

    export default Navbar;