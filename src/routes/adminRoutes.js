import config from '~/config';
import { EditProduct, ListProduct } from '~/pages/AdminPages/ProductManagePage';

const productRoutes = [
    {
        path: config.routes.admin + '/san-pham',
        element: <ListProduct />,
    },
    {
        path: config.routes.admin + '/san-pham/them',
        element: <EditProduct />,
    },
    {
        path: config.routes.admin + '/san-pham/:slug',
        element: <EditProduct />,
    },
];

const adminRoutes = [...productRoutes];

export default adminRoutes;
