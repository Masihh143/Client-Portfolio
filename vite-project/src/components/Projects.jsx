import React, { useState, useEffect,useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { projects } from "../data/projects"

function Projects({project}) {
    
    // const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef(null)
    
    const currentProject = project
    const navigate = useNavigate()

    const currentIndex = projects.findIndex(
        p => p.id === project.id
    )

    // const scrollToTop = () => {
    //     containerRef.current?.scrollIntoView({
    //       behavior: "smooth",
    //       block: "start"
    //     })
    //     console.log("scrolling to top")
    // }
    
    const nextProject = () => {
        if (currentIndex < projects.length - 1) {
            navigate(`/projects/${projects[currentIndex + 1].id}`)
            // scrollToTop()
        }
      }
      
    const prevProject = () => {
        if (currentIndex > 0) {
            navigate(`/projects/${projects[currentIndex - 1].id}`)
            // scrollToTop()
        }
    }

    useEffect(() => {
        const navbarHeight = 200
      
        const yOffset = -navbarHeight
        const element = containerRef.current
      
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset
      
        window.scrollTo({ top: y, behavior: "smooth" })
    }, [currentIndex])


    if (!currentProject) return null

    const {
        title,
        description,
        role,
        scope,
        focus,
        insights,
        reasons,
        problems,
        pipeline,
        nodes,
        tradeOffs,
        solutions,
        impacts,
        reflections
      } = currentProject

  return (
    <div id='projects' className='min-h-screen bg-black text-white mt-35 py-10'>
        <div
        key={currentIndex}
        ref={containerRef}
        className='mb-20 px-15 transition-opacity duration-300 opacity-100'
        >
            <div className='pl-20'>
                <h1 className='text-9xl font-bold mb-4'>{title}</h1>
                <p className='text-[32px] font-medium mb-10'>{description}</p>
                <p className='font-light text-2xl'><span className='text-3xl font-medium'>Role:</span> {role}</p>
                <p className='font-light text-2xl'><span className='text-3xl font-medium'>Scope:</span> {scope}</p>
                <p className='font-light text-2xl mb-15'><span className='text-3xl font-medium'>Focus:</span> {focus}</p>

                <ul className='list-disc list-inside mb-20'>
                    {insights.map((insight, idx) => (
                        <li key={idx} className='text-2xl font-normal'>{insight}</li>
                    ))}
                </ul>

            </div>

            <div className='flex flex-row justify-center items-stretch gap-20 mb-30'>

                <div className='text-white w-[520px] px-5 py-10 rounded-2xl flex-wrap'
                style={{
                    backgroundImage: `url(${reasons.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Why this Project?</h2>
                    <ul className='space-y-2'>
                        {reasons.points.map((reason, idx) => (
                            <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                            <span>•</span>
                            <span>{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='text-white w-[520px] px-5 py-10 rounded-2xl flex-wrap'
                style={{
                    backgroundImage: `url(${problems.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
                >
                    <h2 className='text-3xl font-bold mb-2'>The Problem</h2>
                    <ul className='space-y-2'>
                        {problems.points.map((problem, idx) => (
                            <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                            <span>•</span>
                            <span>{problem}</span>
                            </li>                               
                        ))}
                    </ul>
                </div>

            </div>


            <h2 className='px-20 text-5xl font-medium mb-15'>ML Pipeline</h2>

            
            <div className="mb-40 flex flex-col items-center relative">

                {/* PIPELINE TITLE */}
                <div className="text-xl font-medium bg-white text-black px-4 py-3 rounded-md mb-2 z-10">
                    {pipeline}
                </div>


                {/* CONTAINER */}
                <div className="relative w-full max-w-[1400px]">


                    {/* SVG CONNECTION LINES */}
                    <svg
                    className="absolute top-0 left-0 w-full h-[200px] pointer-events-none"
                    viewBox="0 0 1400 200"
                    preserveAspectRatio="none"
                    >
                    <defs>
                    <marker
                        id="arrow"
                        markerWidth="10"
                        markerHeight="10"
                        refX="5"
                        refY="6"
                        orient="auto"
                        >
                        <path
                            d="M2,2 L10,6 L2,10"
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                        />
                        </marker>

                    </defs>

                    <path d="M645 0 C 600 100, 100 50, 100 180"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            markerEnd="url(#arrow)" />

                    <path d="M655 0 C 650 100, 350 100, 350 180"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            markerEnd="url(#arrow)" />

                    <path d="M675 0 C 700 100, 600 100, 600 180"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            markerEnd="url(#arrow)" />

                    <path d="M700 0 C 750 100, 900 100, 800 180"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            markerEnd="url(#arrow)" />

                    <path d="M720 0 C 800 100, 1100 100, 1050 180"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            markerEnd="url(#arrow)" />

                    <path d="M750 0 C 900 100, 1300 100, 1300 180"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            markerEnd="url(#arrow)" />

                    </svg>



                    {/* NODES GRID */}
                    <div className="grid grid-cols-6 gap-10 pt-[200px]">

                    {nodes.map((node, idx) => (
                        <div key={idx} className="flex flex-col items-center">

                        {/* NODE BOX */}
                        <div
                            className="text-lg text-center w-[180px] font-medium p-4 rounded-md mb-4"
                            style={{
                            backgroundImage: `url(${node.bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            }}
                        >
                            {node.name}
                        </div>


                        {/* POINTS */}
                        <ul className="space-y-2">
                            {node.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-base text-white">
                                <span>✦</span>
                                <span>{point}</span>
                            </li>
                            ))}
                        </ul>

                        </div>
                    ))}

                </div>

            </div>

            </div>


            <div className='pl-20 mb-40'>
                <h2 className='text-5xl font-medium mb-7'>Key Decisions & Trade-offs</h2>
                <ul className="space-y-4">
                    {tradeOffs.map((item, index) => (
                        <li key={index}>

                            <div className="flex items-start gap-3 text-xl font-medium">
                                <span>✦</span>
                                <span>{item.decision}</span>
                            </div>

                            <p className="ml-7 text-white/70 text-lg">
                                <span className="font-medium text-white">
                                    Trade-off:
                                </span>{" "}
                                <span className="italic">
                                    {item.tradeoff}
                                </span>
                            </p>

                        </li>
                    ))}
                    </ul>
            </div>


            <div className='flex flex-row justify-center items-stretch gap-20 mb-50'>

                <div className='text-white w-[750px] px-5 py-10 rounded-2xl flex-wrap'
                style={{
                    backgroundImage: `url(${solutions.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}>
                    <h2 className='text-3xl font-bold mb-2'>Final Solution</h2>
                    <ul className='space-y-2'>
                        {solutions.points.map((solution, idx) => (
                            <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                            <span>•</span>
                            <span>{solution}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className='flex flex-row justify-center items-start gap-20 mb-30'>

                <div className='text-white w-[520px] px-5 py-10 rounded-2xl flex-wrap'
                style={{
                    backgroundImage: `url(${impacts.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Impact & Results</h2>
                    <ul className='space-y-2'>
                        {impacts.points.map((impact, idx) => (
                            <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                            <span>•</span>
                            <span>{impact}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='text-white w-[520px] px-5 py-10 rounded-2xl flex-wrap'
                style={{
                    backgroundImage: `url(${reflections.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Reflection</h2>
                    <ul className='space-y-2'>
                        {reflections.points.map((reflection, idx) => (
                            <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                            <span>•</span>
                            <span>{reflection}</span>
                            </li>                               
                        ))}
                    </ul>
                </div>

            </div>

        </div>

        <div className="h-50 border-y-2 border-white/40 grid grid-cols-3 items-center px-15 mb-10">

            <div className="flex justify-start">
                <div className='h-35 w-35 rounded-full border-2 border border-white/50 flex items-center justify-center'>
                    <button
                    onClick={prevProject}
                    disabled={currentIndex === 0}
                    className="h-25 w-25 flex items-center justify-center bg-white text-black text-6xl pr-1 pb-1 rounded-full border border-white/30 hover:scale-110 transition disabled:opacity-30">
                        ‹
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <button 
                onClick={() => navigate("/")}
                className="text-3xl font-light border border-white/60 rounded-full px-10 py-5 hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
                >
                take me home
                </button>
            </div>

            <div className="flex justify-end">
                <div className='h-35 w-35 rounded-full border-2 border border-white/50 flex items-center justify-center'>
                    <button
                    onClick={nextProject}
                    disabled={currentIndex === projects.length - 1}
                    className="h-25 w-25 flex items-center justify-center bg-white text-black text-6xl pl-1 pb-1 rounded-full border border-white/30 hover:scale-110 transition disabled:opacity-30">
                        ›
                    </button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Projects