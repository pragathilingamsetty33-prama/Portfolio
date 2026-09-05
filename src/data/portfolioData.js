/**
 * Portfolio Data Source of Truth
 * Derived strictly and authentically from resume.pdf.
 * No fabricated positions, repositories, or external metrics.
 */

export const personalInfo = {
  name: "Pragathi Lingamsetty",
  headline: "Software Engineer | Java Developer",
  email: "pragathilingamsetty33@gmail.com",
  phone: "7093444992",
  phoneFormatted: "+91 7093444992",
  location: "Guntur, India",
  linkedin: "https://www.linkedin.com/in/pragathi-lingamsetty",
  linkedinDisplay: "linkedin.com/in/pragathi-lingamsetty",
  github: "https://github.com/pragathilingamsetty33-prama",
  githubDisplay: "github.com/pragathilingamsetty33-prama",
  resumePath: "/resume.pdf",
  resumeFileName: "resume.pdf",
  bio: "Software Engineer and Java Developer with a strong academic background in Computer Applications (MCA). Skilled in designing reliable backend architectures with Java, Spring Boot, and PostgreSQL, mastering Data Structures & Algorithms, and crafting modular React interfaces. Experienced in engineering secure, zero-knowledge end-to-end encrypted collaboration systems and location-aware platforms with GPS geofencing.",
  declaration: "I hereby declare that all the details provided above are true, complete, and correct to the best of my knowledge and belief."
};

export const skillsData = [
  {
    category: "Java & Core Engineering",
    icon: "Code2",
    description: "Robust object-oriented programming, clean design patterns, and RESTful service engineering.",
    skills: [
      { name: "Java", level: "Primary" },
      { name: "Object-Oriented Programming (OOP)", level: "Core" },
      { name: "Exception Handling", level: "Core" },
      { name: "REST APIs Integration", level: "Core" },
      { name: "Spring Boot", level: "Framework" }
    ]
  },
  {
    category: "Data Structures & Algorithms",
    icon: "Binary",
    description: "Strong theoretical and practical proficiency in algorithmic problem solving and resource efficiency.",
    skills: [
      { name: "Time & Space Complexity Analysis", level: "Analytical" },
      { name: "Arrays & Linked Lists", level: "Linear" },
      { name: "Stacks & Queues", level: "Linear" },
      { name: "Trees & Graphs", level: "Non-Linear" },
      { name: "Searching Algorithms", level: "Algorithms" },
      { name: "Sorting Algorithms", level: "Algorithms" }
    ]
  },
  {
    category: "PostgreSQL & Database Engineering",
    icon: "Database",
    description: "Enterprise relational schema architecture, transactional safety, and query optimization.",
    skills: [
      { name: "PostgreSQL", level: "Database" },
      { name: "Relational Schema Design", level: "Architecture" },
      { name: "Table Constraints & Data Integrity", level: "Modeling" },
      { name: "Foreign Keys & Relations", level: "Modeling" },
      { name: "ACID Transactions", level: "Reliability" },
      { name: "High-Throughput Query Optimization", level: "Performance" }
    ]
  },
  {
    category: "Frontend & Web Technologies",
    icon: "Layout",
    description: "Building responsive, modern, and high-performance component-driven client applications.",
    skills: [
      { name: "React", level: "UI Library" },
      { name: "Reusable UI Components", level: "Frontend" },
      { name: "Location Services & Background Tracking", level: "Client APIs" },
      { name: "STOMP over WebSockets", level: "Real-Time" },
      { name: "Browser-Side Encryption", level: "Security" }
    ]
  }
];

export const projectsData = [
  {
    id: "prama",
    title: "Prama – End-to-End Encrypted Collaboration Platform",
    period: "02/2026 – 03/2026",
    badge: "Full-Stack Security & Real-Time",
    description:
      "A fully functional, zero-knowledge, end-to-end encrypted (E2EE) web application engineered for high-security project discussions, mentorship session management, and real-time collaboration.",
    keyPoints: [
      "End-to-End Encryption (E2EE): Cryptographic payloads are sealed browser-side so messages remain completely private before reaching the network.",
      "Zero-Knowledge Server Architecture: The server acts strictly as an untrusted router for encrypted byte streams without possession of cryptographic private keys or readable data.",
      "STOMP over WebSockets: Implements low-latency, bidirectional real-time messaging pipelines for simultaneous participant communication.",
      "Secure Mentorship Workflows: Tailored environments for confidential project guidance, real-time code reviews, and structured session coordination."
    ],
    technologies: [
      "Browser-Side Encryption",
      "Zero-Knowledge Architecture",
      "STOMP Protocol",
      "WebSockets",
      "React",
      "E2EE Security"
    ],
    // Note: Project repository links are currently unavailable. No fake links are provided.
    hasRepoLink: false
  },
  {
    id: "smart-attendance",
    title: "AI-Based Smart Attendance with Location Tracking",
    period: "12/2025 – 01/2026",
    badge: "Backend & Systems Security",
    description:
      "Built a secure Smart Attendance System using Java, Spring Boot, and PostgreSQL to eliminate fake and proxy attendance through verified physical positioning and hardware validation.",
    keyPoints: [
      "GPS Geofencing: Inspects and enforces real-time geographic boundaries to guarantee that users are physically located at authorized premises before attendance is validated.",
      "Hardware ID Verification: Enforces one-to-one phone device authentication via unique hardware identifiers, preventing unauthorized proxy check-ins.",
      "Secure Login Tokens: Implements tamper-resistant authentication tokens to ensure protected, authorized communication with backend microservices.",
      "High-Performance Database Engine: Fine-tuned PostgreSQL queries and relational indexing to support concurrent, instantaneous check-ins for hundreds of users during peak morning hours."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "GPS Geofencing",
      "Hardware ID Verification",
      "Secure Authentication Tokens"
    ],
    // Note: Project repository links are currently unavailable. No fake links are provided.
    hasRepoLink: false
  },
  {
    id: "fraud-detection",
    title: "AI-Based Fraud Detection In Online Payments",
    period: "04/2025 – 05/2025",
    badge: "Mini Project",
    description:
      "Mini Project focused on exploring artificial intelligence methodologies to detect anomalous transactions, identify suspicious financial behavior, and mitigate online payment fraud.",
    keyPoints: [
      "Payment Security Focus: Explored patterns in high-velocity digital payment streams to distinguish normal transactions from suspicious activities.",
      "Anomaly Detection: Applied algorithmic screening to flag potential fraud vectors in real time.",
      "Academic Research & Implementation: Developed as an intensive mini project evaluating security safeguards in digital commerce."
    ],
    technologies: [
      "AI & Anomaly Detection",
      "Payment Security",
      "Financial Fraud Prevention",
      "Data Analysis"
    ],
    // Note: Project repository links are currently unavailable. No fake links are provided.
    hasRepoLink: false
  }
];

export const educationData = [
  {
    degree: "Master's of Computer Applications (MCA)",
    institution: "Vignan's Foundation for Science, Technology & Research (Deemed to be University)",
    period: "08/2024 – 03/2026",
    location: "Guntur, India",
    score: "8.0 CGPA",
    scoreLabel: "CGPA",
    highlights: "Advanced studies in Software Engineering, Advanced Database Management Systems, Distributed Computing, and Modern Application Architecture."
  },
  {
    degree: "Bachelor of Science & Computer Science",
    institution: "Abhyudaya Mahila Degree College",
    period: "06/2021 – 05/2024",
    location: "Guntur, India",
    score: "8.4 CGPA",
    scoreLabel: "CGPA",
    highlights: "Foundational coursework in Computer Science, Object-Oriented Programming, Data Structures, Mathematics, and Database Design."
  },
  {
    degree: "Board of Intermediate Education-AP",
    institution: "Sri Chaitanya Junior College",
    period: "02/2019 – 03/2021",
    location: "Guntur, India",
    score: "819 / 1000",
    scoreLabel: "Score",
    highlights: "Rigorous higher secondary education specializing in Mathematics, Physics, and Chemistry."
  }
];

export const certificationsData = [
  {
    title: "IBM SkillsBuild AI Fundamentals Certified",
    issuer: "IBM SkillsBuild",
    category: "Artificial Intelligence",
    description: "Comprehensive foundational certification covering core principles of artificial intelligence, machine learning concepts, neural network foundations, and practical AI applications."
  },
  {
    title: "IBM SkillsBuild - Customer Engagement: Communication and Personality Dynamics",
    issuer: "IBM SkillsBuild",
    category: "Professional Communication",
    description: "Professional certification validating effective interpersonal dynamics, professional stakeholder communication, active collaboration, and client engagement."
  },
  {
    title: "Ethical and Responsible AI Oath Certificate",
    issuer: "AI Ethics & Governance Initiative",
    category: "AI Governance & Ethics",
    description: "Formal certification attesting to commitment toward ethical AI development, algorithmic transparency, data privacy, and mitigation of bias in computational systems."
  }
];

export const interestsData = [
  { name: "Badminton", icon: "Activity", note: "Agility & Focus" },
  { name: "Puzzle Solving Games", icon: "Puzzle", note: "Analytical & Logical Thinking" },
  { name: "Listening to Music", icon: "Headphones", note: "Relaxation & Creative Flow" }
];
