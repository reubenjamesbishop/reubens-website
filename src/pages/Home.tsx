import {
  Container,
  Grid,
  Stack,
  Box,
  Title,
  Text,
  Image,
  Button,
  Divider,
  Space,
  Center,
  Indicator,
  Group,
  AspectRatio,
} from "@mantine/core";

import meImage from "../assets/me.png";
import squiggleArrow from "../assets/squiggleArrow.png";
import experience from "../assets/oc-on-the-laptop.svg";
import projects from "../assets/oc-growing.svg";
import contact from "../assets/oc-lighthouse.svg";
import education from "../assets/nc-scale-a-process.svg";

import SectionTitle from "../components/SectionTitle/SectionTitle";
import CurrentWorkAccordion from "../components/WorkAccordion/CurrentWorkAccordion";
import PreviousWorkAccordion from "../components/WorkAccordion/PreviousWorkAccordion";
import {
  IconDownload,
  IconMail,
  IconArrowNarrowRight,
  IconBrandLinkedin,
  IconBrandGithub,
  IconCircleArrowRight,
  IconNotebook,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

import Project from "../components/Project/Project";
import EducationAccordion from "../components/EducationAccordion/EducationAccordion";
import CertificateAccordion from "../components/EducationAccordion/CertificateAccordion";
import TechnologyPill from "../components/TechnologyPill/TechnologyPill";

import resume_link from "../assets/reuben_bishop_cv.pdf";

function PageIntro() {
  return (
    <Stack>
      <Text ta={{ base: "center", md: "left" }}>
        Hello! I'm Reuben - a product-minded software engineer, with a passion
        for designing and building delightful products (and working with
        delightful people)! <br />
        <br />
        I've worked in a few different industries as a software engineer doing
        various things - including defence, energy and technology - and I love
        dabbling in side projects (you should check out kwack if you're in the
        medical industry!)
        <br />
        <br />I like working on data-intensive software problems, software
        architecture and long walks on the beach.
      </Text>
      <Space />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Button
            component="a"
            href={resume_link}
            variant="filled"
            color="black"
            radius={"xl"}
            fullWidth
            rightSection={<IconDownload size={20} />}
          >
            Download my resume
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Button
            component="a"
            href={"https://github.com/reubenjamesbishop"}
            variant="outline"
            color="black"
            radius={"xl"}
            fullWidth
            rightSection={<IconArrowNarrowRight size={20} />}
          >
            Check out my projects
          </Button>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Container size={"lg"} pt="xl">
        <Space h="xl" />
        <Grid>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box
              p="xl"
              style={{
                position: "sticky",
                top: 80,
              }}
            >
              <Center>
                <Stack>
                  <Box>
                    <Title order={3}>Hey,</Title>
                    <Title order={1}>I'm Reuben!</Title>
                  </Box>
                  <Box style={{ width: 200 }}>
                    <Image
                      h="100"
                      width={"auto"}
                      fit="contain"
                      src={squiggleArrow}
                    />
                  </Box>
                  <Indicator
                    processing={true}
                    position="bottom-start"
                    size={20}
                    color="green"
                    disabled={true}
                  >
                    <Box
                      style={{
                        width: 200,
                        border: "1px solid #e5e5e5",
                        borderRadius: "var(--mantine-radius-md)",
                      }}
                    >
                      <Image fit="contain" radius="md" src={meImage} />
                    </Box>
                  </Indicator>
                </Stack>
              </Center>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack p="lg">
              <PageIntro />
              <Divider my={48} />
              <SectionTitle
                title="My Experience"
                subtitle="Cool jobs I've had the pleasure of working in"
                image={experience}
              />
              <Space h="lg" />
              <CurrentWorkAccordion />
              <Space h="md" />
              <PreviousWorkAccordion />
              <Divider my={48} />
              <SectionTitle
                title="My Projects"
                image={projects}
                subtitle="A couple of interesting things i've worked on"
              />
              <Space h="lg" />
              <Stack gap={0} align="flex-start">
                <Title order={2}>Kwack</Title>
                <Text c="dimmed" size="sm">Medical student study platform</Text>
                <Space h="sm" />
                <Text size="sm">
                  Kwack is a study platform that helps medical students prepare for their
                  final year Objective Structured Clinical Examinations (OSCEs). These exams
                  simulate real patient encounters, and students need extensive practice to succeed.
                </Text>
                <Space h="xs" />
                <Text size="sm">
                  With Kwack, students can create, run, and share interactive OSCE cases with each other.
                  The platform also features an AI study buddy that can roleplay as a patient, providing
                  realistic practice scenarios anytime, anywhere.
                </Text>
                <Space h="md" />
                <AspectRatio ratio={16 / 9} w="100%">
                  <iframe
                    src="https://www.youtube.com/embed/x8-saE-Pvdc"
                    title="Kwack Demo"
                    style={{ border: "1px solid #e5e5e5", borderRadius: 8 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
                <Space h="md" />
                <Group gap="sm">
                  <Button
                    component="a"
                    href="https://kwack.io"
                    variant="outline"
                    color="black"
                    radius="xl"
                    rightSection={<IconCircleArrowRight size={20} />}
                  >
                    Check it out
                  </Button>
                  <Button
                    component={Link}
                    to="/blog/building-kwack"
                    variant="outline"
                    color="black"
                    radius="xl"
                    rightSection={<IconNotebook size={20} />}
                  >
                    Read the blog post
                  </Button>
                </Group>
              </Stack>
              <Space h="xl" />
              <Project
                title="Freight Analysis Dashboard"
                subtitle="GovHack National Hackathon Winner, 2023"
                link="https://github.com/reubenjamesbishop/govhack23"
                description="The freight analysis dashboard was a submission to the 2023 GovHack hackathon,
                  which was aimed at solving problems in the trucking and freighting industry. As part of a team of 4,
                  we created an interactive planning tool using Python + Streamlit, and entered three sub-challenges
                  (winning one, and coming runner up in another two)."
              />
              <Space h="xl" />
              <Project
                title="Puzzle of the Day Solver"
                subtitle="Puzzle solving Webapp"
                link="https://medium.com/@reubenjamesbishop/taking-all-of-the-fun-out-of-puzzles-with-python-flask-a81f001a6cb0"
                description="A simple web application that automatically calculated the optimal solution to the DragonFjord 'Puzzle of the Day'.
                  Created app with React + Flask, and wrote up an accompanying blog post."
              />
              <Divider my={48} />
              <SectionTitle
                title="My Favourite Tech"
                image={""}
                // subtitle="Technologies that I like to work with"
              />
              <Space h="lg" />
              <Text
                size="xs"
                c="dimmed"
                tt="uppercase"
                fw={600}
                style={{ letterSpacing: "0.05em" }}
                mb="xs"
              >
                Languages
              </Text>
              <Group gap={"xs"}>
                <TechnologyPill thing="Python" />
                <TechnologyPill thing="TypeScript" />
                <TechnologyPill thing="Go" />
                <TechnologyPill thing="SQL" />
              </Group>
              <Space h="md" />
              <Text
                size="xs"
                c="dimmed"
                tt="uppercase"
                fw={600}
                style={{ letterSpacing: "0.05em" }}
                mb="xs"
              >
                Frameworks & Tools
              </Text>
              <Group gap={"xs"}>
                <TechnologyPill thing="Snowflake" />
                <TechnologyPill thing="Dagster" />
                <TechnologyPill thing="DBT" />
                <TechnologyPill thing="React" />
                <TechnologyPill thing="AWS" />
                <TechnologyPill thing="Docker" />
                <TechnologyPill thing="Terraform" />
              </Group>
              <Space h="md" />
              <Text
                size="xs"
                c="dimmed"
                tt="uppercase"
                fw={600}
                style={{ letterSpacing: "0.05em" }}
                mb="xs"
              >
                Other
              </Text>
              <Group gap={"xs"}>
                <TechnologyPill thing="Figma" />
                <TechnologyPill thing="Notion" />
              </Group>
              <Divider my={48} />
              <SectionTitle
                title="Education"
                image={education}
                subtitle="My degrees and certifications"
              />
              <Space h="lg" />
              <EducationAccordion />
              <Space h="md" />
              <CertificateAccordion />
              <Divider my={48} />
              <SectionTitle
                title="Contact"
                image={contact}
                subtitle="Get in touch, I'd love to hear from you!"
              />
              <Space h="lg" />
              <Stack gap="sm">
                <Button
                  variant="outline"
                  color="black"
                  radius={"xl"}
                  component="a"
                  href="mailto:reubenjamesbishop@gmail.com"
                  rightSection={<IconMail size={20} />}
                >
                  Send me an Email
                </Button>
                <Button
                  variant="outline"
                  color="black"
                  radius={"xl"}
                  component="a"
                  href="https://www.linkedin.com/in/reubenbishop/"
                  rightSection={<IconBrandLinkedin size={20} />}
                >
                  Add me on Linked In
                </Button>
                <Button
                  variant="outline"
                  color="black"
                  radius={"xl"}
                  component="a"
                  href="https://www.github.com/reubenjamesbishop"
                  rightSection={<IconBrandGithub size={20} />}
                >
                  Check out my GitHub
                </Button>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
        <Space h="xl" />
      </Container>
    </>
  );
}
