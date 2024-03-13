import {
  Container,
  Grid,
  Stack,
  Box,
  Title,
  Text,
  Image,
  Group,
  Button,
  Divider,
  Accordion,
} from "@mantine/core";

import meImage from "../assets/me.png";
import squiggleArrow from "../assets/squiggleArrow.png";
import experience from "../assets/oc-on-the-laptop.svg";
import projects from "../assets/oc-growing.svg";
import contact from "../assets/oc-lighthouse.svg";

import SectionTitle from "../components/SectionTitle/SectionTitle";
import WorkAccordion from "../components/WorkAccordion/CurrentWorkAccordion";
import CurrentWorkAccordion from "../components/WorkAccordion/CurrentWorkAccordion";
import PreviousWorkAccordion from "../components/WorkAccordion/PreviousWorkAccordion";

function PageIntro() {
  const PERSONAL_STATEMENT =
    "I'm a product-minded software engineer with a passion for designing and building great products, and work with delighful people.";

  return (
    <Stack>
      <Text>{PERSONAL_STATEMENT}</Text>
      <Group>
        <Button variant="filled" color="black" radius={"xl"}>
          Check out my projects
        </Button>
        <Button variant="outline" color="black" radius={"xl"}>
          Download my resume
        </Button>
      </Group>
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Container size={"xl"} pt="xl" style={{ border: "0px solid red" }}>
        <Stack>
          <Grid>
            <Grid.Col span={5}>
              <Stack
                p="xl"
                style={{
                  position: "sticky",
                  top: 80,
                  border: "0px solid blue",
                }}
              >
                <Box style={{ border: "0px solid red" }}>
                  <Title order={3}>Hi,</Title>
                  <Title order={1}>I'm Reuben.</Title>
                </Box>
                <Box style={{ border: "0px solid blue", width: 200 }}>
                  <Image
                    style={{ border: "0px solid red" }}
                    h="100"
                    width={"auto"}
                    fit="contain"
                    src={squiggleArrow}
                  />
                </Box>
                <Box style={{ border: "0px solid blue", width: 200 }}>
                  <Image fit="contain" radius="md" src={meImage} />
                </Box>
              </Stack>
            </Grid.Col>
            <Grid.Col span={7}>
              <Stack p="xl">
                <PageIntro />
                <Divider my="xl" />
                <SectionTitle title="Experience" image={experience} />
                <CurrentWorkAccordion />
                <PreviousWorkAccordion />
                <Divider my="xl" />
                <SectionTitle title="My projects" image={projects} />
                <Divider my="xl" />
                <SectionTitle title="Contact" image={contact} />
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
