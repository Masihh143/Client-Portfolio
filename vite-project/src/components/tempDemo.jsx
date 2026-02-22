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

    reasons: [
        "Medical image interpretation is slow and resource-intensive",
        "Early-stage disease signals are subtle and often missed",
        "Expert availability is limited in resource-constrained settings",
        "CNNs can assist early triage without replacing clinicians"
    ],

    problems: [
        "Medical images vary widely in quality and resolution",
        "Public datasets are small, noisy, and class-imbalanced",
        "High risk of overfitting and misleading performance",
        "Ethical responsibility to avoid clinical overclaiming"
    ],

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
      

    solutions: [
        "Supervised CNN-based medical image classification system",
        "Clean preprocessing with controlled normalization",
        "Transparent evaluation using training & validation curves",
        "Educational, offline ML workflow"
    ],

    impacts: [
        "Reduced misclassification compared to early baselines",
        "Demonstrated feasibility of CNNs on small medical datasets",
        "Converted abstract “AI in healthcare” into a reproducible pipeline"
    ],

    reflections:[
        "Learned the importance of restraint over complexity",
        "Understood risks of overfitting in medical ML",
        "Gained appreciation for explainability and safety"
    ]
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

    reasons: [
        "Healthcare records are often fragmented across systems",
        "AI tools are frequently added without clear guardrails",
        "Patients may act on raw AI outputs without context",
        "Doctors and admins lack visibility and control"
    ],

    problems: [
        "Weak role-based access leads to unsafe information flow",
        "AI predictions are often unverified and poorly contextualized",
        "Responsibilities between patients, doctors, and admins are unclear",
        "Deployment issues can silently break trust in healthcare systems"
    ],

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
            bg: a1
        },
        {
            name: "Records",
            points: [
                "Image uploads",
                "Case storage",
                "File integrity",
                "Cloud safety"
            ],
            bg: b1
        },
        {
            name: "Prediction",
            points: [
                "HealthAI inference",
                "Case creation",
                "Pending status",
                "AI suggestion"
            ],
            bg: c1
        },
        {
            name: "Verification",
            points: [
                "Doctor review",
                "Image context",
                "Remarks",
                "Human approval"
            ],
            bg: d1
        },
        {
            name: "Delivery",
            points: [
                "Verified output",
                "Automated results",
                "Patient visibility",
                "Status clarity"
            ],
            bg: e1
        },
        {
            name: "Governance",
            points: [
                "Doctor approval",
                "User control",
                "Logs & visiblity",
                "Oversight"
            ],
            bg: f1
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
      

    solutions: [
        "Role-based healthcare platform with AI-assisted workflows",
        "Secure authentication and permission-aware routing",
        "Verified AI lifecycle: upload → predict → review → deliver",
        "Production-like deployment with stabilized states"
    ],

    impacts: [
        "All end-to-end flows execute without broken states",
        "AI prediction status remains consistent across sessions",
        "Deployment bugs affecting uploads and records were resolved",
        "System behaves like a real product, not a demo"
    ],

    reflections:[
        "Learned that workflow design matters more than model accuracy",
        "Understood deployment stability as a core UX requirement",
        "Recognized admin tools as essential for safety and scale"
    ]
}]