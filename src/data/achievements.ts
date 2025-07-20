export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    year: "2023",
    title: "Best Project Award - College Tech Fest",
    description: "Received recognition for developing an innovative web application that addressed accessibility challenges."
  },
  {
    year: "2023",
    title: "Open Source Contributor",
    description: "Contributed to several open-source projects, helping improve documentation and fixing bugs."
  },
  {
    year: "2022",
    title: "Hackathon Finalist",
    description: "Reached the finals of a regional hackathon with a team project focused on sustainability solutions."
  },
  {
    year: "2022",
    title: "Freelance Web Developer",
    description: "Successfully completed multiple freelance projects, delivering modern and responsive websites for clients."
  },
  {
    year: "2021",
    title: "Started CSE Degree",
    description: "Began pursuing a degree in Computer Science and Engineering with a focus on software development."
  }
];