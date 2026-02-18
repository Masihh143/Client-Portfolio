import React from 'react'
import a from "../assets/bg/CropAi/a.jpg"
import b from "../assets/bg/CropAi/b.jpg"
import c from "../assets/bg/CropAi/c.jpg"
import d from "../assets/bg/CropAi/d.jpg"
import e from "../assets/bg/CropAi/e.jpg"
import f from "../assets/bg/CropAi/f.jpg"

import why from "../assets/bg/CropAi/why.jpg"
import problem from "../assets/bg/CropAi/problem.jpg"
import solution from "../assets/bg/CropAi/solution.jpg"
import impact from "../assets/bg/CropAi/impact.jpg"
import reflection from "../assets/bg/CropAi/reflection.jpg"

const Project = [{
    title: "01. Crop AI",
    description: "( AI Crop Disease Detection & Advisory System ).",
    role: "Data Scientist / ML Engineer",
    scope: "End-to-end ML System",
    focus: "Computer Vision, CNNs, Model Deployment",

    insights: [
        "Built a CNN-based system to detect crop diseases from leaf images",
        "Designed the full ML pipeline from data preprocessing to inference",
        "Deployed the model as an API to support real-world advisory use cases"
    ],

    reasons: [
        "Crop diseases are often detected too late, causing major yeild loss",
        "Small-scale farmers lack access to expert diagnosis",
        "Manual identification is slow, inconsistent, and error-prone",
        "Computer vision presents a scalable solution"
    ],

    problems: [
        "Disease symptoms vary visually across crops",
        "Real-world images contain noise and lighting variation",
        "Dataset imbalance across disease categories",
        "High risk of misclassification without careful preprocessing"
    ],

    pipeline: "Crop-AI ML Pipeline",
    nodes: [
        {
            name: "Data Collection",
            points: [
                "Crop leaf image dataset",
                "Multiple crop types",
                "Healthy vs diseased samples",
                "Real-world image variability"
            ],
            bg: a
        },
        {
            name: "Data Cleaning & Preprocessing",
            points: [
                "Image resizing and normalization",
                "Noise handling",
                "Data augmentation",
                "Class imbalance handling"
            ],
            bg: b
        },
        {
            name: "Feature Learning (CNN)",
            points: [
                "Automatic spatial feature extraction",
                "Convolution layers",
                "Pooling layers",
                "Feature maps"
            ],
            bg: c
        },
        {
            name: "Model Training",
            points: [
                "CNN architecture selection",
                "Training-validation split",
                "Loss function & optimizer",
                "Hyperparameter tuning"
            ],
            bg: d
        },
        {
            name: "Evaluation",
            points: [
                "Accuracy measurement",
                "Confusion matrix",
                "Overfitting checks",
                "Generalization testing"
            ],
            bg: e
        },
        {
            name: "Deployment & Inference",
            points: [
                "Trained model export",
                "API-based inference",
                "Input image → prediction pipeline",
                "Integration-ready architecture"
            ],
            bg: f
        }
    
    ],

    tradeOffs: [
        {
          decision: "Used CNNs instead of classical ML for better spatial feature learning",
          tradeoff: "Higher compute cost"
        },
        {
          decision: "Focused on accuracy over latency",
          tradeoff: "Not optimized for edge devices"
        },
        {
          decision: "Trained on real-world noisy images",
          tradeoff: "More preprocessing complexity"
        }
      ],
      

    solutions: [
        "CNN-based crop disease classification system",
        "End-to-end ML pipeline with preprocessing and inference",
        "API-based deployment for integration into advisory platforms"
    ],

    impacts: [
        "Improved disease detection accuracy",
        "Reduced manual diagnosis effort",
        "Demonstrated feasibility of AI-driven crop advisory systems"
    ],

    reflections:[
        "Learned importance of data quality over model complexity",
        "Gained experience deploying ML models beyond notebooks",
        "Would explore lightweight models for future scalability"
    ]
}]

function Projects() {
  return (
    <div id='projects' className='min-h-screen bg-black text-white mt-35 py-10'>
        <div>
            {Project.map(
                ({ title, description, role, scope, focus, insights, reasons, problems, pipeline, nodes, tradeOffs, solutions, impacts, reflections }, index) => (
                    <div key={index} className='mb-20 px-15'>
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
                                backgroundImage: `url(${why})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                                <h2 className='text-3xl font-bold mb-2'>Why This Project?</h2>
                                <ul className='space-y-2'>
                                    {reasons.map((reason, idx) => (
                                        <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                                        <span>•</span>
                                        <span>{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='text-white w-[520px] px-5 py-10 rounded-2xl flex-wrap'
                            style={{
                                backgroundImage: `url(${problem})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                                <h2 className='text-3xl font-bold mb-2'>The Problem</h2>
                                <ul className='space-y-2'>
                                    {problems.map((problem, idx) => (
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
                            <div className="text-xl font-medium bg-white text-black px-4 py-2 rounded-md mb-2 z-10">
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
                                {/* center to nodes */}
                                    <path d="M645 0 C 600 100, 100 50, 100 180" stroke="white" fill="none" strokeWidth="2"/>
                                    <path d="M655 0 C 650 100, 350 100, 350 180" stroke="white" fill="none" strokeWidth="2"/>
                                    <path d="M675 0 C 700 100, 600 100, 600 180" stroke="white" fill="none" strokeWidth="2"/>
                                    <path d="M700 0 C 750 100, 900 100, 800 180" stroke="white" fill="none" strokeWidth="2"/>
                                    <path d="M720 0 C 800 100, 1100 100, 1050 180" stroke="white" fill="none" strokeWidth="2"/>
                                    <path d="M750 0 C 900 100, 1300 100, 1300 180" stroke="white" fill="none" strokeWidth="2"/>
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
                                backgroundImage: `url(${solution})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}>
                                <h2 className='text-3xl font-bold mb-2'>Final Solution</h2>
                                <ul className='space-y-2'>
                                    {solutions.map((solution, idx) => (
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
                                backgroundImage: `url(${impact})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                                <h2 className='text-3xl font-bold mb-2'>Impact & Results</h2>
                                <ul className='space-y-2'>
                                    {impacts.map((impact, idx) => (
                                        <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                                        <span>•</span>
                                        <span>{impact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='text-white w-[520px] px-5 py-10 rounded-2xl flex-wrap'
                            style={{
                                backgroundImage: `url(${reflection})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                                <h2 className='text-3xl font-bold mb-2'>Reflection</h2>
                                <ul className='space-y-2'>
                                    {reflections.map((reflection, idx) => (
                                        <li key={idx} className='flex items-start gap-3 text-xl font-medium'>
                                        <span>•</span>
                                        <span>{reflection}</span>
                                        </li>                               
                                    ))}
                                </ul>
                            </div>

                        </div>

                    </div>
                )
            )}
        </div>

        <div className="h-50 border-y-2 border-white/40 grid grid-cols-3 items-center px-15 mb-10">

            <div className="flex justify-start">
                <div className='h-35 w-35 rounded-full border-2 border border-white/50 flex items-center justify-center'>
                    <button className="h-25 w-25 flex items-center justify-center bg-white text-black rounded-full border border-white/30 hover:scale-110 transition">
                        ‹
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="text-3xl font-light border border-white/60 rounded-full px-10 py-5 hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                take me home
                </button>
            </div>

            <div className="flex justify-end">
                <div className='h-35 w-35 rounded-full border-2 border border-white/50 flex items-center justify-center'>
                    <button className="h-25 w-25 flex items-center justify-center bg-white text-black rounded-full border border-white/30 hover:scale-110 transition">
                        ›
                    </button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Projects