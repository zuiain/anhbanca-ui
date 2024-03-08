import { useRoutes } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    const _publicRoutes = useRoutes(publicRoutes);
    return <>{_publicRoutes}</>;
}

export default App;
