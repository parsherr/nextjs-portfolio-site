import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  photo: string;
  shortDescription: string;
  content: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch('/api/blogs');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}
