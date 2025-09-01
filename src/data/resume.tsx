import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aaditya Kumar",
  initials: "Aadi",
  location: "India",
  description: "Engineering elegant solutions to complex problems",
  summary:
    "Hi, I'm Korella Aaditya, specializing in Artificial Intelligence and Machine Learning with a focus on Agentic AI, multi-agent orchestration, and LLM-based systems.  I'm passionate about building scalable AI systems that integrate reasoning, orchestration, and dynamic interaction.",
  avatarUrl: "/anime.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Rust",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Prisma",
    "PostgreSQL",
    "LangChain",
    "Ollama",
    "MCP",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "aadityakumar4042@gmail.com",
    tel: "8555065596",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aaditya-5281",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Aaditya26082004",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@aadityakumar26082004", // replace with your Medium profile
        icon: Icons.medium,
        navbar: true,
      },
      Gmail: {
        name: "Gmail",
        url: "mailto:aadityakumar4042@gmail.com", // use your email address
        icon: Icons.gmail,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aaditya-kumar-0b662224a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/12YS7NWKeuRGwOwDVksAs9w3nauG3sa8M/view",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "VNR Vignana Jyothi Institute of Engineering and Technology",
      href: "https://vnrvjiet.ac.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "/vnrlogo.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "VISWAM.AI – Summer of AI 2025 | IIIT Hyderabad (Hybrid)",
      title: "AI Developer Intern",
      location: "Remote",
      type: "Internship",
      start: "May 2025",
      end: "July 2025",
      href: "",
      logoUrl: "/viswam.svg",
      description:
        "During my internship as an AI Developer Intern at VISWAM.AI – Summer of AI 2025, a prestigious program supported by IIIT Hyderabad, Meta, and Swecha, I worked on building practical AI solutions in a collaborative, open-source environment. I gained hands-on experience in Python, DevOps, and collaborative software development while fine-tuning AI models on locally sourced datasets. My focus was on deploying these models into real-world applications, particularly in agentic AI systems that involved multi-agent orchestration, reasoning, and real-time interaction. This experience strengthened my foundational knowledge in AI and deepened my expertise in developing scalable, intelligent systems for impactful use cases.",
      badges: [],
    },
  ],
  projects: [
    {
      title: "Agentic Deep Researcher",
      href: "https://github.com/Aaditya-5281/Agentic-Deep-Researcher",
      dates: "April, 2025",
      active: true,
      description:
        "AI-powered research assistant designed to automate and enhance the process of gathering, analyzing, and synthesizing information from the web. By leveraging multi-agent orchestration, integration with external APIs, and a user-friendly web interface.",
      technologies: [
        "Streamlit",
        "Python",
        "LangChain",
        "OpenAI",
        "Ollama",
        "MCP",
        "CrewAI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aaditya-5281/Agentic-Deep-Researcher",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/Agent.mp4",
    },
    {
      title: "Travel Planner",
      href: "https://github.com/Aaditya-5281/travel",
      dates: "October, 2024",
      active: true,
      description:
        "A powerful AI-powered travel planning application that creates personalized travel itineraries using multiple AI agents.",
      technologies: ["Python", "AutoGen", "LangChain", "OpenAI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aaditya-5281/travel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/travel_planner.mp4",
    },
    {
      title: "Finance Advisor",
      href: "https://github.com/Aaditya-5281/Finance-Advisor",
      dates: "August 16th - 17th, 2024",
      active: true,
      description:
        "The AI Financial Coach is a personalized financial advisor powered by Google's ADK (Agent Development Kit) framework. This app provides comprehensive financial analysis and recommendations based on user inputs including income, expenses, debts, and financial goals.",
      technologies: [
        "Python",
        "AutoGen",
        "LangChain",
        "Gemini",
        "Google ADK",
        "Streamlit",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aaditya-5281/Finance-Advisor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/Finance_Agent.mp4 ",
    },
    {
      title: "Investo",
      href: "https://github.com/Aaditya-5281/Company_research",
      dates: "Feb 2024 - May 2024",
      active: true,
      description:
        "A powerful AI-powered financial research tool that generates comprehensive company reports using multiple specialized AI agents. This application combines web search capabilities, stock analysis, and AI-driven report generation to provide detailed insights about companies.",
      technologies: ["Python", "AutoGen", "LangChain", "OpenAI", "Streamlit"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aaditya-5281/Company_research",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/Investo.mp4",
    },
    {
      title: "Contently",
      href: "https://github.com/Aaditya-5281/Contently",
      dates: "Aug 2025",
      active: true,
      description:
        "An intelligent agent that turns your newsletters and blog articles into engaging posts.",
      technologies: ["Python", "LangGraph", "LangChain", "LangSmith", "Gemini"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aaditya-5281/Contently",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/linked-in.mp4",
    },
    {
      title: "Multilingual Reasoning LLM",
      href: "https://github.com/Aaditya-5281/Multilingual-Reasoning-LLM",
      dates: "Aug 2025",
      active: true,
      description:
        "Fine-tuned an open-source GPT-OSS model using LoRA/QLoRA on a custom multilingual reasoning dataset to enhance step-by-step logical reasoning across multiple languages. Optimized training with Unsloth for reduced VRAM usage on NVIDIA T4, including explicit GPU memory management for large context handling. Achieved improved reasoning coherence and cross-lingual consistency in inference, enabling the model to tackle complex problem-solving scenarios beyond English.",
      technologies: ["Python", "Transformer", "LoRA", "Unsloth", "Fine-tuning"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aaditya-5281/Multilingual-Reasoning-LLM",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/finetune.mp4",
    },
    {
      title: "Geeta-Bot",
      href: "https://github.com/Aaditya-5281/Geeta_Bot",
      dates: "Sep 2025",
      active: true,
      description:
        "Geeta-Bot is a Telegram bot that leverages AI to answer spiritual questions, provide guidance, and share wisdom inspired by the Bhagavad Gita and other spiritual teachings.",
      technologies: ["Python", "LangChain", "Gemini", "Bot API", "Agentic AI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aaditya-5281/Geeta_Bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/bot.mp4",
    },
  ],
  Milestones: [
    {
      title: "Grop",
      dates: "August, 2025",
      description:
        "A simple grep-like tool written in Rust for searching patterns in files.",
      location: "",
      image: "./terminal.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aaditya-5281/Grep",
        },
      ],
    },

    {
      title: "Brainly",
      dates: "July, 2025",
      description:
        "Brainly is your personal knowledge management system designed to store, organize, and access your thoughts, ideas, and learning materials. With sleek, intuitive UI components and powerful search and organization features, Brainly is the ultimate digital brain for managing your thoughts.",
      location: "",
      image: "./brain.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aaditya-5281/Brainly",
        },
      ],
    },

    {
      title: "ZapPay",
      dates: "July, 2025",
      description:
        "ZapPay is your lightning-fast, secure, and seamless digital payment solution designed for the modern world. Whether you're sending money to friends, paying for groceries, or managing your business transactions — ZapPay makes it instant, effortless, and reliable.",
      location: "",
      image: "./money.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aaditya-5281/ZapPay",
        },
      ],
    },
    {
      title: "Vibe",
      dates: "July , 2025",
      description:
        "Vibe is a chill, modern chat app that lets users drop into themed rooms and connect in real-time. Whether it’s work, study, or casual hangouts — create your vibe, and chat away.",
      location: "",
      image: "./vibe.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aaditya-5281/Vibe",
        },
      ],
    },
    {
      title: "Machine Learning",
      dates: "May 3, 2025",
      description: "Machine Learning Resources ",
      location: "",
      image: "./ai.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aaditya-5281/AI-ML",
        },
      ],
    },
    {
      title: "Student Training & Certification Management Platform",
      dates: "April 8th, 2025",
      description:
        "A comprehensive web application for managing staff training programs and certifications. ",
      location: "",
      image: "./book.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aaditya-5281/STCMP",
        },
      ],
    },
    {
      title: "Research Assistant",
      dates: "April 1st, 2025",
      description:
        "Research Assistant is a tool designed to help researchers and academics streamline their literature review process. It provides features for document analysis, paper summarization, and research synthesis using advanced AI capabilities.",
      location: "",
      image: "./scientist.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aaditya-5281/research-assistant",
        },
      ],
    },
  ],
} as const;
