import Link from 'next/link';
import { blogData } from '@/app/sections/Blogs/blogData';
import BlogList from '../sections/Blogs/BlogList';

export default function Blogs() {
  return (
    <div >
      <BlogList/>
    </div>
  );
}