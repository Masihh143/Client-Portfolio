import React, { useState, useRef } from 'react'

import a1 from "../assets/bg/CropAi/a.jpg"
import b1 from "../assets/bg/CropAi/b.jpg"
import c1 from "../assets/bg/CropAi/c.jpg"
import d1 from "../assets/bg/CropAi/d.jpg"
import e1 from "../assets/bg/CropAi/e.jpg"
import f1 from "../assets/bg/CropAi/f.jpg"

import a2 from "../assets/bg/HealthAi/a.jpg"
import b2 from "../assets/bg/HealthAi/b.jpg"
import c2 from "../assets/bg/HealthAi/c.jpg"
import d2 from "../assets/bg/HealthAi/d.jpg"
import e2 from "../assets/bg/HealthAi/e.jpg"
import f2 from "../assets/bg/HealthAi/f.jpg"

import a3 from "../assets/bg/HealthSphere/a.jpg"
import b3 from "../assets/bg/HealthSphere/b.jpg"
import c3 from "../assets/bg/HealthSphere/c.jpg"
import d3 from "../assets/bg/HealthSphere/d.jpg"
import e3 from "../assets/bg/HealthSphere/e.jpg"
import f3 from "../assets/bg/HealthSphere/f.jpg"

import reason1 from "../assets/bg/CropAi/reason.jpg"
import problem1 from "../assets/bg/CropAi/problem.jpg"
import solution1 from "../assets/bg/CropAi/solution.jpg"
import impact1 from "../assets/bg/CropAi/impact.jpg"
import reflection1 from "../assets/bg/CropAi/reflection.jpg"

import reason2 from "../assets/bg/HealthAi/reason.jpg"
import problem2 from "../assets/bg/HealthAi/problem.jpg"
import solution2 from "../assets/bg/HealthAi/solution.jpg"
import impact2 from "../assets/bg/HealthAi/impact.jpg"
import reflection2 from "../assets/bg/HealthAi/reflection.jpg"

import reason3 from "../assets/bg/HealthSphere/reason.jpg"
import problem3 from "../assets/bg/HealthSphere/problem.jpg"
import solution3 from "../assets/bg/HealthSphere/solution.jpg"
import impact3 from "../assets/bg/HealthSphere/impact.jpg"
import reflection3 from "../assets/bg/HealthSphere/reflection.jpg"

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

    reasons: {
            points: [
                "Crop diseases are often detected too late, causing major yeild loss",
                "Small-scale farmers lack access to expert diagnosis",
                "Manual identification is slow, inconsistent, and error-prone",
                "Computer vision presents a scalable solution"
            ],
            bg: reason1
        },

    problems:{
            points: [
                "Disease symptoms vary visually across crops",
                "Real-world images contain noise and lighting variation",
                "Dataset imbalance across disease categories",
                "High risk of misclassification without careful preprocessing"
            ],
            bg: problem1
        },

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
            bg: a1
        },
        {
            name: "Data Cleaning & Preprocessing",
            points: [
                "Image resizing and normalization",
                "Noise handling",
                "Data augmentation",
                "Class imbalance handling"
            ],
            bg: b1
        },
        {
            name: "Feature Learning (CNN)",
            points: [
                "Automatic spatial feature extraction",
                "Convolution layers",
                "Pooling layers",
                "Feature maps"
            ],
            bg: c1
        },
        {
            name: "Model Training",
            points: [
                "CNN architecture selection",
                "Training-validation split",
                "Loss function & optimizer",
                "Hyperparameter tuning"
            ],
            bg: d1
        },
        {
            name: "Evaluation",
            points: [
                "Accuracy measurement",
                "Confusion matrix",
                "Overfitting checks",
                "Generalization testing"
            ],
            bg: e1
        },
        {
            name: "Deployment & Inference",
            points: [
                "Trained model export",
                "API-based inference",
                "Input image → prediction pipeline",
                "Integration-ready architecture"
            ],
            bg: f1
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
      

    solutions: {
        points: [
            "CNN-based crop disease classification system",
            "End-to-end ML pipeline with preprocessing and inference",
            "API-based deployment for integration into advisory platforms"
        ],
        bg: solution1
    },

    impacts: {
        points: [
            "Improved disease detection accuracy",
            "Reduced manual diagnosis effort",
            "Demonstrated feasibility of AI-driven crop advisory systems"
        ],
        bg: impact1
    },

    reflections: {
        points: [
            "Learned importance of data quality over model complexity",
            "Gained experience deploying ML models beyond notebooks",
            "Would explore lightweight models for future scalability"
        ],  
        bg: reflection1
    },
},
{
    title: "02. Health AI",
    description: "( AI-Assisted Medical Image Classification System )",
    role: "Machine Learning Engineer",
    scope: "End-to-end experimental ML system ",
    focus: "Medical Imaging, CNNs, Model Evaluation",

    insights: [
        "Built a CNN-based system to classify medical images (disease vs non-disease)",
        "Designed a transparent ML pipeline with strong validation checks",
        "Positioned AI as decision support, not a clinical replacement"
    ],

    reasons: {
        points: [
            "Medical image interpretation is slow and resource-intensive",
            "Early-stage disease signals are subtle and often missed",
            "Expert availability is limited in resource-constrained settings",
            "CNNs can assist early triage without replacing clinicians"
        ],
        bg: reason2
    },

    problems: {
        points: [
            "Medical images vary widely in quality and resolution",
            "Public datasets are small, noisy, and class-imbalanced",
            "High risk of overfitting and misleading performance",
            "Ethical responsibility to avoid clinical overclaiming"
        ],
        bg: problem2
    },

    pipeline: "Health-AI ML pipeline",
    nodes: [
        {
            name: "Collection",
            points: [
                "Medical Images",
                "Grayscale scans",
                "Disease labels",
                "Dataset imbalance"
            ],
            bg: a2
        },
        {
            name: "Preprocessing",
            points: [
                "Resize & normalize",
                "Noise handling",
                "Data integrity",
                "Contrast Consistency"
            ],
            bg: b2
        },
        {
            name: "Features",
            points: [
                "Spatial patterns",
                "Convolutions",
                "Pooling",
                "Feature maps"
            ],
            bg: c2
        },
        {
            name: "Model Training",
            points: [
                "CNN design",
                "Training-validation split",
                "Loss optimization",
                "Regularization"
            ],
            bg: d2
        },
        {
            name: "Evaluation",
            points: [
                "Accuracy",
                "Loss curves",
                "Overfitting checks",
                "Validation behavior"
            ],
            bg: e2
        },
        {
            name: "Limits",
            points: [
                "Offline only",
                "No clinical claims",
                "Dataset constraints",
                "Ethical scope"
            ],
            bg: f2
        }
    
    ],

    tradeOffs: [
        {
          decision: "Used simple CNNs instead of deep architectures",
          tradeoff: "Better interpretability, lower peak accuracy"
        },
        {
          decision: "Focused on validation behavior, not training metrics",
          tradeoff: "Slower iteration, higher confidence"
        },
        {
          decision: "Avoided deployment framing",
          tradeoff: "Educational scope, ethical clarity"
        }
      ],
      

    solutions: {
        points: [
            "Supervised CNN-based medical image classification system",
            "Clean preprocessing with controlled normalization",
            "Transparent evaluation using training & validation curves",
            "Educational, offline ML workflow"
        ],
        bg: solution2
    },

    impacts: {
        points: [
            "Reduced misclassification compared to early baselines",
            "Demonstrated feasibility of CNNs on small medical datasets",
            "Converted abstract “AI in healthcare” into a reproducible pipeline"
        ],
        bg: impact2
    },

    reflections:{
        points: [
            "Learned the importance of restraint over complexity",
            "Understood risks of overfitting in medical ML",
            "Gained appreciation for explainability and safety"
        ],
        bg: reflection2
    }
},
{
    title: "03. HealthSphere",
    description: "( Role-Based Healthcare Management Platform with Responsible AI )",
    role: "Full-Stack Developer & ML Engineer",
    scope: "Product-grade, role-based AI system ",
    focus: "Secure workflows, AI-in-the-loop, accountability",

    insights: [
        "Built a multi-role healthcare platform (Patient / Doctor / Admin)",
        "Integrated AI predictions into a human-verified workflow",
        "Designed secure, production-like flows with clear responsibility boundaries"
    ],

    reasons: {
        points: [
            "Healthcare records are often fragmented across systems",
            "AI tools are frequently added without clear guardrails",
            "Patients may act on raw AI outputs without context",
            "Doctors and admins lack visibility and control"
        ],
        bg: reason3
    },

    problems: {
            points: [
                "Weak role-based access leads to unsafe information flow",
                "AI predictions are often unverified and poorly contextualized",
                "Responsibilities between patients, doctors, and admins are unclear",
                "Deployment issues can silently break trust in healthcare systems"
            ],
            bg: problem3
        },

    pipeline: "HealthSphere ML pipeline",
    nodes: [
        {
            name: "Auth",
            points: [
                "JWT login",
                "Role routing",
                "Permission checks",
                "Session security"
            ],
            bg: a3
        },
        {
            name: "Records",
            points: [
                "Image uploads",
                "Case storage",
                "File integrity",
                "Cloud safety"
            ],
            bg: b3
        },
        {
            name: "Prediction",
            points: [
                "HealthAI inference",
                "Case creation",
                "Pending status",
                "AI suggestion"
            ],
            bg: c3
        },
        {
            name: "Verification",
            points: [
                "Doctor review",
                "Image context",
                "Remarks",
                "Human approval"
            ],
            bg: d3
        },
        {
            name: "Delivery",
            points: [
                "Verified output",
                "Automated results",
                "Patient visibility",
                "Status clarity"
            ],
            bg: e3
        },
        {
            name: "Governance",
            points: [
                "Doctor approval",
                "User control",
                "Logs & visiblity",
                "Oversight"
            ],
            bg: f3
        }
    
    ],

    tradeOffs: [
        {
          decision: "Prevented patients from seeing raw AI outputs",
          tradeoff: "Less immediacy, more safety"
        },
        {
          decision: "Required doctor verification before result delivery",
          tradeoff: "Slower flow, higher trust"
        },
        {
          decision: "Added admin oversight instead of auto-approval",
          tradeoff: "More friction, stronger governance"
        },
        {
            decision: "Focused on workflow stability over feature breadth",
            tradeoff: "Fewer features, higher reliability"
        }
      ],
      

    solutions: 
        {
            points: [
                "Role-based healthcare platform with AI-assisted workflows",
                "Secure authentication and permission-aware routing",
                "Verified AI lifecycle: upload → predict → review → deliver",
                "Production-like deployment with stabilized states"
            ],
            bg: solution3
        },

    impacts: 
        {
            points: [
                "All end-to-end flows execute without broken states",
                "AI prediction status remains consistent across sessions",
                "Deployment bugs affecting uploads and records were resolved",
                "System behaves like a real product, not a demo"
            ],
            bg: impact3
        },

    reflections:
        {
            points: [
                "Learned that workflow design matters more than model accuracy",
                "Understood deployment stability as a core UX requirement",
                "Recognized admin tools as essential for safety and scale"
            ],
            bg: reflection3
        }
}]

function Projects() {

    const scrollToTop = () => {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
        console.log("scrolling to top")
    }
    
    const nextProject = () => {
        if (currentIndex < Project.length - 1) {
          setCurrentIndex(prev => prev + 1)
          scrollToTop()
        }
      }
      
      const prevProject = () => {
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1)
          scrollToTop()
        }
      }

    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef(null)

    const currentProject = Project[currentIndex]

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
                    className="h-25 w-25 flex items-center justify-center bg-white text-black text-6xl pr-1 pb-1 rounded-full border border-white/30 hover:scale-110 transition">
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
                    <button
                    onClick={nextProject}
                    disabled={currentIndex === Project.length - 1}
                    className="h-25 w-25 flex items-center justify-center bg-white text-black text-6xl pl-1 pb-1 rounded-full border border-white/30 hover:scale-110 transition">
                        ›
                    </button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Projects