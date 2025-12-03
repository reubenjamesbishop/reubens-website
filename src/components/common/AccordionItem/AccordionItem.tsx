import { Group, Text, Accordion } from "@mantine/core";

interface AccordionItemData {
  id: string;
  label: string;
  description?: string;
  content: string;
}

interface AccordionLabelProps {
  label: string;
  description?: string;
}

function AccordionLabel({ label, description }: AccordionLabelProps) {
  return (
    <Group>
      <div>
        <Text style={{ fontWeight: "bold" }}>{label}</Text>
        {description && (
          <Text size="sm" c="dimmed" fw={400}>
            {description}
          </Text>
        )}
      </div>
    </Group>
  );
}

interface AccordionListProps {
  title?: string;
  items: AccordionItemData[];
}

export default function AccordionList({ title, items }: AccordionListProps) {
  const accordionItems = items.map((item) => (
    <Accordion.Item
      value={item.id}
      key={item.id}
      style={{ border: "1px solid black" }}
      mb={"-1px"}
    >
      <Accordion.Control>
        <AccordionLabel label={item.label} description={item.description} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      {title && <Text>{title}</Text>}
      <Accordion chevronPosition="right" variant="contained">
        {accordionItems}
      </Accordion>
    </>
  );
}

