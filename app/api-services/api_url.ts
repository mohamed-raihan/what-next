const API_URL = {
    SERVICES: {
        GET_ALL_SERVICES: '/api/services',
        GET_SERVICE_BY_ID: '/api/services/:id',
        CREATE_SERVICE: '/api/services',
        UPDATE_SERVICE: '/api/services/:id',
        DELETE_SERVICE: '/api/services/:id',
    },
    BLOGS: {
        POST_BLOG_CATEGORIES: '/api/blog-category',
        GET_BLOG_CATEGORIES: '/api/blog-category',
        PATCH_BLOG_CATEGORY: (id: string) => `/api/blog-category/${id}`,
    },
}