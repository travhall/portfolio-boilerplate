import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="text-4xl font-bold tracking-tight mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-3xl font-bold tracking-tight mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>
    ),
    p: ({ children }: { children?: ReactNode }) => (
      <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
        {children}
      </p>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }: { children?: ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    a: ({
      href,
      children,
    }: {
      href?: string;
      children?: ReactNode;
    }) => (
      <a
        href={href}
        className="text-primary hover:underline font-medium"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }: { children?: ReactNode }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }: { children?: ReactNode }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    img: (props: ImageProps) => (
      <Image
        {...props}
        alt={props.alt || ""}
        className="rounded-lg my-6"
        width={800}
        height={400}
      />
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }: { children?: ReactNode }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }: { children?: ReactNode }) => (
      <th className="border border-border px-4 py-2 bg-muted text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }: { children?: ReactNode }) => (
      <td className="border border-border px-4 py-2">{children}</td>
    ),
    ...components,
  };
}
