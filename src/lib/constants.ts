import {
  Code2,
  Brain,
  Wrench,
  Database,
  type LucideIcon,
} from "lucide-react";
import { config } from "./config";

// ─── Personal Info (sourced from central config) ────────────────────────────
export const PERSONAL_INFO = {
  name: config.personal.name,
  title: config.personal.title,
  tagline: config.personal.tagline,
  email: config.personal.email,
  github: config.socials.github,
  linkedin: config.socials.linkedin,
  location: config.personal.location,
  resumePath: config.personal.resumePath,
  profileImage: config.personal.profileImage,
} as const;

// ─── Typing Animation Strings ───────────────────────────────────────────────
export const TYPING_STRINGS = [...config.typingStrings];

// ─── Statistics ──────────────────────────────────────────────────────────────
export const STATS = [
  { label: "Certifications", value: "4+", suffix: "" },
  { label: "National Hackathons", value: "3+", suffix: "" },
  { label: "AI Internship", value: "1", suffix: "Experience" },
  { label: "Programming Languages", value: "4+", suffix: "" },
] as const;

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "C", "C++"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Feature Engineering",
      "Model Training",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["GitHub", "Jupyter Notebook", "Google Colab", "OpenCV"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "AI Developer Intern",
    company: "Viswam.ai",
    period: "2024 — Present",
    description:
      "Contributing to cutting-edge AI solutions by developing machine learning models and building robust data pipelines.",
    highlights: [
      "ML model development and deployment",
      "Feature engineering for production systems",
      "Data preprocessing and cleaning pipelines",
      "Model evaluation and performance tuning",
      "Cross-functional team collaboration",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "ml-sentiment",
    title: "Sentiment Analysis Engine",
    description:
      "End-to-end ML pipeline for real-time sentiment analysis on social media data using NLP techniques.",
    longDescription:
      "Built a comprehensive sentiment analysis system that processes social media feeds in real-time. The pipeline includes data ingestion, preprocessing, feature extraction using TF-IDF and word embeddings, model training with ensemble methods, and a REST API for inference. Achieved 92% accuracy on benchmark datasets.",
    image: "/projects/sentiment.svg",
    technologies: ["Python", "Scikit-learn", "NLTK", "Flask", "Pandas"],
    category: "ML",
    githubUrl: "https://github.com/sirivennela/sentiment-analysis",
    featured: true,
  },
  {
    id: "ai-chatbot",
    title: "Intelligent Chatbot",
    description:
      "Context-aware conversational AI built with transformer architectures and fine-tuned on domain-specific data.",
    longDescription:
      "Developed an intelligent chatbot system leveraging transformer-based architectures. The model was fine-tuned on domain-specific conversation data to provide contextually relevant responses. Includes a web interface, conversation memory, and sentiment-aware response generation.",
    image: "/projects/chatbot.svg",
    technologies: ["Python", "TensorFlow", "Transformers", "FastAPI", "React"],
    category: "AI",
    githubUrl: "https://github.com/sirivennela/ai-chatbot",
    featured: true,
  },
  {
    id: "image-classifier",
    title: "Image Classification System",
    description:
      "Deep learning image classifier with transfer learning, achieving high accuracy on custom datasets.",
    longDescription:
      "Built a robust image classification system using convolutional neural networks with transfer learning. Leveraged pre-trained ResNet and VGG architectures, fine-tuned on custom datasets. Includes data augmentation pipeline, model comparison framework, and a Streamlit-based demo interface.",
    image: "/projects/classifier.svg",
    technologies: ["Python", "PyTorch", "OpenCV", "Streamlit", "NumPy"],
    category: "AI",
    githubUrl: "https://github.com/sirivennela/image-classifier",
    featured: true,
  },
  {
    id: "data-dashboard",
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard for ML model monitoring and performance tracking.",
    longDescription:
      "Created an interactive analytics dashboard for monitoring ML model performance in production. Features real-time metrics visualization, model drift detection, A/B test result analysis, and automated alerting. Built with modern web technologies for a seamless user experience.",
    image: "/projects/dashboard.svg",
    technologies: ["Python", "Plotly", "Dash", "Pandas", "MongoDB"],
    category: "Python",
    githubUrl: "https://github.com/sirivennela/analytics-dashboard",
    liveUrl: "https://analytics-demo.vercel.app",
    featured: false,
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description:
      "A premium, performance-optimized personal portfolio built with Next.js and Framer Motion.",
    longDescription:
      "Designed and developed a world-class personal portfolio website featuring smooth animations, dark/light mode, command palette, and a minimalist luxury aesthetic. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for a premium user experience.",
    image: "/projects/portfolio.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    githubUrl: "https://github.com/sirivennela/portfolio",
    liveUrl: "https://sirivennela.dev",
    featured: false,
  },
];

// ─── Hackathons ──────────────────────────────────────────────────────────────
export interface Hackathon {
  title: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  result?: string;
}

export const HACKATHONS: Hackathon[] = [
  {
    title: "Agentic Ethereum Hackathon India",
    date: "2024",
    location: "India",
    description:
      "Competed in the Agentic Ethereum Hackathon, building decentralized AI solutions on the Ethereum blockchain.",
    highlights: [
      "Developed smart contract integrations with AI agents",
      "Built decentralized inference pipeline",
      "Collaborated with cross-functional teams",
    ],
    result: "Participant",
  },
  {
    title: "IndiaAI Impact Gen-AI Hackathon",
    date: "2024",
    location: "India",
    description:
      "Participated in the IndiaAI Impact Gen-AI Hackathon, focusing on generative AI solutions for real-world problems.",
    highlights: [
      "Built generative AI prototype for social impact",
      "Implemented prompt engineering strategies",
      "Presented solution to industry judges",
    ],
    result: "Participant",
  },
  {
    title: "HackWithHyderabad",
    date: "2024",
    location: "Hyderabad, India",
    description:
      "Competed in HackWithHyderabad, developing innovative solutions under time pressure with a focus on AI and ML.",
    highlights: [
      "Rapid prototyping under 48-hour deadline",
      "Full-stack development with AI integration",
      "Pitched solution to panel of tech leaders",
    ],
    result: "Participant",
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Salesforce Administrator",
    issuer: "Salesforce",
    date: "2024",
    description:
      "Certified Salesforce Administrator with expertise in configuring and managing Salesforce environments.",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description:
      "Advanced Python programming certification covering OOP, file handling, and modules.",
  },
  {
    title: "Operating Systems Lab",
    issuer: "NPTEL / IIT",
    date: "2024",
    description:
      "Certification in Operating Systems concepts including process management, memory, and file systems.",
  },
  {
    title: "AI Summer Internship",
    issuer: "Viswam.ai",
    date: "2024",
    description:
      "Certified completion of AI development internship with hands-on ML model building and deployment.",
  },
];

// ─── Achievements ────────────────────────────────────────────────────────────
export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "3x National Hackathon Participant",
    description:
      "Competed in three national-level hackathons including Agentic Ethereum, IndiaAI Impact Gen-AI, and HackWithHyderabad.",
    icon: "trophy",
  },
  {
    title: "AI Developer Intern at Viswam.ai",
    description:
      "Selected for a competitive AI development internship, working on production ML systems.",
    icon: "briefcase",
  },
  {
    title: "4+ Professional Certifications",
    description:
      "Earned certifications spanning Salesforce, Python, Operating Systems, and AI development.",
    icon: "award",
  },
  {
    title: "B.Tech CSE (AI & ML) at VJIT",
    description:
      "Pursuing specialized Computer Science degree with focus on Artificial Intelligence and Machine Learning.",
    icon: "graduation",
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

// ─── Command Palette ────────────────────────────────────────────────────────
export interface Command {
  label: string;
  shortcut?: string;
  action: string;
  section: string;
}

export const COMMANDS: Command[] = [
  { label: "Home", shortcut: "H", action: "#hero", section: "Navigation" },
  { label: "About", shortcut: "A", action: "#about", section: "Navigation" },
  { label: "Skills", shortcut: "S", action: "#skills", section: "Navigation" },
  { label: "Experience", shortcut: "E", action: "#experience", section: "Navigation" },
  { label: "Projects", shortcut: "P", action: "#projects", section: "Navigation" },
  { label: "Certifications", shortcut: "C", action: "#certifications", section: "Navigation" },
  { label: "Contact", shortcut: "K", action: "#contact", section: "Navigation" },
  { label: "Download Resume", shortcut: "R", action: "resume", section: "Actions" },
  { label: "Toggle Theme", shortcut: "T", action: "theme", section: "Actions" },
  { label: "Go to GitHub", shortcut: "G", action: "github", section: "Links" },
  { label: "Go to LinkedIn", shortcut: "L", action: "linkedin", section: "Links" },
];
