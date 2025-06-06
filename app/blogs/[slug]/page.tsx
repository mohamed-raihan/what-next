import { blogData } from '../../sections/Blogs/blogData';
import BlogSection from '../../sections/Blogs/BlogSection';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export default function BlogPage({ params }: Props) {
  const data = blogData[params.slug.toLowerCase()];
  if (!data) return notFound();
  return <BlogSection {...data} />;
} 