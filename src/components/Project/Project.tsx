import { Title, Text, Button, Stack, Space } from "@mantine/core";
import { IconCircleArrowRight } from "@tabler/icons-react";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

export default function Project(props: ProjectProps) {
  return (
    <>
      <Stack gap={0}>
        <Title order={2}>{props.title}</Title>
        <Text>{props.subtitle}</Text>
        <Space h="md" />
        <Text c="dimmed">{props.description}</Text>
        <Space h="xl" />
        <Button
          component="a"
          href={props?.link}
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
