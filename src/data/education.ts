import { Education, Certificate } from "../types";

export const degrees: Education[] = [
  {
    id: "unsw-grad-cert",
    degree: "Graduate Certificate in Data Science",
    institution: "UNSW",
    gpa: "7.00/7.00",
    description:
      "I'm currently working through a Graduate Certifcate of Data Science at while working full-time. I've learned about advanced statistics concepts, advanced SQL concepts and business intelligence with Tableau.",
  },
  {
    id: "adelaide-uni-cs",
    degree: "Bachelor of Mathematical and Computer Sciences",
    institution: "Adelaide University",
    gpa: "6.25/7.00",
    description:
      "I did a bachelor of Mathematical and Computer Science (majoring in Computer Science). I got to do lots of courses in Artifical Intelligence, Computer Vision and Statistical Machine Learning.",
  },
  {
    id: "adelaide-uni-eng",
    degree: "Bachelor (Honours) of Mechanical Engineering",
    institution: "Adelaide University",
    gpa: "6.25/7.00",
    description:
      "I did an Honours degree in Mechanical Engineering, with a research project in magnetostrictive energy harvesters. I was also on the Formula SAE, where I got to help out and build an electric formula-style race car.",
  },
];

export const certificates: Certificate[] = [
  {
    id: "aws-cf01",
    name: "AWS Cloud Practitioner (CLF-01)",
    description: "Fundamentals of cloud computing on AWS.",
  },
  {
    id: "scrum-master",
    name: "Certified Scrum Master (CSM)",
    description:
      "Completed a 3 day certification in Agile / Scrum master stuff. Was pretty interesting. Learned how to run Scrum teams.",
  },
];

