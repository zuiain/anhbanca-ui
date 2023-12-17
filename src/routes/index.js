import { DefaultLayout, HeaderOnlyLayout } from '~/layouts';
import { HomePage, ProductPage } from '~/pages/';
import config from '~/config';
import ProductDetailPage from '~/pages/ProductDetailPage';
import CartPage from '~/pages/CartPage';
import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';

export const publicRoutes = [
    {
        element: <DefaultLayout />,
        children: [
            // route sản phẩm theo category
            {
                path: config.routes.category,
                children: [
                    {
                        path: config.routes.category + '/:category',
                        element: <ProductPage />,
                    },
                ],
            },
        ],
    },
    {
        element: <HeaderOnlyLayout />,
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
                path: '/gio-hang',
                element: <CartPage />,
            },
            {
                path: '/dang-nhap',
                element: <LoginPage />,
            },
            {
                path: '/dang-ky',
                element: <RegisterPage />,
            },
            {
                path: '/:slug',
                element: <ProductDetailPage />,
            },
        ],
    },
];
