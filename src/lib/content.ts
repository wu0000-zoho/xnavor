import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDir = path.join(process.cwd(), 'content/posts');
const resourcesDir = path.join(process.cwd(), 'content/resources');

function slugFromFilename(filename: string) {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.(md|mdx|markdown)$/, '');
}

export async function getAllPosts() {
  try {
    const files = await fs.readdir(postsDir);
    const posts = await Promise.all(
      files.map(async (file) => {
        const full = path.join(postsDir, file);
        const raw = await fs.readFile(full, 'utf8');
        const { data } = matter(raw);
        return {
          slug: slugFromFilename(file),
          file,
          date: data.date || null,
          title: data.title || slugFromFilename(file),
          description: data.description || '',
          tags: data.tags || []
        };
      })
    );
    posts.sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0));
    return posts;
  } catch (e) {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  const files = await fs.readdir(postsDir);
  const match = files.find((f) => slugFromFilename(f) === slug);
  if (!match) return null;
  const raw = await fs.readFile(path.join(postsDir, match), 'utf8');
  const { data, content } = matter(raw);
  const contentHtml = marked(content);
  return { meta: { ...data, title: data.title || slug, date: data.date }, contentHtml };
}

export async function getAllResources() {
  try {
    const files = await fs.readdir(resourcesDir);
    const resources = await Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(resourcesDir, file), 'utf8');
        const { data, content } = matter(raw);
        return {
          slug: file.replace(/\.mdx?$|\.md$/, ''),
          title: data.title || file,
          description: data.description || content.slice(0, 140),
        };
      })
    );
    return resources;
  } catch (e) {
    return [];
  }
}
