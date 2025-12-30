import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  content: string;
  readingTime: string;
  published: boolean;
}

export interface BlogPostMetadata extends Omit<BlogPost, "content"> {}

const postsDirectory = path.join(process.cwd(), "content/blog");

// Ensure the blog directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(postsDirectory);
  return files.filter((file) => file.endsWith(".mdx"));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Anonymous",
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      image: data.image,
      content,
      readingTime: stats.text,
      published: data.published !== false,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug.replace(/\.mdx$/, "")))
    .filter((post): post is BlogPost => post !== null)
    .filter((post) => post.published)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return posts;
}

export function getBlogPostMetadata(): BlogPostMetadata[] {
  return getAllBlogPosts().map(({ content, ...metadata }) => metadata);
}

export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  return categories.sort();
}

export function getBlogTags(): string[] {
  const posts = getAllBlogPosts();
  const allTags = posts.flatMap((post) => post.tags);
  const tags = Array.from(new Set(allTags));
  return tags.sort();
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMetadata[] {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts();

  // Filter out current post and calculate relevance score
  const scoredPosts = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;

      // Same category = 3 points
      if (post.category === currentPost.category) score += 3;

      // Shared tags = 1 point per tag
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length;

      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post: { content, ...metadata } }) => metadata);

  return scoredPosts;
}
