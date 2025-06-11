export const API_URL = {
    HOME: {
        SUCCESS_VIDEOS: '/api/video/',
        REVIEWS: '/api/student-review/',
    },
    SERVICES: {
        GET_SERVICE_HEADING: '/api/service-header/',
        GET_SERVICE_DETAILS: '/api/service-body/',
    },
    BLOGS: {
        POST_BLOG_CATEGORIES: '/api/blog-category',
        GET_BLOG_CATEGORIES: '/api/blog-category',
        PATCH_BLOG_CATEGORY: (id: string) => `/api/blog-category/${id}`,
    },
}