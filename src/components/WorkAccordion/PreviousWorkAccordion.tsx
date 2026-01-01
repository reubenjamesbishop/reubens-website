import { Group, Text, Accordion } from "@mantine/core";

const charactersList = [
{
    id: "Cortex (acquired by Schneider Electric)",
    label: "Cortex (acquired by Schneider Electric)",
    description: "Senior Software Engineer",
    content: `
    Worked as a senior software engineer at Cortex, a clean-energy startup that was later acquired by Schneider Electric.
    Developed software solutions to optimize energy consumption and integrate renewable energy sources using mainly 
    Python and Go.
    `,
},
{
    id: "iO Energy",
    label: "iO Energy",
    description: "CTO / Lead Software Engineer",
    content:
    "I was the first full-time engineer, and am responsible for leading the software engineering capabilities, and managing our software team.\n    My work primarily revolves around developing our cloud-based retail operations platform, which we use to manage and simplify our energy retail function, \n    but I also get to work on data engineering, data science and UI/UX projects.",
},
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
      <Text c={'gray'} fw={'bold'}>I have also worked at</Text>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
    </>
  );
}