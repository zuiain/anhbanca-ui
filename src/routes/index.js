import config from '~/config';
import { ProductLayout, MainLayout, AdminLayout } from '~/layouts';
import { HomePage, ProductPage, ProductDetailPage, CartPage, LoginPage, RegisterPage, WishlistPage } from '~/pages/';

export const publicRoutes = [
    {
        element: <ProductLayout />,
        path: config.routes.category,
        children: [
            // route sản phẩm theo category
            {
                path: config.routes.category + '/:category',
                element: <ProductPage />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: config.routes.home,
                element: <HomePage />,
            },
            {
                path: config.routes.cart,
                element: <CartPage />,
            },
            {
                path: config.routes.login,
                element: <LoginPage />,
            },
            {
                path: config.routes.register,
                element: <RegisterPage />,
            },
            {
                path: config.routes.wishlist,
                element: <WishlistPage />,
            },
            {
                path: '/:slug',
                element: <ProductDetailPage />,
            },
        ],
    },
    {
        element: <AdminLayout />,
        path: config.routes.admin,
        children: [
            // route sản phẩm theo category
            {
                path: config.routes.admin + '/',
                element: <ProductPage />,
            },
        ],
    },
];
