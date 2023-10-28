export const API_ROUTES = {
    categories: {
        path: 'categories',
        routes: {},
    },
    products: {
        path: 'products',
        routes: {
            findByCategory: 'by-category/',
        },
    },
};
