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
  Space,
  Center,
} from "@mantine/core";

import meImage from "../assets/me.png";
import squiggleArrow from "../assets/squiggleArrow.png";
import experience from "../assets/oc-on-the-laptop.svg";
import projects from "../assets/oc-growing.svg";
import contact from "../assets/oc-lighthouse.svg";

import SectionTitle from "../components/SectionTitle/SectionTitle";
import CurrentWorkAccordion from "../components/WorkAccordion/CurrentWorkAccordion";
import PreviousWorkAccordion from "../components/WorkAccordion/PreviousWorkAccordion";
import {
  IconDownload,
  IconMail,
  IconArrowNarrowRight,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

import Project from "../components/Project/Project";

function PageIntro() {
  return (
    <Stack>
      <Text>
        I'm a product-minded software engineer with a passion for designing and
        building great products, and working with delightful people. I have a
        passion for full stack software engineering and product management, and
        have spent lots of time working on data engineering and data science
        projects. I am also a keen UI/UX enthusiast.
      </Text>
      <Space />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Button
            variant="filled"
            color="black"
            radius={"xl"}
            fullWidth
            rightSection={<IconArrowNarrowRight size={20} />}
          >
            Check out my projects
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Button
            variant="outline"
            color="black"
            radius={"xl"}
            fullWidth
            rightSection={<IconDownload size={20} />}
          >
            Download my resume
          </Button>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Container size={"lg"} pt="xl" style={{ border: "0px solid red" }}>
        <Stack>
          <Grid>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box
                p="xl"
                style={{
                  position: "sticky",
                  top: 80,
                  border: "0px solid blue",
                }}
              >
                <Center>
                  <Stack>
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
                </Center>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack p="xl">
                <PageIntro />
                <Divider my="xl" />
                <SectionTitle title="Experience" image={experience} />
                <CurrentWorkAccordion />
                <Space />
                <PreviousWorkAccordion />
                <Divider my="xl" />
                <SectionTitle title="My projects" image={projects} />
                <Project
                  title="Kwack"
                  subtitle="Medical student study platform"
                  description="Kwack is a study platform that helps medical students prepare for their
                  final year major Objective Structured Clinical Reasoning Examinations (OSCEs). 
                  Students can create, run and share interactive OSCE cases with each other, or run their cases against
                  an AI studdy buddy."
                />
                <Space h="xl" />
                <Project
                  title="Freight Analysis Dashboard"
                  subtitle="GovHack National Hackathon Winner, 2023"
                  description="The freight analysis dashboard was a submission to the 2023 GovHack hackathon, 
                  which was aimed at solving problems in the trucking and freighting industry. As part of a team of 4, 
                  we created an interactive planning tool using Python + Streamlit, and entered three sub-challenges 
                  (winning one, and coming runner up in another two)."
                />
                <Divider my="xl" />
                <SectionTitle title="Contact" image={contact} />
                <Space h="xl" />
                <Button
                  variant="outline"
                  color="black"
                  radius={"xl"}
                  rightSection={<IconMail size={20} />}
                >
                  Send me an Email
                </Button>
                <Button
                  variant="outline"
                  color="black"
                  radius={"xl"}
                  rightSection={<IconBrandLinkedin size={20} />}
                >
                  Add me on Linked In
                </Button>
                <Button
                  variant="outline"
                  color="black"
                  radius={"xl"}
                  rightSection={<IconBrandGithub size={20} />}
                >
                  Check out my GitHub
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
          <Space h="xl" />
        </Stack>
      </Container>
    </>
  );
}
