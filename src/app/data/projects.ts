export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}
export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  role: string;
  duration: string;
  tools: string[];
  images: string[];
  outcomes: string[];
  prototypeUrl?: string;
  features: ProjectFeature[];
  wireframes?: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "theatre-website",
    wireframes: ["/src/Pic/Theatrewf.jpg", "/src/Pic/Theatrewf2.jpg"],
    features: [
      {
        icon: "🎭",
        title: "Show Listings",
        description: "Browse upcoming theatre performances in a clear layout.",
      },
      {
        icon: "📄",
        title: "Show Details",
        description: "View detailed information about each performance.",
      },
      {
        icon: "🧭",
        title: "Simple Navigation",
        description: "Easily explore shows with an intuitive interface.",
      },
      {
        icon: "✨",
        title: "Visual Experience",
        description:
          "Designed to highlight performances with engaging visuals.",
      },
    ],
    title: "THEATRE Website",
    category: "UI Design",
    year: "2026 - Developing",
    image: "/src/Pic/Theatre.png",
    prototypeUrl:
      "https://www.figma.com/proto/GykIW8fudJcktJrsXM0GdV/THEATRE-SHOW?node-id=2-771&t=VbeiEmPPRG8SrSUI-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
    description:
      "Designed a theatre booking experience including show details and interactive browsing flow.",
    tags: ["Web", "Figma", "UI design"],
    overview:
      "This project explores the design of a theatre website that presents upcoming performances and provides detailed information about each show. The interface focuses on making it easy for users to browse performances and access relevant show details through a clean and intuitive layout.",
    problem:
      "In Thailand, theatre-related websites are relatively limited and often lack a strong visual identity that reflects the dramatic and immersive nature of theatre performances. Many existing sites present show information in a plain and functional way, which does not capture the atmosphere and excitement that audiences associate with live theatre. This can make discovering performances feel less engaging.",
    solution:
      "This project explores a theatre website concept that emphasizes atmosphere and visual storytelling. The interface highlights upcoming performances through large imagery, clear typography, and structured layouts, allowing users to easily browse shows and access detailed information while maintaining a dramatic and immersive visual style.",
    role: "UI/UX Designer (Personal Project)",
    duration: "3 weeks",
    tools: ["Figma", "Adobe Photoshop"],

    images: [
      "/src/Pic/Theatre.png",
      "/src/Pic/Theatrefull.png",
      "/src/Pic/Theatrefull2.png",
    ],
    outcomes: [
      "Created 15+ screens covering main user flows",
      "Reduced steps for money transfer from 6 to 3",
      "Received positive feedback from 10 user testing sessions",
      "Featured in university design showcase",
    ],
    process: [
      {
        title: "Research & Analysis",
        description:
          "Analyzed 5 popular banking apps, conducted competitive analysis, and created user personas based on surveys with 30 participants.",
      },
      {
        title: "Ideation & Wireframing",
        description:
          "Sketched multiple layout options, created low-fidelity wireframes, and tested with peers to gather initial feedback.",
      },
      {
        title: "Visual Design",
        description:
          "Developed a cohesive design system with colors, typography, and components. Created high-fidelity mockups in Figma.",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Built an interactive prototype and conducted usability testing with 10 participants to refine the design.",
      },
    ],
  },
  {
    id: 2,
    slug: "animal-diary",
    title: "Animal Diary",
    wireframes: [
      "/src/Pic/Animalwf.jpg",
      "/src/Pic/Animalwf2.jpg",
      "/src/Pic/Animalwf3.jpg",
      "/src/Pic/Animalwf4.jpg",
    ],
    features: [
      {
        icon: "🎮",
        title: "Mini Games",
        description:
          "Includes three mini games designed to help children practice concentration in a fun and engaging way.",
      },
      {
        icon: "🎨",
        title: "Colorful Visual Design",
        description:
          "Bright and playful visuals designed to attract young children and create an enjoyable learning experience.",
      },
      {
        icon: "🧩",
        title: "Simple Gameplay",
        description:
          "Easy-to-understand mechanics that allow children to quickly learn and enjoy the game without confusion.",
      },
      {
        icon: "🐾",
        title: "Character Selection",
        description:
          "Players can choose from a variety of adorable characters to personalize their gameplay experience.",
      },
    ],
    prototypeUrl:
      "https://www.figma.com/proto/Lf4htJw65ziYBJbpOoQcLb/Project?node-id=10-89&t=j9NATo7YHmJ6DJWw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A89&show-proto-sidebar=1",
    category: "Final Project",
    year: "2025",
    image: "/src/Pic/Animal.png",
    description:
      "Designed and build a mobile game for Primary education plays a crucial role in developing skills and preparing children for higher-level learning in the future.",
    tags: ["Mobile", "Unity", "UX/UI design", "Game", "User research", "Figma"],
    overview:
      "This project focuses on designing a mobile game that helps young children develop concentration through engaging and interactive activities. Since maintaining focus during learning can be challenging for many children, the concept aims to create a fun and relaxing experience that encourages them to practice attention and memory skills. By combining playful game mechanics with educational elements, the design aims to support early learning while keeping children motivated and engaged.",
    problem:
      "Young children often struggle to maintain concentration during structured classroom learning, and traditional methods for improving focus are not always engaging.",
    solution:
      "A mobile game was designed to help children practice concentration through fun, interactive gameplay that also supports memory and problem-solving skills.",
    role: "Final Project",
    duration: "4 months",
    tools: ["Figma", "Unity", "Adobe Photoshop"],
    images: [
      "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzA5Mzc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "/src/Pic/Animalfull.png",
      "/src/Pic/Animalfull2.png",
      "/src/Pic/Animalfull3.png",
    ],
    outcomes: [
      "Conducted user interviews with 20+ students and remote workers",
      "Created complete design system with 50+ reusable components",
      "Presented to faculty and received highest grade in class",
      "Design was praised for addressing real user pain points",
    ],
    process: [
      {
        title: "User Research",
        description:
          "Conducted 20+ interviews with remote workers and students. Created surveys to understand pain points with existing productivity tools.",
      },
      {
        title: "Information Architecture",
        description:
          "Mapped out user flows, created site map, and organized features based on user priorities discovered in research.",
      },
      {
        title: "Design System",
        description:
          "Built a comprehensive design system with colors, typography, spacing rules, and reusable components for consistency.",
      },
      {
        title: "Iteration & Refinement",
        description:
          "Conducted multiple rounds of usability testing, gathered feedback from professors and peers, and refined the design.",
      },
    ],
  },
  {
    id: 3,
    slug: "chicken-ready",
    title: "Chicken Ready",
    features: [
      {
        icon: "🐔",
        title: "Farming Knowledge",
        description:
          "Provides useful information and guidance about chicken farming to support farmers in their daily operations.",
      },
      {
        icon: "🧮",
        title: "Cost Calculator",
        description:
          "Helps farmers easily calculate production costs and manage farm expenses.",
      },
      {
        icon: "📊",
        title: "Farm Management",
        description:
          "Allows users to organize important farm data and monitor their farming activities more efficiently.",
      },
      {
        icon: "📱",
        title: "Simple & Accessible Design",
        description:
          "Designed with a clear and easy-to-use interface so farmers can quickly access information and tools.",
      },
    ],
    prototypeUrl:
      "https://www.figma.com/proto/lqkYiOvvT5yPgio0VY2qVv/CHICKEN-READY?node-id=833-1157&t=W5pryl6UTAzlCg9M-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A7&show-proto-sidebar=1",
    category: "Class project",
    year: "2022",
    image: "/src/Pic/Chicken.png",
    description:
      "Mobile App Design for Professional Chicken Farmers . Created interactive protoypes using figma.",
    tags: ["Mobile", "UI design", "Figma", "User research"],
    overview:
      "This project explores the design of a mobile application for chicken farm farmers. The app focuses on providing useful farming knowledge and tools to help calculate production costs. By simplifying information and calculations, the design aims to make farm management more convenient and accessible for users.",
    problem:
      "Many chicken farm farmers lack convenient tools to manage farm information and calculate production costs. Important knowledge about chicken farming is often scattered or difficult to access, making it harder for farmers to make informed decisions and manage their resources efficiently.",
    solution:
      "This project introduces a mobile application designed to support chicken farm farmers by combining educational resources with practical management tools. The app provides accessible farming knowledge and cost calculation features to help farmers better understand their expenses and manage their farms more efficiently.",
    role: "UI/UX Designer (Personal Project)",
    duration: "2 weeks",
    tools: ["Figma", "Miro"],
    images: [
      "https://images.unsplash.com/photo-1707483618680-8c13c7fc3f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzczMTI1MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "/src/Pic/Chickenfull.png",
      "/src/Pic/Chickenfull2.png",
    ],
    outcomes: [
      "Designed complete user journey from browsing to pickup",
      "Created 12 unique screens with consistent design language",
      "Minimized checkout process to just 3 taps",
      "Presented concept to local café owner who showed interest",
    ],
    process: [
      {
        title: "Market Research",
        description:
          "Studied successful food ordering apps, visited local coffee shops, and interviewed baristas and customers about their pain points.",
      },
      {
        title: "User Flows",
        description:
          "Mapped out the complete user journey from app launch to order pickup, focusing on minimizing friction at every step.",
      },
      {
        title: "Visual Design",
        description:
          "Created a warm, inviting visual style that reflects the cozy atmosphere of local coffee shops while maintaining modern usability.",
      },
      {
        title: "Micro-interactions",
        description:
          "Designed delightful animations and transitions to make the ordering experience feel smooth and enjoyable.",
      },
    ],
  },
];
