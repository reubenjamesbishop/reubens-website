import { Group, Text, Accordion } from "@mantine/core";

const charactersList = [
  {
    id: "iO Energy",
    label: "iO Energy",
    description: "Software Engineer (Team Lead)",
    content: `
    Currently working as the software team lead at the clean-energy startup, iO Energy.
    I was the first full-time engineer, and am responsible for leading the software engineering capabilities, and managing our software team.
    My work primarily revolves around developing our cloud-based retail operations platform, which we use to manage and simplify our energy retail function, 
    but I also get to work on data engineering, data science and UI/UX projects.
    `,
  },
];

interface AccordionLabelProps {
  label: string;
  // image: string;
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

export default function CurrentWorkAccordion() {
  const items = charactersList.map((item) => (
    <Accordion.Item
      value={item.id}
      key={item.label}
      style={{ border: "1px solid black" }}
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
      <Text>Currently @</Text>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
    </>
  );
}
