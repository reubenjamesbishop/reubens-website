import { Space } from "@mantine/core";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import AccordionList from "../../common/AccordionItem/AccordionItem";
import { currentWork, previousWork } from "../../../data/experience";
import experienceImage from "../../../assets/oc-on-the-laptop.svg";

export function ExperienceSection() {
  const currentWorkData = [
    {
      id: currentWork.id,
      label: currentWork.company,
      description: currentWork.role,
      content: currentWork.description,
    },
  ];

  const previousWorkData = previousWork.map((work) => ({
    id: work.id,
    label: work.company,
    description: work.role,
    content: work.description,
  }));

  return (
    <>
      <SectionTitle
        title="Experience"
        subtitle="My work history in all it's glory"
        image={experienceImage}
      />
      <AccordionList title="Currently @" items={currentWorkData} />
      <Space />
      <AccordionList title="Have previously been @" items={previousWorkData} />
      <Space />
    </>
  );
}

