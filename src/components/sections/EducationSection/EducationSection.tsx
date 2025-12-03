import { Space } from "@mantine/core";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import AccordionList from "../../common/AccordionItem/AccordionItem";
import { degrees, certificates } from "../../../data/education";
import educationImage from "../../../assets/nc-scale-a-process.svg";

export function EducationSection() {
  const degreeData = degrees.map((degree) => ({
    id: degree.id,
    label: degree.degree,
    description: `${degree.institution}${degree.gpa ? ` | GPA: ${degree.gpa}` : ""}`,
    content: degree.description,
  }));

  const certificateData = certificates.map((cert) => ({
    id: cert.id,
    label: cert.name,
    description: "",
    content: cert.description,
  }));

  return (
    <>
      <SectionTitle
        title="Education"
        image={educationImage}
        subtitle="My degrees and certifications"
      />
      <AccordionList title="Degrees" items={degreeData} />
      <Space />
      <AccordionList title="Degrees" items={certificateData} />
    </>
  );
}

