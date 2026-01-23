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
      <Stack gap={0} align="flex-start">
        <Title order={2}>{props.title}</Title>
        <Text c="dimmed" size="sm">{props.subtitle}</Text>
        <Space h="sm" />
        <Text size="sm">{props.description}</Text>
        <Space h="md" />
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
