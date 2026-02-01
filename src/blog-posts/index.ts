import kwackContent from "./kwack-blog-post.md?raw";

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
}

/**
 * To add a new blog post:
 * 1. Write your markdown file in src/blog-posts/
 * 2. Import it at the top of this file with ?raw
 * 3. Add an entry to the blogPosts array below
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "building-kwack",
    title: "Building Kwack",
    subtitle:
      "How Agentic AI Development Helped Us Ship a Full-Stack Medical Education Platform",
    date: "January 2026",
    content: kwackContent,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
