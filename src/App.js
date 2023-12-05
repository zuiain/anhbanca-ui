import { useRoutes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import './Grid.css';

function App() {
    return <div className="App">{useRoutes(publicRoutes)}</div>;
}

export default App;
