export const profile = {
  name: "Dhruv Solanki",
  role: "AI Full Stack Developer",
  tagline:
    "Entry-level engineer building scalable full-stack apps with React, Next.js, Node, and modern AI-powered tools",
  location: "Mumbai, India",
  email: "dhruvsolanki0129@gmail.com",

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dhruv-solanki-699679313/",
    },
    { label: "X", href: "https://x.com/DhruvSolanki205" },
  ],

  platforms: [
    { label: "LeetCode", href: "https://leetcode.com/u/yyjfUbDoSh/" },
    { label: "GitHub", href: "https://github.com/DhruvSolanki01259" },
  ],

  about: [
    "I`m an aspiring Software Development Engineer with a strong foundation in Data Structures and Algorithms in C++, along with full-stack development using the MERN stack and Next.js.",
    "I specialize in building scalable and performant web applications using React, Next.js, Node.js, Express, and MongoDB, with experience in authentication systems, REST APIs, and modern UI development using Tailwind CSS.",
    "I focus on writing clean, modular, and maintainable code while improving performance, security, and user experience across applications.",
    "I`m actively exploring modern AI development workflows, including LLM integrations and AI-assisted application design, to build smarter and more efficient products.",
    "My goal is to grow into a strong software engineer capable of designing real-world systems that are fast, reliable, and impactful.",
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech.)",
      institute: "K. J. Somaiya Institute of Technology",
      period: "2022 - 2026",
      field: "Computer Engineering",
      highlights: ["GPA: 8.3"],
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institute: "Acharya Ambalal V. Patel Junior College",
      period: "2020 - 2022",
      highlights: ["Percentage: 60%"],
    },
    {
      degree: "Secondary Education (SSC)",
      institute: "St. Lawrence High School",
      period: "Till 2020",
      highlights: ["Percentage: 70%"],
    },
  ],

  skills: [
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Axios",
    "Git & GitHub",

    "Data Structures & Algorithms (C++)",
    "Number Theory (GCD, LCM, Modular Arithmetic, Sieve)",
    "Pointers & Memory Management (C++)",
    "Problem Solving",

    "Basics of AI Tools & LLM Workflows (RAG, LangChain concepts - learning phase)",
  ],

  projects: {
    AI: [
      {
        title: "AI Study Buddy",
        description:
          "An AI-powered learning assistant that converts programming questions into structured, beginner-friendly explanations with topics, examples, and summaries. Built using Next.js, LangChain, and multiple LLM providers like OpenAI, Gemini, and Groq.",
        tags: [
          "Next.js",
          "React",
          "Node.js",
          "TypeScript",
          "LangChain",
          "AI Integration",
          "Groq API",
          "OpenAI API",
          "Gemini API",
          "Zod",
          "Structured Output",
          "Prompt Engineering",
        ],
        highlights: [
          "Structured JSON responses using Zod",
          "Multi-model support (OpenAI, Gemini, Groq)",
          "Prompt engineering with strict formatting rules",
          "Real-time AI Q&A UI with Next.js",
        ],
        links: {
          live: "https://ai-study-buddy-agent.vercel.app/",
          repo: "https://github.com/DhruvSolanki01259/ai-study-buddy-agent",
          document: "#",
        },
        imageAlt:
          "AI Study Buddy AI Agent - Next.js + LangChain Project Showcase",
        image: "/ai-study-buddy.jpg",
      },
      {
        title: "AI Weather Tool Calling Agent",
        description:
          "An intelligent AI-powered agent that routes user queries between real-time weather API tools and direct LLM responses using a structured tool-calling architecture built with Next.js, OpenAI, and Zod validation.",

        tags: [
          "Next.js",
          "React",
          "Zod",
          "AI Agents",
          "Tool Calling",
          "Weather API",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "LangChain",
          "AI Integration",
          "Groq API",
          "OpenAI API",
          "Gemini API",
          "Structured Output",
          "Prompt Engineering",
        ],

        highlights: [
          "Smart intent-based routing (weather vs general chat)",
          "Structured JSON responses using Zod validation",
          "Tool-calling architecture (Router → Executor → Formatter)",
          "Real-time weather data integration via external API",
          "Separation of reasoning (LLM) and execution (tools)",
          "Production-ready backend AI agent design",
        ],

        links: {
          live: "https://ai-weather-tool-agent.vercel.app/",
          repo: "https://github.com/DhruvSolanki01259/ai-weather-tool-agent",
          document: "#",
        },

        imageAlt:
          "AI Weather Tool Calling Agent - Next.js AI Agent with Weather API integration",

        image: "/ai-weather-agent.jpg",
      },
    ],

    "Full Stack": [
      {
        title: "Blogify",
        description:
          "A full-stack blogging platform built with the MERN stack, featuring authentication, CRUD operations for blogs, and email notifications using Resend. Supports dark/light mode, responsive UI, and advanced search functionality.",
        tags: [
          "React",
          "Node",
          "Express",
          "MongoDB",
          "Resend",
          "Tailwind CSS",
          "Framer Motion",
        ],
        links: {
          live: "https://web-blogify.vercel.app/",
          repo: "https://github.com/DhruvSolanki01259/Blog-App",
          document:
            "https://web-blogify.vercel.app/blogs/full-stack-blogging-platform",
        },
        imageAlt: "Blogify Project Screenshot",
        image: "/blogify.png",
      },
      {
        title: "Auth Application",
        description:
          "Demonstrating a secure user authentication flow with email verification and password reset functionality.",
        tags: ["React", "Node", "Express", "MongoDB", "Resend"],
        links: {
          live: "https://auth-application-ds.vercel.app/",
          repo: "https://github.com/DhruvSolanki01259/Auth-Application",
          document:
            "https://web-blogify.vercel.app/blogs/full-stack-mern-authentication-app",
        },
        imageAlt: "Auth Application",
        image: "/auth-application.png",
      },
    ],

    Frontend: [
      {
        title: "Sorting Visualizer",
        description:
          "Visual tool showcasing how different sorting algorithms work step by step.",
        tags: ["React", "JavaScript", "Algorithms"],
        links: {
          live: "https://ds-sorting-visualizer-ds.vercel.app/",
          repo: "https://github.com/DhruvSolanki01259/Sorting-Visualizer",
          document:
            "https://web-blogify.vercel.app/blogs/visualize-sorting-algorithms-in-react-building-a-sorting-visualizer",
        },
        imageAlt: "Sorting Visualizer",
        image: "/sorting-visualizer.png",
      },
    ],
  },
} as const;