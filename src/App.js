//import { createBrowserRouter, RouterProvider } from 'react-router-dom';//const router = createBrowserRouter(publicRoutes);
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    //return <RouterProvider router={router} />;
    const _publicRoutes = useRoutes(publicRoutes);
    return <div>{_publicRoutes}</div>;
}

export default App;
