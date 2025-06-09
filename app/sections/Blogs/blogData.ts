import api from "@/app/api-services/axios";

export interface BlogData {
  title: string;
  slug: string;
  author: string;
  date: string;
  mainImage: string;
  content: string;
  tags: string[];
  category: string;
  readTime: string;
}

export async function getBlogCategories() {
  const response = await api.get(API_URL.BLOGS.GET_BLOG_CATEGORIES);
  const data = await response.data;
  return data;
}

export const blogData: Record<string, BlogData> = {

  'why-canada-top-choice': {
    title: 'Why Canada Remains A Top Choice For Indian Students',
    slug: 'why-canada-top-choice',
    author: 'Admin',
    date: '27 August, 2024',
    mainImage: '/blogs/canadaBlog.svg',
    content: `Canada continues to be a preferred destination for Indian students due to its world-class education, multicultural environment, and post-study work opportunities. In this article, we explore the reasons why Canada stands out...`,
    tags: ['Canada', 'Study Abroad', 'Indian Students'],
    category: 'Canada',
    readTime: '20 mins',
  },
  // Add more blogs here...
}; 