import { Title, Text, Button, Stack, Space } from "@mantine/core";
import { IconCircleArrowRight } from "@tabler/icons-react";

// TODO: Add link

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  //   link: string;
}

export default function Project(props: ProjectProps) {
  return (
    <>
      <Stack gap={0}>
        <Title order={2} style={{ border: "0px solid red" }}>
          {props.title}
        </Title>
        <Text style={{ border: "0px solid red" }}>{props.subtitle}</Text>
        <Space h="md" />
        <Text c="dimmed">{props.description}</Text>
        <Space h="xl" />
        <Button
          variant="outline"
          color="black"
          radius={"xl"}
          rightSection={<IconCircleArrowRight size={20} />}
        >
          Check it out
        </Button>
      </Stack>
    </>
  );
}
