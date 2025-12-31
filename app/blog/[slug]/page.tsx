import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TransitionLink } from "@/components/transition-link";
import { Separator } from "@/components/ui/separator";
import { ShareButton } from "@/components/share-button";
import { MDXContent } from "./mdx-content";
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getRelatedPosts,
} from "@/lib/blog";
import { profile } from "@/data/profile";

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article>
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <TransitionLink href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </TransitionLink>
          </Button>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge>{post.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(post.date)}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                By {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      {post.image && (
        <div className="w-full aspect-21/9 bg-muted overflow-hidden relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXContent source={post.content} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <>
              <Separator className="my-12" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}

          {/* Share */}
          <Separator className="my-12" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Share this post
            </span>
            <div className="flex gap-2">
              <ShareButton title={post.title} description={post.description} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-muted/50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <TransitionLink
                  href={`/blog/${related.slug}`}
                  key={related.slug}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {related.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {related.description}
                      </p>
                    </CardContent>
                  </Card>
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
