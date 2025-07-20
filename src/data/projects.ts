export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform with product listings, cart functionality, and checkout process.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, deadlines, and team collaboration.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Firebase", "Material UI", "JavaScript"],
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A custom-designed portfolio website showcasing personal projects and skills.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: [
      "Frontend Framework: React",
      "Language: TypeScript", 
      "Styling: Tailwind CSS",
      "Build Tool: Vite",
      "Linting: ESLint",
      "Postprocessing: PostCSS",
      "Package Manager: npm (Node.js)"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A weather forecasting application that provides real-time weather data and forecasts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "OpenWeather API", "CSS", "Axios"],
    link: "#"
  }
];