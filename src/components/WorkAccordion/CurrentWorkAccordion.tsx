import { Group, Text, Accordion } from "@mantine/core";

const charactersList = [
  {
    id: "Canva",
    label: "Canva",
    description: "Software Engineer",
    content: `
    Working on the AI Workflows and Tools optimisations team at Canva in Sydney.
    `,
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
      <Text c={'gray'} fw={'bold'}>Currently, you'll find me at</Text>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
    </>
  );
}