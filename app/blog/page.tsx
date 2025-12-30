import { getBlogPostMetadata, getBlogCategories } from "@/lib/blog";
import { BlogClient } from "./blog-client";

export default function BlogPage() {
  const posts = getBlogPostMetadata();
  const categories = getBlogCategories();

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          Thoughts on design, development, and building great products.
        </p>
      </div>

      <BlogClient posts={posts} categories={categories} />
    </div>
  );
}
