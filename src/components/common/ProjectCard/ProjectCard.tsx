import { Title, Text, Button, Stack, Space } from "@mantine/core";
import { IconCircleArrowRight } from "@tabler/icons-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  link,
}: ProjectCardProps) {
  return (
    <Stack gap={0}>
      <Title order={2}>{title}</Title>
      <Text>{subtitle}</Text>
      <Space h="md" />
      <Text c="dimmed">{description}</Text>
      <Space h="xl" />
      <Button
        component="a"
        href={link}
        variant="outline"
        color="black"
        radius={"xl"}
        rightSection={<IconCircleArrowRight size={20} />}
      >
        Check it out
      </Button>
    </Stack>
  );
}

