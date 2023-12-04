import { useRoutes } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    return <div className="App">{useRoutes(publicRoutes)}</div>;
}

export default App;
