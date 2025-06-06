import { blogData } from '../../sections/Blogs/blogData';
import BlogSection from '../../sections/Blogs/BlogSection';
import { notFound } from 'next/navigation';

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = blogData[params.slug.toLowerCase()];
  if (!data) return notFound();
  return <BlogSection {...data} />;
} 