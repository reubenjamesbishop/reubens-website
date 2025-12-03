import { Group, Text, Accordion } from "@mantine/core";

const charactersList = [
  {
    id: "aws-cf01",
    label: "AWS Cloud Practitioner (CLF-01)",
    description: "",
    content: "Fundamentals of cloud computing on AWS.",
  },

  {
    id: "scrum-master",
    label: "Certified Scrum Master (CSM)",
    description: "",
    content:
      "Completed a 3 day certification in Agile / Scrum master stuff. Was pretty interesting. Learned how to run Scrum teams.",
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

export default function CertificateAccordion() {
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
      <Text>Degrees</Text>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
    </>
  );
}
