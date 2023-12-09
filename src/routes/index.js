import { DefaultLayout, HeaderOnlyLayout } from '~/layouts';
import { HomePage, ProductPage } from '~/pages/';
import config from '~/config';

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
                        handle: {
                            crumb: (data) => <span>{data}</span>,
                        },
                    },
                ],
                handle: {
                    crumb: () => <span>Loại Sản phẩm</span>,
                },
            },
        ],
    },
    {
        element: <HeaderOnlyLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                handle: {
                    crumb: () => 'Home',
                },
            },
            {
                path: config.routes.home,
                element: <HomePage />,
            },
        ],
    },
];
