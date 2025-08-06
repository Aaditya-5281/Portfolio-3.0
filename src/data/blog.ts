import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw"; // Allows raw HTML inside MDX
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkMdx from "remark-mdx"; // Ensures MDX support
import { unified } from "unified";


type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkMdx) // Ensures MDX-specific syntax is preserved
    .use(remarkRehype, { allowDangerousHtml: true }) // Allows raw HTML
    .use(rehypeRaw) // Allows embedded HTML in markdown
    .use(rehypePrettyCode, {
      theme: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      keepBackground: true, // Ensures background styling remains
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  
  return { source: content, metadata, slug };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  let posts = [];

  for (const file of mdxFiles) {
    const slug = path.basename(file, path.extname(file));
    const post = await getPost(slug);
    if (post) posts.push(post);
  }

  return posts;
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
