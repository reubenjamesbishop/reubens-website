import squiggleArrow from "../../assets/squiggleArrow.png";
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
        <Text>I work on the internal coding harness and infrastructure that help Canva engineers build with AI at scale. I also look after the data behind AI costs and usage, so we can understand what’s being used and what’s paying off.</Text>
        <Text>I work directly with senior leadership on usage trends, cost insights and ROI, helping teams across Canva make decisions about where to invest. Picked up a Redefining Impact Award for this work, too.</Text>
      </Stack>
      <Box className="award-note">
        <Box className="award-snapshot">
          <span className="award-aside" aria-hidden="true">
            <img src={squiggleArrow} alt="" />
          </span>
          <Anchor href={awardImage} target="_blank" rel="noopener noreferrer" className="award-image-link" aria-label="View Reuben’s Redefining Impact Award certificate at full size">
            <Image src={awardImage} alt="Canva Redefining Impact Award 2026, presented to Reuben Bishop for building and correcting the system behind Canva’s eight-figure spend decisions." />
          </Anchor>
        </Box>
      </Box>
    </Stack>
  );
}
