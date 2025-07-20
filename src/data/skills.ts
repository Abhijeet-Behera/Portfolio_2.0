export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "Python", level: 4 },
      { name: "Java", level: 3 },
      { name: "HTML/CSS", level: 5 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 4 },
      { name: "Node.js", level: 3 },
      { name: "Firebase", level: 3 },
      { name: "Bootstrap", level: 4 },
      { name: "Flask", level: 3 }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Figma", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "AWS", level: 2 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 4 },
      { name: "Communication", level: 4 },
      { name: "Team Collaboration", level: 4 },
      { name: "Time Management", level: 3 },
      { name: "Adaptability", level: 4 }
    ]
  }
];