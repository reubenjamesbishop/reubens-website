import { Anchor, Box, Image, Stack, Text, Title } from "@mantine/core";
import awardImage from "../../assets/redefining-impact-award.png";

export default function CurrentWorkAccordion() {
  return (
    <Stack gap="lg">
      <Box>
        <Title order={3} size="h3">Canva</Title>
        <Text size="sm" c="dimmed">Software Engineer · AI DevX</Text>
      </Box>
      <Stack gap="sm" className="work-notes">
        <Text><strong>Agentic engineering.</strong> Internal harnesses and tools for engineers working with agents.</Text>
        <Text><strong>AI at scale.</strong> High-volume pipelines tracking spend, usage and behaviour.</Text>
        <Text><strong>Making the numbers useful.</strong> ROI and investment decisions. Data behind negotiations with Anthropic and OpenAI.</Text>
      </Stack>
      <Box className="award-note">
        <Text size="sm" c="dimmed">
          Picked up a Redefining Impact Award for this work, too.
        </Text>
        <Box className="award-snapshot">
          <span className="award-aside" aria-hidden="true">
            <svg width="62" height="50" viewBox="0 0 62 50" fill="none">
              <path d="M5 5 C45 0 55 16 32 39 M30 27 L31 41 L45 37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <Anchor href={awardImage} target="_blank" rel="noopener noreferrer" className="award-image-link" aria-label="View Reuben’s Redefining Impact Award certificate at full size">
            <Image src={awardImage} alt="Canva Redefining Impact Award 2026, presented to Reuben Bishop for building and correcting the system behind Canva’s eight-figure spend decisions." />
          </Anchor>
        </Box>
      </Box>
    </Stack>
  );
}
