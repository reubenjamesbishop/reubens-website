import {
  Container,
  Title,
  Text,
  Space,
  Button,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPost } from "../blog-posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <Container size="sm" py="xl">
        <Space h="xl" />
        <Title order={2}>Post not found</Title>
        <Space h="md" />
        <Button
          component={Link}
          to="/"
          variant="outline"
          color="black"
          radius="xl"
          leftSection={<IconArrowLeft size={18} />}
        >
          Back home
        </Button>
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl">
      <Space h="xl" />
      <Button
        component={Link}
        to="/"
        variant="subtle"
        color="dark"
        radius="xl"
        leftSection={<IconArrowLeft size={18} />}
        px={0}
        mb="md"
      >
        Back home
      </Button>
      <Box>
        <Text c="dimmed" size="sm">
          {post.date}
        </Text>
        <Title order={1} mt={4}>
          {post.title}
        </Title>
        <Text c="dimmed" size="md" mt={4}>
          {post.subtitle}
        </Text>
      </Box>
      <Space h="xl" />
      <TypographyStylesProvider>
        <Box
          style={{
            fontSize: "0.925rem",
            lineHeight: 1.75,
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={post.content}
            components={{
              h1: () => null,
              h2: ({ children }) => (
                <Title order={2} mt="xl" mb="sm">
                  {children}
                </Title>
              ),
              h3: ({ children }) => (
                <Title order={3} mt="lg" mb="xs">
                  {children}
                </Title>
              ),
              p: ({ children }) => (
                <Text size="sm" mb="md" style={{ lineHeight: 1.75 }}>
                  {children}
                </Text>
              ),
              a: ({ href, children }) => (
                <Text
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  c="blue"
                  td="underline"
                  inherit
                >
                  {children}
                </Text>
              ),
              strong: ({ children }) => (
                <Text component="span" fw={700} inherit>
                  {children}
                </Text>
              ),
            }}
          />
        </Box>
      </TypographyStylesProvider>
      <Space h={80} />
    </Container>
  );
}
