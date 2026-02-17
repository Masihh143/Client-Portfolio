import React from 'react'

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
            ]
        },
        {
            name: "Data Cleaning & Preprocessing",
            points: [
                "Image resizing and normalization",
                "Noise handling",
                "Data augmentation",
                "Class imbalance handling"
            ]
        },
        {
            name: "Feature Learning (CNN)",
            points: [
                "Automatic spatial feature extraction",
                "Convolution layers",
                "Pooling layers",
                "Feature maps"
            ]
        },
        {
            name: "Model Training",
            points: [
                "CNN architecture selection",
                "Training-validation split",
                "Loss function & optimizer",
                "Hyperparameter tuning"
            ]
        },
        {
            name: "Evaluation",
            points: [
                "Accuracy measurement",
                "Confusion matrix",
                "Overfitting checks",
                "Generalization testing"
            ]
        },
        {
            name: "Deployment & Inference",
            points: [
                "Trained model export",
                "API-based inference",
                "Input image → prediction pipeline",
                "Integration-ready architecture"
            ]
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

                            <div className='bg-white text-black w-[520px] px-5 py-10 rounded-2xl flex-wrap'>
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

                            <div className='bg-white text-black w-[520px] px-5 py-10 rounded-2xl flex-wrap'>
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

                         {/* PIPELINE NODES */}
                         <div className='mb-40'></div>

                        <div className='pl-20 mb-40'>
                            <h2 className='text-5xl font-medium mb-7'>Key Decisions & Trade-offs</h2>
                            <ul className="space-y-4">
                                {tradeOffs.map((item, index) => (
                                    <li key={index}>

                                        <div className="flex items-start gap-3 text-xl font-medium">
                                            <span>✦</span>
                                            <span>{item.decision}</span>
                                        </div>

                                        {/* Tradeoff */}
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

                            <div className='bg-white text-black w-[750px] px-5 py-10 rounded-2xl flex-wrap'>
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

                            <div className='bg-white text-black w-[520px] px-5 py-10 rounded-2xl flex-wrap'>
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

                            <div className='bg-white text-black w-[520px] px-5 py-10 rounded-2xl flex-wrap'>
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