import { Group, Text, Accordion } from "@mantine/core";

const charactersList = [
  {
    id: "Cortex (acquired by Schneider Electric)",
    label: "Cortex (acquired by Schneider Electric)",
    description: "Senior Software Engineer",
    content: `
    Worked as a senior software engineer at Cortex, a clean-energy startup that was later acquired by Schneider Electric.
    Developed software solutions to optimize energy consumption and integrate renewable energy sources.
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
      <Text>Currently @</Text>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
    </>
  );
}
