import { Stack, Box, Title, Image, Group, Text, Center } from "@mantine/core";

interface sectionTitleProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function SectionTitle(props: sectionTitleProps) {
  return (
    // <Center>
    <Stack>
      <Group justify="space-between" style={{ border: "0px solid red" }}>
        <Stack>
          <Title order={1}>{props.title}</Title>
          <Text c="dimmed">{props.subtitle}</Text>
        </Stack>
        <Box style={{ border: "0px solid red" }}>
          <Image src={props.image} />
        </Box>
      </Group>
    </Stack>
    // </Center>
  );
}
