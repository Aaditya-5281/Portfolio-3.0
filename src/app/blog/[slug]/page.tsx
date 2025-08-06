import { getPost, getMDXFiles } from "@/data/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";

interface BlogParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const dir = "content";
  if (!fs.existsSync(dir)) return [];

  const files = getMDXFiles(dir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  if (!params?.slug) return {};
  
  const post = await getPost(params.slug);
  return post ? { title: post.metadata.title, description: post.metadata.summary } : {};
}

export default async function BlogPostPage({ params }: BlogParams) {
  const post = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1>{post.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.source }} />
    </div>
  );
}
