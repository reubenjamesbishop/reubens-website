import { Stack, Text, Space, Grid, Button } from "@mantine/core";
import { IconDownload, IconArrowNarrowRight } from "@tabler/icons-react";
import resume_link from "../../../assets/ReubenJamesBishopCV_2024.pdf";

export default function IntroSection() {
  return (
    <Stack>
      <Text>
        I'm a product-minded software engineer with a passion for designing and
        building great products, and working with delightful people. I have
        worked mainly as a full-stack software engineer for the last couple of
        years, but I have have been able to ramp up in other interesting areas
        including data science, data engineering, UI/UX design and product
        management.
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

