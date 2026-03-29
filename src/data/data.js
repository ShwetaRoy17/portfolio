export const profile = {
    name: "Shweta Roy",
    shortName: "Shweta",
    role: "Backend-Focused Software Engineer",
    location: "India",
    email: "royshweta1712@gmail.com",
    github: "https://github.com/ShwetaRoy17",
    linkedin: "https://www.linkedin.com/in/shweta-roy-104145227/",
    leetcode: "https://leetcode.com/u/shwetaroy1712/",
    resume: "https://drive.google.com/file/d/1tcGmE5bBd-B3pRrz5obCulKY0JxzGf6o/view?usp=sharing",
    heroTitle: ["Building", "scalable systems", "that perform."],
    heroBio:
        "Backend-focused software engineer with hands-on experience in scalable, low-latency systems across fintech and real-time streaming platforms. Strong foundation in distributed systems, concurrency, backend engineering, and research-driven problem solving."
};

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
];

export const heroPills = [
    "Distributed Systems",
    "Cloud Technologies",
    "System Design",
    "Machine Learning",
    "DSA 1000+"
];



export const about = {
    lede: "Engineering for scale, optimized for speed.",
    paragraphs: [
        "I am a 2025 B.Tech IT graduate from Netaji Subhas University of Technology (NSUT)",
        " My technical expertise spans Java, Spring Boot, Go, and C++, complemented by hands-on experience in building scalable REST APIs and high-concurrency systems. I am particularly passionate about distributed systems and cloud technologies, with a focus on optimizing infrastructure using AWS and OpenSearch. Additionally, I am exploring the intersection of Machine Learning and system design"
    ],

};

export const skillGroups = [
    {
        icon: "⚙️",
        title: "Backend & Distributed Systems",
        className: "sk-c1",
        ghost: "01",
        items: [
            "Microservices Architecture",
            "Distributed Systems Design",
            "API Design & Optimization",
            "High Availability Systems",
            "AWS",
        ]
    },
    {
        icon: "💻⚙️",
        title: "Concurrency & Systems Programming",
        className: "sk-c2",
        ghost: "02",
        items: [
            "Multithreading (Java & C++)",
            "Concurrency Patterns",
            "Process Management & IPC",
            "Unix System Calls",
            "Golang",
            "Goroutines & Channels",
            "Low-latency System Design"
        ]
    },
    
    {
        icon: "</>",
        title: "Machine Learning & Data Systems",
        className: "sk-c3",
        ghost: "04",
        items: [
            "GAN",
            "CNN",
            "LSTM",
            "Federated Learning",
            "Time-Series Forecasting",
            "Data Imputation",
            "MAPE / RMSE",
            "Cross-validation"
        ]
    },
    {
        icon: "🗄️",
        title: "Databases & Storage",
        className: "sk-c4",
        ghost: "05",
        items: [
            "MySQL",
            "Query Optimization",
            "Indexing",
            "MongoDB",
            "Snowflake",
            "Schema Design",
            "Data Modeling"
        ]
    },
    {
        icon: "🛠️",
        title: "Tools, Languages & CS Foundations",
        className: "sk-c5",
        ghost: "06",
        items: [
            "Java",
            "Golang",
            "C++",
            "Python",
            "JavaScript",
            "Shell Scripting",
            "Bash",
            "Docker",
            "Kubernetes",
            "Git",
            "Linux",
            "DSA 1000+",
            "System Design"
        ]
    }
];

export const projects = [
    {
        title: "Go Shell",
        type: "Systems Programming",
        emoji: "🖥️",
        background: "linear-gradient(135deg,#0b1018,#070b12)",
        description:
            "Unix-like shell built in Go with command parsing, process execution, and systems-level command handling. Demonstrates process management, command tokenization, and low-level execution flow.",
        highlights: [
            "Command parsing and tokenization",
            "Process spawning and execution",
            "Unix-like shell behavior",
            "Foundation for piping, redirection, and signal handling"
        ],
        tags: ["Go", "Systems Programming", "Process Management", "Command Parsing", "OS Concepts"],
        live: "",
        code: "https://github.com/ShwetaRoy17/"
    },
    {
        title: "Go Web Crawler",
        type: "Distributed / Concurrent Backend",
        emoji: "🕸️",
        background: "linear-gradient(135deg,#08140f,#06100c)",
        description:
            "Concurrent web crawler designed to handle large-scale crawling with parallel workers, controlled request flow, URL deduplication, and resilient crawling behavior.",
        highlights: [
            "Parallel crawling with goroutines",
            "Rate limiting and worker-pool style execution",
            "URL deduplication",
            "Retry and timeout oriented backend design"
        ],
        tags: ["Go", "Concurrency", "Web Crawling", "Distributed Systems", "Networking"],
        live: "",
        code: "https://github.com/ShwetaRoy17"
    },
    {
        title: "GC-LFF",
        type: "Research / ML Systems",
        emoji: "📄",
        background: "linear-gradient(135deg,#130b18,#0c0711)",
        description:
            "Federated GAN-CNN-LSTM framework for robust AQI forecasting across distributed data sources, combining data imputation, temporal modeling, and communication-aware learning.",
        highlights: [
            "GAN-based imputation",
            "Federated learning architecture",
            "Time-series forecasting with CNN-LSTM pipeline",
            "Cross-city generalization and robust evaluation"
        ],
        tags: ["Federated Learning", "GAN", "CNN", "LSTM", "Time Series", "Research"],
        live: "",
        code: "https://github.com/ShwetaRoy17"
    },
    {
        title: "betaAi",
        type: "Real-Time Application",
        emoji: "⚽",
        background: "linear-gradient(135deg,#141108,#0d0a05)",
        description:
            "Football live score streaming application focused on real-time frontend experience, with clear potential for backend extension through API orchestration, caching, and asynchronous event processing.",
        highlights: [
            "Real-time score visualization",
            "Frontend application flow",
            "Scope for API layer integration",
            "Can be extended with Redis and async backend processing"
        ],
        tags: ["Frontend", "Real-time UI", "JavaScript", "React", "Sports Data"],
        live: "",
        code: "https://github.com/ShwetaRoy17"
    }
];

export const experienceTabs = [
    {
        id: "work",
        label: "Professional Experience",
        icon: "briefcase",
        date: "Current + Previous",
        role: "Software Engineer / Intern",
        company: "Kotak Tech · Morgan Stanley · Samsung Research",
        points: [
            "Worked on scalable, low-latency engineering problems across fintech and real-time streaming platforms.",
            "Built and optimized high-performance APIs, multithreaded systems, and distributed streaming pipelines.",
            "Contributed to backend systems and engineering flows supporting large-scale production traffic and user-facing reliability.",
            "Gained experience across performance optimization, concurrency, distributed systems, and production-grade backend development."
        ],
        chips: ["Backend", "Low Latency", "Concurrency", "Distributed Systems", "Production Systems"]
    },
    {
        id: "research",
        label: "Research",
        icon: "researchgate",
        date: "Published Work",
        role: "ML Research Contributor",
        company: "Elsevier Journal Publication",
        points: [
            "Worked on a Federated GAN-CNN-LSTM framework for AQI forecasting across distributed city-level datasets.",
            "Focused on robust data imputation, communication-efficient training, and generalizable forecasting performance.",
            "Combined deep learning system design with distributed learning concepts and evaluation rigor.",
            "Strengthened ability to think about engineering problems from both research and systems perspectives."
        ],
        chips: ["Federated Learning", "GAN", "CNN-LSTM", "Research", "Forecasting"]
    },
    {
        id: "projects",
        label: "Projects",
        icon: "code",
        date: "Hands-on Engineering",
        role: "Systems & Backend Project Builder",
        company: "Independent Projects",
        companyLink: "https://github.com/ShwetaRoy17",
        points: [
            "Built projects in systems programming, concurrent crawling, research ML systems, and real-time application flows.",
            "Used projects to demonstrate backend depth in process execution, concurrency, distributed design, and applied machine learning.",
            "Focused on implementation detail, engineering tradeoffs, and production-oriented thinking rather than surface-level UI only.",
            "Maintained public code presence on GitHub to showcase practical engineering ability."
        ],
        chips: ["Go", "Backend", "Systems", "ML Systems", "GitHub"]
    }
];

export const experiences = [
    {
        company: "Kotak Tech",
        timeline: "Jun 2025 - Present",
        location: "Hyderabad, India",
        stack: ["Spring Boot", "AWS", "OpenSearch", "MySQL", "REST APIs"]
    },
    {
        company: "Samsung Research Institute",
        timeline: "Jan 2025 - Jun 2025",
        location: "Noida, India",
        stack: ["Spring Boot", "C++", "AWS", "Python", "FFmpeg"]
    },
    {
        company: "Morgan Stanley",
        timeline: "May 2024 - Jul 2024",
        location: "Mumbai, India",
        stack: ["Spring Boot", "SQL", "Snowflake", "Kafka", "Java Multithreading"]
    }
];


export const contactLinks = [
    {
        icon:  "github",
        label: "GitHub",
        value: "github.com/ShwetaRoy17",
        href: "https://github.com/ShwetaRoy17"
    },
    {
        icon: "linkedin",
        label: "LinkedIn",
        value: "Shweta Roy",
        href: "https://www.linkedin.com/in/shweta-roy-104145227/"
    },
    {
        icon: "leetcode",
        label: "LeetCode",
        value: "1000+ problems",
        href: "https://leetcode.com/u/shwetaroy1712/"
    },
    {
        icon: "envelope",
        label: "Email",
        value: "royshweta1712@example.com",
        href: "royshweta1712@example.com"
    }
];
