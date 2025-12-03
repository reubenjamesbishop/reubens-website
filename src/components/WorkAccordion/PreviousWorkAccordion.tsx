import { Group, Text, Accordion } from "@mantine/core";

const charactersList = [
  {
    id: "Lockheed Martin",
    label: "Lockheed Martin",
    description: "Software Engineer Associate",
    content:
      "I started at Lockheed Martin as a software engineering intern, and then moved into an Associate Engineering role. I was working on the weapons team as part of the Future Submarine Program.",
  },

  {
    id: "Maxmine",
    label: "MaxMine",
    description: "Undergraduate Data Analyst",
    content:
      "I worked at MaxMine part-time while studying at Uni. I got to work on a range of projects based around mining analytics, including some case studies and topology mapping software.",
  },

  {
    id: "Micro-X",
    label: "Micro-X",
    description: "Mechanical Engineering Intern",
    content:
      "I did a four month internship with Micro-X while studying for my Mechanical Engineering degree. At Micro-X, I got to work on a few projects that involved some mechanical design work and hands on mechanical testing of cutting-edge X-Ray equipment. ",
  },
];

interface AccordionLabelProps {
  label: string;
  description: string;
}

function AccordionLabel({ label, description }: AccordionLabelProps) {
  return (
    <Group>
      <div>
        <Text style={{ fontWeight: "bold" }}>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export default function PreviousWorkAccordion() {
  const items = charactersList.map((item) => (
    <Accordion.Item
      value={item.id}
      key={item.label}
      style={{ border: "1px solid black" }}
      mb={"-1px"}
    >
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Text>Have previously been @</Text>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
    </>
  );
}
