import { Stack, Box, Title, Image, Text, Grid, Center } from "@mantine/core";

interface sectionTitleProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function SectionTitle(props: sectionTitleProps) {
  return (
    <Grid justify="center" style={{ border: "0px solid blue" }}>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Stack style={{ border: "0px solid red" }}>
          <Title order={1} ta={{ base: "center", md: "left" }}>
            {props.title}
          </Title>
          <Text c="dimmed" ta={{ base: "center", md: "left" }}>
            {props.subtitle}
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Center>
          <Box style={{ border: "0px solid red" }}>
            <Box style={{ border: "0px solid red", maxWidth: "200px" }}>
              <Image src={props.image} />
            </Box>
          </Box>
        </Center>
      </Grid.Col>
    </Grid>
  );
}
