import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export const contactLinks = [
  {
    label: "Send me an Email",
    href: "mailto:reubenjamesbishop@gmail.com",
    icon: IconMail,
  },
  {
    label: "Add me on Linked In",
    href: "https://www.linkedin.com/in/reubenbishop/",
    icon: IconBrandLinkedin,
  },
  {
    label: "Check out my GitHub",
    href: "https://www.github.com/reubenjamesbishop",
    icon: IconBrandGithub,
  },
];
import { WorkExperience } from "../types";

export const currentWork: WorkExperience = {
  id: "iO Energy",
  company: "iO Energy",
  role: "Software Engineer (Team Lead)",
  description: `Currently working as the software team lead at the clean-energy startup, iO Energy.
    I was the first full-time engineer, and am responsible for leading the software engineering capabilities, and managing our software team.
    My work primarily revolves around developing our cloud-based retail operations platform, which we use to manage and simplify our energy retail function, 
    but I also get to work on data engineering, data science and UI/UX projects.`,
};

export const previousWork: WorkExperience[] = [
  {
    id: "Lockheed Martin",
    company: "Lockheed Martin",
    role: "Software Engineer Associate",
    description:
      "I started at Lockheed Martin as a software engineering intern, and then moved into an Associate Engineering role. I was working on the weapons team as part of the Future Submarine Program.",
  },
  {
    id: "Maxmine",
    company: "MaxMine",
    role: "Undergraduate Data Analyst",
    description:
      "I worked at MaxMine part-time while studying at Uni. I got to work on a range of projects based around mining analytics, including some case studies and topology mapping software.",
  },
  {
    id: "Micro-X",
    company: "Micro-X",
    role: "Mechanical Engineering Intern",
    description:
      "I did a four month internship with Micro-X while studying for my Mechanical Engineering degree. At Micro-X, I got to work on a few projects that involved some mechanical design work and hands on mechanical testing of cutting-edge X-Ray equipment.",
  },
];

