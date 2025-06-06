// import { blogData } from '../../sections/Blogs/blogData';
// import BlogSection from '../../sections/Blogs/BlogSection';
// import { notFound } from 'next/navigation';

// type PageProps = {
//   params: { slug: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// }

// export default async function BlogPage({ params }: PageProps) {
//   const data = blogData[params.slug.toLowerCase()];
//   if (!data) return notFound();
//   return <BlogSection {...data} />;
// } 

export default function BlogPage() {
    return <div>BlogPage</div>;
}