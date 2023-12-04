import { HeaderOnlyLayout } from '~/layouts';
import { HomePage } from '~/pages/';

export const publicRoutes = [
    // {
    //     element: <DefaultLayout />,
    //     children: [
    //         {
    //             path: '/',
    //             element: <HomePage />,
    //         },
    //     ],
    // },
    {
        element: <HeaderOnlyLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
];
