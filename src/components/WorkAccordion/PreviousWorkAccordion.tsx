import { Anchor, Box, Image, Text, Title } from "@mantine/core";
import thermostat from "../../assets/thermostat-cutout.png";

const previousRoles = [
  { company: "iO Energy", role: "CTO / Lead Software Engineer", text: "First full-time engineer, then software team lead. Built the cloud platform behind energy retail operations, alongside data engineering and product work." },
  { company: "Lockheed Martin", role: "Software Engineer Associate", text: "Started as an intern, then worked as a software engineer on the Future Submarine Program." },
  { company: "MaxMine", role: "Undergraduate Data Analyst", text: "Mining analytics and topology mapping software, alongside uni." },
  { company: "Micro-X", role: "Mechanical Engineering Intern", text: "Mechanical design and hands-on testing of X-ray equipment." },
];

export default function PreviousWorkAccordion() {
  return (
    <>
      <article className="experience-entry cortex-entry">
        <div className="cortex-content">
          <Title order={3}>Cortex</Title>
          <Text size="sm" c="dimmed" mt={4}>Senior Software Engineer · Acquired by Schneider Electric</Text>
          <Text size="sm" mt="md">I worked on backend systems and telemetry for Schneider Electric’s project now announced as part of Apple Home Collection.</Text>
          <Anchor className="source-link" href="https://www.apple.com/au/newsroom/2026/10/introducing-apple-home-collection-a-new-lineup-of-smart-home-accessories/" target="_blank" rel="noopener noreferrer" c="dark" size="sm">Apple’s announcement ↗</Anchor>
        </div>
        <figure className="thermostat-figure"><Image src={thermostat} alt="Schneider Electric Smart Thermostat" /><figcaption>Image: Apple (edited)</figcaption></figure>
      </article>
      <Box className="previous-roles">
        {previousRoles.map(({ company, role, text }) => <details className="role-details" key={company}><summary><span><strong>{company}</strong><span className="role-title">{role}</span></span><span className="expand-mark" aria-hidden="true">+</span></summary><Text size="sm" c="dimmed" pb="md">{text}</Text></details>)}
      </Box>
    </>
  );
}
