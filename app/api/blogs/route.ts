import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '../../../utils/blog';

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    return NextResponse.json(posts);
  }
  catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
