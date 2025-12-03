import { Stack, Box, Title, Image, Text, Grid, Center } from "@mantine/core";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function SectionTitle({
  title,
  subtitle,
  image,
}: SectionTitleProps) {
  return (
    <Grid justify="center">
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Stack>
          <Title order={1} ta={{ base: "center", md: "left" }}>
            {title}
          </Title>
          {subtitle && (
            <Text c="dimmed" ta={{ base: "center", md: "left" }}>
              {subtitle}
            </Text>
          )}
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Center>
          <Box style={{ maxWidth: "200px" }}>
            <Image src={image} />
          </Box>
        </Center>
      </Grid.Col>
    </Grid>
  );
}

