import { Stack, Box, Title, Image, Group } from "@mantine/core";

interface sectionTitleProps {
  title: string;
  image: string;
}

export default function SectionTitle(props: sectionTitleProps) {
  return (
    <Stack>
      <Group justify="space-between" style={{ border: "0px solid red" }}>
        <Title order={1}>{props.title}</Title>
        <Box style={{ border: "0px solid red" }}>
          <Image src={props.image} />
        </Box>
      </Group>
    </Stack>
  );
}
